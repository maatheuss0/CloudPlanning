using System;
using System.Collections.Generic;

#nullable disable

namespace CloudPlanning_WebApi.Domains
{
    public partial class Diagrama
    {
        public int IdDiagrama { get; set; }
        public int? IdUsuario { get; set; }
        public int? IdEc2 { get; set; }
        public string Nome { get; set; }

        public virtual Ec2 IdEc2Navigation { get; set; }
        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
