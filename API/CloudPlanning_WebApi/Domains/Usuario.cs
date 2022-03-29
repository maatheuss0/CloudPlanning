using System;
using System.Collections.Generic;

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
        public string Email { get; set; }
        public string Senha { get; set; }

        public virtual ICollection<Empresa> Empresas { get; set; }
        public virtual ICollection<UsuarioComum> UsuarioComums { get; set; }
    }
}
