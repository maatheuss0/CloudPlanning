using System;
using System.Collections.Generic;

#nullable disable

namespace CloudPlanning_WebApi.Domains
{
    public partial class Diagrama
    {
        public int IdDiagrama { get; set; }
        public int? IdEmpresa { get; set; }
        public int? IdComponentes { get; set; }
        public string Nome { get; set; }

        public virtual Componente IdComponentesNavigation { get; set; }
        public virtual Empresa IdEmpresaNavigation { get; set; }
    }
}
