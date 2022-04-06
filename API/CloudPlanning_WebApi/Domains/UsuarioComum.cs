using System;
using System.Collections.Generic;

#nullable disable

namespace CloudPlanning_WebApi.Domains
{
    public partial class UsuarioComum
    {
        public int IdUsuarioComum { get; set; }
        public int? IdUsuario { get; set; }
        public int? IdEmpresa { get; set; }
        public string Nome { get; set; }
        public string Cpf { get; set; }
        public DateTime DataNascimento { get; set; }

        public virtual Empresa IdEmpresaNavigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
