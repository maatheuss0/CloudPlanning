using System;
using System.Collections.Generic;

#nullable disable

namespace CloudPlanning_WebApi.Domains
{
    public partial class Subnet
    {
        public Subnet()
        {
            Vpcs = new HashSet<Vpc>();
        }

        public int IdSubnet { get; set; }
        public string Nome { get; set; }
        public string IpSubnet { get; set; }
        public string Area { get; set; }
        public string SubRede { get; set; }
        public string Mascara { get; set; }
        public string Acesso { get; set; }

        public virtual ICollection<Vpc> Vpcs { get; set; }
    }
}
