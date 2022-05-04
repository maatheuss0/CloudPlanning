using System;
using System.Collections.Generic;

#nullable disable

namespace CloudPlanning_WebApi.Domains
{
    public partial class GrupoSeguranca
    {
        public GrupoSeguranca()
        {
            Vpcs = new HashSet<Vpc>();
        }

        public int IdGrupoSeguranca { get; set; }
        public string NomeGrupoSeguranca { get; set; }
        public string FromPortIngress { get; set; }
        public string ToPortIngress { get; set; }
        public string ProtocolIngress { get; set; }
        public string CidrBlocksIngress { get; set; }
        public string FromPortEgress { get; set; }
        public string ToPortEgress { get; set; }
        public string ProtocolEgress { get; set; }
        public string CidrBlocksEgress { get; set; }

        public virtual ICollection<Vpc> Vpcs { get; set; }
    }
}
