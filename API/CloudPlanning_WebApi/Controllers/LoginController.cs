﻿using CloudPlanning_WebApi.Domains;
using CloudPlanning_WebApi.Interfaces;
using CloudPlanning_WebApi.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace CloudPlanning_WebApi.Controllers
{
    // Define que o tipo de resposta da API será no formato JSON
    [Produces("application/json")]

    // Define que a rota de uma requisição será no formato domínio/api/NomeController
    [Route("api/[controller]")]

    // Define que é um controlador de API
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IUsuarioRepository _usuarioRepository;

        public LoginController(IUsuarioRepository contexto)
        {
            _usuarioRepository = contexto;
        }

        /// <summary>
        /// Valida o usuário
        /// </summary>
        /// <param name="login">Objeto login que contém o e-mail e a senha do usuário</param>
        /// <returns>Retorna um token com as informações do usuário</returns>
        /// dominio/api/Login
        [HttpPost]
        public IActionResult Login(LoginViewModel login)
        {
            try
            {
                int claimAutorizacao = 0;

                Usuario usuarioBuscado = _usuarioRepository.Login(login.Email, login.Senha);

                if (usuarioBuscado == null)
                {
                    return Unauthorized(new { msg = "Email ou senha incorretos" });
                }

                if (usuarioBuscado.Empresas == null)
                {
                    claimAutorizacao = 1;
                }
                else if(usuarioBuscado.UsuarioComums == null)
                {
                    claimAutorizacao = 2;
                        
                }

                var minhasClaims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Email, usuarioBuscado.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, claimAutorizacao.ToString()),
                    new Claim("TipoUsuario", claimAutorizacao.ToString())
                };

                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("cloudplanning-chave-autenticacao"));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var meuToken = new JwtSecurityToken(
                        issuer: "CloudPlanning.webAPI",
                        audience: "CloudPlanning.webAPI",
                        claims: minhasClaims,
                        expires: DateTime.Now.AddMinutes(360),
                        signingCredentials: creds
                    );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(meuToken)
                });
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
