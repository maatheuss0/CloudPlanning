using System;
using System.Collections.Generic;

#nullable disable

namespace CloudPlanning_WebApi.Domains
{
    public partial class Empresa
    {
        public Empresa()
        {
            Diagramas = new HashSet<Diagrama>();
            UsuarioComums = new HashSet<UsuarioComum>();
        }

        public int IdEmpresa { get; set; }
        public int? IdUsuario { get; set; }
        public string Cnpj { get; set; }
        public string NomeFantasia { get; set; }
        public string Telefone { get; set; }

        public virtual Usuario IdUsuarioNavigation { get; set; }
        public virtual ICollection<Diagrama> Diagramas { get; set; }
        public virtual ICollection<UsuarioComum> UsuarioComums { get; set; }
    }
}
