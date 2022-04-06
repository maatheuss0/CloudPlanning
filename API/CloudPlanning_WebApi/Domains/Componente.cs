using System;
using System.Collections.Generic;

#nullable disable

namespace CloudPlanning_WebApi.Domains
{
    public partial class Componente
    {
        public Componente()
        {
            Diagramas = new HashSet<Diagrama>();
        }

        public int IdComponentes { get; set; }
        public string Nome { get; set; }
        public string Codigo { get; set; }
        public string ImagemComponente { get; set; }
        public string Descricao { get; set; }

        public virtual ICollection<Diagrama> Diagramas { get; set; }
    }
}
