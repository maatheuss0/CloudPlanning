using CloudPlanning_WebApi.Contexts;
using CloudPlanning_WebApi.Domains;
using CloudPlanning_WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudPlanning_WebApi.Repositories
{
    public class DiagramaRepository : IDiagramaRepository
    {
        private readonly CloudPlanningContext ctx = new();

        public void Atualizar(int id, Diagrama DiagramaAtualizado)
        {
            Diagrama DiagramaBuscada = BuscarPorId(id);

            if (DiagramaAtualizado.Nome != null)
            {
                DiagramaBuscada.Nome = DiagramaAtualizado.Nome;
            }

            ctx.Diagramas.Update(DiagramaBuscada);

            ctx.SaveChanges();
        }

        public Diagrama BuscarPorId(int id)
        {
            return ctx.Diagramas.FirstOrDefault(p => p.IdDiagrama == id);
        }

        public void Cadastrar(Diagrama novaDiagrama)
        {
            ctx.Diagramas.Add(novaDiagrama);
            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Diagrama DiagramaBuscado = BuscarPorId(id);

            ctx.Diagramas.Remove(DiagramaBuscado);

            ctx.SaveChanges();
        }

        public List<Diagrama> Listar()
        {
            return ctx.Diagramas.ToList();
        }
    }
}
