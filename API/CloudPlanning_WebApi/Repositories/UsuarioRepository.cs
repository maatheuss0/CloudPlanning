﻿using CloudPlanning_WebApi.Contexts;
using CloudPlanning_WebApi.Domains;
using CloudPlanning_WebApi.Interfaces;
using CloudPlanning_WebApi.Utils;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace CloudPlanning_WebApi.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly CloudPlanningContext ctx;

        public UsuarioRepository(CloudPlanningContext appContext)
        {
            ctx = appContext;
        }

        public void Atualizar(int id, Usuario usuarioAtualizado)
        {
            Usuario usuarioBuscado = BuscarPorId(id);

            if (usuarioAtualizado.Email != null)
            {
                usuarioBuscado.Email = usuarioAtualizado.Email;
            }

            if (usuarioAtualizado.Senha != null)
            {
                usuarioBuscado.Senha = usuarioAtualizado.Senha;
            }

            ctx.Usuarios.Update(usuarioBuscado);

            ctx.SaveChanges();
        }

        public Usuario BuscarPorId(int id)
        {
            return ctx.Usuarios.FirstOrDefault(p => p.IdUsuario == id);
        }

        public void Cadastrar(Usuario novoUsuario)
        {

            novoUsuario.Senha = Cripto.GerarHash(novoUsuario.Senha);

            ctx.Usuarios.Add(novoUsuario);

            ctx.SaveChanges();


        }

        public void Deletar(int id)
        {
            Usuario UsuarioBuscado = BuscarPorId(id);

            ctx.Usuarios.Remove(UsuarioBuscado);

            ctx.SaveChanges();
        }

        public List<Usuario> Listar()
        {
            return ctx.Usuarios.ToList();
        }

        public Usuario Login(string email, string password)
        {
            var usuario = ctx.Usuarios.FirstOrDefault(u => u.Email == email);

            if (usuario != null)
            {
                if (usuario.Senha == password)
                {
                    usuario.Senha = Cripto.GerarHash(usuario.Senha);

                    ctx.Usuarios.Update(usuario);
                    ctx.SaveChanges();
                }

                bool comparado = Cripto.CompararSenha(password, usuario.Senha);

                if (comparado) return usuario;
            }
            return null;
        }
    }
}
