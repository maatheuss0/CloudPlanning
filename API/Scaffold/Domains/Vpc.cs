using System;
using System.Collections.Generic;

#nullable disable

namespace CloudPlanning_WebApi.Domains
{
    public partial class Vpc
    {
        public Vpc()
        {
            Ec2s = new HashSet<Ec2>();
        }

        public int IdVpc { get; set; }
        public int? IdRoute { get; set; }
        public int? IdSubnet { get; set; }
        public int? IdGrupoSeguranca { get; set; }
        public string Nome { get; set; }
        public string ImagemComponente { get; set; }
        public string Descricao { get; set; }
        public string NatGateway { get; set; }

        public virtual GrupoSeguranca IdGrupoSegurancaNavigation { get; set; }
        public virtual Rotum IdRouteNavigation { get; set; }
        public virtual Subnet IdSubnetNavigation { get; set; }
        public virtual ICollection<Ec2> Ec2s { get; set; }
    }
}
