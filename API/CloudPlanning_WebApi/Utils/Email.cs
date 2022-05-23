using System;
using System.IO;
using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using MimeKit.Text;

namespace CloudPlanning_WebApi.Utils
{
    public class Email
    {
        public void SendEmail(string Destinatario)
        {
            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse("cloudplanning132@gmail.com"));
            email.To.Add(MailboxAddress.Parse(Destinatario));
            email.Subject = "Bem vindo";

            string arqv = "C:\\Users\\47503739827.INFOSCS\\Desktop\\CloudPlanning\\API\\CloudPlanning_WebApi\\Template\\template.html";
            string texto = "";
            using (StreamReader leitor = new (arqv))
            {
                string linha = "";
                while (linha != null)
                {
                    linha = leitor.ReadLine();
                    texto += linha;
                }
            }

            email.Body = new TextPart(TextFormat.Html) { Text = texto };

            // send email
            using var smtp = new SmtpClient();
            smtp.Connect("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
            smtp.Authenticate("cloudplanning132@gmail.com", "Senai@132");
            smtp.Send(email);
            smtp.Disconnect(true);
        }
    }
}
