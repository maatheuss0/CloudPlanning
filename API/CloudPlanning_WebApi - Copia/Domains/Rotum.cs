using System;
using System.Collections.Generic;

#nullable disable

namespace CloudPlanning_WebApi.Domains
{
    public partial class Rotum
    {
        public Rotum()
        {
            Vpcs = new HashSet<Vpc>();
        }

        public int IdRoute { get; set; }
        public string NomeRoute { get; set; }
        public string BlockIp { get; set; }
        public string IpOrigem { get; set; }
        public string IpDestino { get; set; }

        public virtual ICollection<Vpc> Vpcs { get; set; }
    }
}
