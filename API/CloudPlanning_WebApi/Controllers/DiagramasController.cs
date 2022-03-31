using CloudPlanning_WebApi.Domains;
using CloudPlanning_WebApi.Interfaces;
using CloudPlanning_WebApi.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudPlanning_WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiagramasController : ControllerBase
    {
        private IDiagramaRepository _diagramaRepository { get; set; }

        public DiagramasController()
        {
            _diagramaRepository = new DiagramaRepository();
        }


        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_diagramaRepository.Listar());
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
                return Ok(_diagramaRepository.BuscarPorId(Id));
            }
            catch (Exception Erro)
            {
                return BadRequest(Erro);
            }
        }



        [HttpPost]
        public IActionResult Post(Diagrama NovaDiagrama)
        {
            try
            {
                _diagramaRepository.Cadastrar(NovaDiagrama);

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
                _diagramaRepository.Deletar(Id);
                return StatusCode(204);
            }
            catch (Exception Erro)
            {
                return BadRequest(Erro);
            }
        }

        [HttpPut("{Id}")]
        public IActionResult Put(int Id, Diagrama DiagramaAtualizada)
        {
            try
            {
                _diagramaRepository.Atualizar(Id, DiagramaAtualizada);
                return StatusCode(204);
            }
            catch (Exception Erro)
            {
                return BadRequest(Erro);
            }
        }
    }
}
