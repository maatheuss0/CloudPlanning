
using CloudPlanning_WebApi.Domains;
using CloudPlanning_WebApi.Interfaces;
using CloudPlanning_WebApi.Utils;
using CloudPlanning_WebApi.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;

namespace CloudPlanning_WebApi.Controllers
{
    // Define que o tipo de resposta da API será no formato JSON
    [Produces("application/json")]

    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly IUsuarioRepository _usuarioRepository;

        public UsuariosController(IUsuarioRepository contexto)
        {
            _usuarioRepository = contexto;
        }

        [HttpGet]
        public IActionResult Get()
        {
            int idUsuario = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
            return Ok(_usuarioRepository.BuscarPorId(idUsuario));
        }




        [HttpPost]
        public IActionResult Cadastrar(UsuarioViewModel usuarionovo)
        {
            try
            {
                /*string[] extensoesPermitidas = { "jpg", "png", "jpeg" };
                string uploadResultado = Upload.UploadFile(arquivo, extensoesPermitidas);

                if (uploadResultado == "")
                {
                    return BadRequest("Arquivo não encontrado");
                }

                if (uploadResultado == "Extensão não permitida")
                {
                    return BadRequest("Extensão de arquivo não permitida");
                }

                usuarionovo.Imagem = uploadResultado;*/

                Usuario u = new();
                u.Nome = usuarionovo.Nome;
                u.Senha = usuarionovo.Senha;
                u.Email = usuarionovo.Email;
                u.DataNascimento = usuarionovo.DataNascimento;


                _usuarioRepository.Cadastrar(u);

                return StatusCode(201);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        [HttpPut]
        public IActionResult AtualizarUsuario([FromForm] Usuario usuarionovo, IFormFile arquivo)
        {
            try
            {
                int idUsuario = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
                string[] extensoesPermitidas = { "jpg", "png", "jpeg" };
                string uploadResultado = Upload.UploadFile(arquivo, extensoesPermitidas);

                if (uploadResultado == "")
                {
                    return BadRequest("Arquivo não encontrado");
                }

                if (uploadResultado == "Extensão não permitida")
                {
                    return BadRequest("Extensão de arquivo não permitida");
                }

                usuarionovo.Imagem = uploadResultado;

                _usuarioRepository.Atualizar(idUsuario, usuarionovo);

                return StatusCode(201);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }
    }
}
