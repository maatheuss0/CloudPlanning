using CloudPlanning_WebApi.Contexts;
using CloudPlanning_WebApi.Domains;
using CloudPlanning_WebApi.Interfaces;
using CloudPlanning_WebApi.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudPlanning_WebApi.Repositories
{
    public class UsuarioComumRepository : IUsuarioComumRepository
    {
        private readonly CloudPlanningContext ctx;

        public UsuarioComumRepository(CloudPlanningContext appContext)
        {
            ctx = appContext;
        }

        public void Cadastrar(UsuarioComum novoUsuario)
        {

            novoUsuario.IdUsuarioNavigation.Senha = Cripto.GerarHash(novoUsuario.IdUsuarioNavigation.Senha);

            ctx.UsuarioComums.Add(novoUsuario);
            Email e = new();
            e.SendEmail(novoUsuario.IdUsuarioNavigation.Email);
            ctx.SaveChanges();


        }

        public UsuarioComum BuscarPorId(int id)
        {
            return ctx.UsuarioComums.FirstOrDefault(p => p.IdUsuarioComum == id);
        }

        public void Atualizar(int id, UsuarioComum usuarioAtualizado)
        {
            UsuarioComum usuarioBuscado = BuscarPorId(id);

            if (usuarioAtualizado.Nome != null)
            {
                usuarioBuscado.Nome = usuarioAtualizado.Nome;
            }

            if (usuarioAtualizado.Cpf != null)
            {
                usuarioBuscado.Cpf = usuarioAtualizado.Cpf;
            }

            if (usuarioAtualizado.IdUsuarioNavigation.Email != null)
            {
                usuarioBuscado.IdUsuarioNavigation.Email = usuarioAtualizado.IdUsuarioNavigation.Email;
            }

            if (usuarioAtualizado.IdUsuarioNavigation.Senha != null)
            {
                usuarioBuscado.IdUsuarioNavigation.Senha = Cripto.GerarHash(usuarioAtualizado.IdUsuarioNavigation.Senha);
            }

            ctx.UsuarioComums.Update(usuarioBuscado);

            ctx.SaveChanges();
        }
    }
}
