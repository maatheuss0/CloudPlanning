using CloudPlanning_WebApi.Contexts;
using CloudPlanning_WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudPlanning_WebApi.Repositories
{
    public class ComponenteRepository
    {
        private readonly CloudPlanningContext ctx = new();

        public void Atualizar(int id, Componente ComponenteAtualizado)
        {
            Componente ComponenteBuscada = BuscarPorId(id);

            if (ComponenteAtualizado.Nome != null)
            {
                ComponenteBuscada.Nome = ComponenteAtualizado.Nome;
            }
            if (ComponenteAtualizado.Codigo != null)
            {
                ComponenteBuscada.Codigo = ComponenteAtualizado.Codigo;
            }
            if (ComponenteAtualizado.ImagemComponente != null)
            {
                ComponenteBuscada.ImagemComponente = ComponenteAtualizado.ImagemComponente;
            }
            if (ComponenteAtualizado.Descricao != null)
            {
                ComponenteBuscada.Descricao = ComponenteAtualizado.Descricao;
            }

            ctx.Componentes.Update(ComponenteBuscada);

            ctx.SaveChanges();
        }

        public Componente BuscarPorId(int id)
        {
            return ctx.Componentes.FirstOrDefault(p => p.IdComponentes == id);
        }

        public void Cadastrar(Componente novaComponente)
        {
            ctx.Componentes.Add(novaComponente);
            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Componente ComponenteBuscado = BuscarPorId(id);

            ctx.Componentes.Remove(ComponenteBuscado);

            ctx.SaveChanges();
        }

        public List<Componente> Listar()
        {
            return ctx.Componentes.ToList();
        }
    }
}
