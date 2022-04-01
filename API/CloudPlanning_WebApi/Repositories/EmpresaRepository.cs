using CloudPlanning_WebApi.Contexts;
using CloudPlanning_WebApi.Domains;
using CloudPlanning_WebApi.Interfaces;
using CloudPlanning_WebApi.Utils;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace CloudPlanning_WebApi.Repositories
{
    public class EmpresaRepository : IEmpresaRepository
    {
        private readonly CloudPlanningContext ctx;

        public EmpresaRepository(CloudPlanningContext appContext)
        {
            ctx = appContext;
        }

        public void Atualizar(int id, Empresa empresaAtualizado)
        {
            Empresa empresaBuscada = BuscarPorId(id);

            if (empresaAtualizado.Telefone != null)
            {
                empresaBuscada.Telefone = empresaAtualizado.Telefone;
            }
            if (empresaAtualizado.NomeFantasia != null)
            {
                empresaBuscada.NomeFantasia = empresaAtualizado.NomeFantasia;
            }
            if (empresaAtualizado.Cnpj != null)
            {
                empresaBuscada.Cnpj = empresaAtualizado.Cnpj;
            }

            ctx.Empresas.Update(empresaBuscada);

            ctx.SaveChanges();
        }

        public Empresa BuscarPorId(int id)
        {
            return ctx.Empresas.FirstOrDefault(p => p.IdEmpresa == id);
        }

        public Empresa BuscarPorIdUser(int? id)
        {
            return ctx.Empresas.FirstOrDefault(p => p.IdUsuario == id);
        }

        public void Cadastrar(Empresa novaEmpresa)
        {
            novaEmpresa.IdUsuarioNavigation.Senha = Cripto.GerarHash(novaEmpresa.IdUsuarioNavigation.Senha);

            ctx.Empresas.Add(novaEmpresa);
            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Empresa empresaBuscado = BuscarPorId(id);

            ctx.Empresas.Remove(empresaBuscado);

            ctx.SaveChanges();
        }

        public List<Empresa> Listar()
        {
            return ctx.Empresas.ToList();
        }

        

    }
}
