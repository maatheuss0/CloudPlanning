using System;
using System.Collections.Generic;

#nullable disable

namespace CloudPlanning_WebApi.Domains
{
    public partial class Usuario
    {
        public Usuario()
        {
            Diagramas = new HashSet<Diagrama>();
        }

        public int IdUsuario { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Nome { get; set; }
/*        public string Imagem { get; set; }*/
        public DateTime DataNascimento { get; set; }

        public virtual ICollection<Diagrama> Diagramas { get; set; }
    }
}
