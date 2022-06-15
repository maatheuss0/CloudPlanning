using System;
using System.ComponentModel.DataAnnotations;

namespace CloudPlanning_WebApi.ViewModels
{
    public class UsuarioViewModel
    {
        [Required(ErrorMessage = "Informe o e-mail do usuário!")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Informe a senha do usuário!")]
        public string Senha { get; set; }
        
        [Required(ErrorMessage = "Informe o nome do usuário!")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "Informe a data de nascimento do usuário!")]
        public DateTime DataNascimento { get; set; }
    }
}
