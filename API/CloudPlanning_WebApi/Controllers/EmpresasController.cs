using CloudPlanning_WebApi.Contexts;
using CloudPlanning_WebApi.Domains;
using CloudPlanning_WebApi.Interfaces;
using CloudPlanning_WebApi.Repositories;
using CloudPlanning_WebApi.Utils;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudPlanning_WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class EmpresasController : ControllerBase
    {
        private readonly IEmpresaRepository _empresaRepository;
        Email e = new();

        public EmpresasController(IEmpresaRepository contexto)
        {
            _empresaRepository = contexto;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok( _empresaRepository.Listar());
            }
            catch (Exception Erro)
            {
                return BadRequest(Erro);
            }
        }

        [HttpGet("{Id}")]
        public IActionResult GetById(int Id)
        {
            try
            {
                return Ok(_empresaRepository.BuscarPorId(Id));
            }
            catch (Exception Erro)
            {
                return BadRequest(Erro);
            }
        }

       

        [HttpPost]
        public IActionResult Post(Empresa NovaEmpresa)
        {
            try
            {
                _empresaRepository.Cadastrar(NovaEmpresa);
                e.SendEmail(NovaEmpresa.IdUsuarioNavigation.Email);

                return StatusCode(201);
            }
            catch (Exception Erro)
            {
                return BadRequest(Erro);
            }
        }

        [HttpDelete("{Id}")]
        public IActionResult Delete(int Id)
        {
            try
            {
                _empresaRepository.Deletar(Id);
                return StatusCode(204);
            }
            catch (Exception Erro)
            {
                return BadRequest(Erro);
            }
        }

        [HttpPut("{Id}")]
        public IActionResult Put(int Id, Empresa EmpresaAtualizada)
        {
            try
            {
                _empresaRepository.Atualizar(Id, EmpresaAtualizada);
                return StatusCode(204);
            }
            catch (Exception Erro)
            {
                return BadRequest(Erro);
            }
        }
    }
}
