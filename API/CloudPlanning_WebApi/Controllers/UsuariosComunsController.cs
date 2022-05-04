
using CloudPlanning_WebApi.Domains;
using CloudPlanning_WebApi.Interfaces;
using CloudPlanning_WebApi.Utils;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace CloudPlanning_WebApi.Controllers
{
    // Define que o tipo de resposta da API será no formato JSON
    [Produces("application/json")]

    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosComunsController : ControllerBase
    {
        Email e = new();
        private readonly IUsuarioComumRepository _usuarioComumRepository;

        public UsuariosComunsController(IUsuarioComumRepository contexto)
        {
            _usuarioComumRepository = contexto;
        }

        [HttpPost]
        public IActionResult Post(UsuarioComum user)
        {
            try
            {
                _usuarioComumRepository.Cadastrar(user);
               

                return Created("Usuario Cadastrado", new { id = user.IdUsuario });
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }
    }
}
