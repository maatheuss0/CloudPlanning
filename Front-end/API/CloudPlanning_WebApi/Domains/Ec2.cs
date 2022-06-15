using System;
using System.Collections.Generic;

#nullable disable

namespace CloudPlanning_WebApi.Domains
{
    public partial class Ec2
    {
        public Ec2()
        {
            Diagramas = new HashSet<Diagrama>();
        }

        public int IdEc2 { get; set; }
        public int? IdVpc { get; set; }
        public string Nome { get; set; }
        public string ImagemComponente { get; set; }
        public string Descricao { get; set; }
        public string SistemaOperacional { get; set; }
        public int Armazenamento { get; set; }
        public int QuantidadeProcessadores { get; set; }
        public int Ram { get; set; }
        public string SubRede { get; set; }
        public bool? AutoAssign { get; set; }
        public string NomeChave { get; set; }

        public virtual Vpc IdVpcNavigation { get; set; }
        public virtual ICollection<Diagrama> Diagramas { get; set; }
    }
}
