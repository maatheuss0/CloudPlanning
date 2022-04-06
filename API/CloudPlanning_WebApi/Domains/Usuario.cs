using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace CloudPlanning_WebApi.Domains
{
    public partial class Usuario
    {
        public Usuario()
        {
            Empresas = new HashSet<Empresa>();
            UsuarioComums = new HashSet<UsuarioComum>();
        }

        public int IdUsuario { get; set; }

        [Required(ErrorMessage = "Email é obrigatório")]
        [EmailAddress(ErrorMessage = "Email Invalido")  ]
        public string Email { get; set; }

        [Required(ErrorMessage = "Senha é obrigatório")]
        public string Senha { get; set; }

        public virtual ICollection<Empresa> Empresas { get; set; }
        public virtual ICollection<UsuarioComum> UsuarioComums { get; set; }
    }
}
