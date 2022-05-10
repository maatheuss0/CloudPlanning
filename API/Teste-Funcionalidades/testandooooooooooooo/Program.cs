using System;
using System.IO;

namespace testandooooooooooooo
{
    class Program
    {
        static void Main(string[] args)
        {
            string sourceDir = @"C:\Users\47503739827.INFOSCS\Desktop\CloudPlanning\API\Teste-Funcionalidades\testandooooooooooooo\script\";
            string destinoDir = @"C:\Users\47503739827.INFOSCS\Desktop\";

            void criandoEC2()
            {
                string[] txtList = Directory.GetFiles(sourceDir, "ec2.tf");

                foreach (string f in txtList)
                {

                    // Remove path from the file name.
                    //string fName = f.Substring(sourceDir.Length);
                    string fName = f[sourceDir.Length..];



                    // Will not overwrite if the destination file already exists.
                    File.Copy(Path.Combine(sourceDir, fName), Path.Combine(destinoDir, fName));
                    var texto = File.ReadAllText(destinoDir + fName)
                        .Replace("[image_id_ec2]", "image_id_ec2")
                        .Replace("[instance_type_ec2]", "instance_type_ec2")
                        .Replace("[key_name]", "key_name")
                        .Replace("[associate_public_ip_address]", "associate_public_ip_address")
                        .Replace("[NameSecurity]", "NameSecurity")
                        .Replace("[from_port_http]", "from_port_http")
                        .Replace("[to_port_http]", "to_port_http")
                        .Replace("[protocol_http]", "protocol_http")
                        .Replace("[cidr_blocks_http]", "cidr_blocks_http")
                        .Replace("[from_port_ssh]", "from_port_ssh")
                        .Replace("[to_port_ssh]", "to_port_ssh")
                        .Replace("[protocol_ssh]", "protocol_ssh")
                        .Replace("[cidr_blocks_ssh]", "cidr_blocks_ssh")
                        .Replace("[from_port_egress_security_group]", "from_port_egress_security_group")
                        .Replace("[to_port_egress_security_group]", "to_port_egress_security_group")
                        .Replace("[protocol_egress_security_group]", "protocol_egress_security_group")
                        .Replace("[cidr_blocks_egress_security_group]", "cidr_blocks_egress_security_group")
                        .Replace("[NomeSeguranca]", "NomeSeguranca");



                    // File.WriteAllLines
                    File.WriteAllText(destinoDir + fName, texto);
                }
            }

            void criandoVPC()
            {
                string[] txtList = Directory.GetFiles(sourceDir, "vpc.tf");

                foreach (string f in txtList)
                {

                    // Remove path from the file name.
                    //string fName = f.Substring(sourceDir.Length);
                    string fName = f[sourceDir.Length..];



                    // Will not overwrite if the destination file already exists.
                    File.Copy(Path.Combine(sourceDir, fName), Path.Combine(destinoDir, fName)); 
                    var texto = File.ReadAllText(destinoDir + fName)
                        .Replace("[enable_dns_hostnames]", "enable_dns_hostnames")
                        .Replace("[nomeVPC]", "nomeVPC")
                        .Replace("[NomeGateway]", "NomeGateway")
                        .Replace("[from_port_ingress]", "from_port_ingress")
                        .Replace("[to_port_ingress]", "to_port_ingress")
                        .Replace("[protocol_ingress]", "protocol_ingress")
                        .Replace("[cidr_blocks_ingress]", "cidr_blocks_ingress")
                        .Replace("[from_port_egress]", "from_port_egress")
                        .Replace("[to_port_egress]", "to_port_egress")
                        .Replace("[protocol_egress]", "protocol_egress")
                        .Replace("[cidr_blocks_egress]", "cidr_blocks_egress")
                        .Replace("[NomeGrupoSeguranca]", "NomeGrupoSeguranca");



                    // File.WriteAllLines
                    File.WriteAllText(destinoDir + fName, texto);
                }
            }

            void criandoRoute()
            {
                string[] txtList = Directory.GetFiles(sourceDir, "routes.tf");

                foreach (string f in txtList)
                {

                    // Remove path from the file name.
                    //string fName = f.Substring(sourceDir.Length);
                    string fName = f[sourceDir.Length..];



                    // Will not overwrite if the destination file already exists.
                    File.Copy(Path.Combine(sourceDir, fName), Path.Combine(destinoDir, fName)); 
                    var texto = File.ReadAllText(destinoDir + fName)
                        .Replace("[cidr_block_route]", "cidr_block_route")
                        .Replace("[NomeRota]", "NomeRota");

                    // File.WriteAllLines
                    File.WriteAllText(destinoDir + fName, texto);
                }
            }

            void criandoMain()
            {
                string[] txtList = Directory.GetFiles(sourceDir, "main.tf");

                foreach (string f in txtList)
                {

                    // Remove path from the file name.
                    //string fName = f.Substring(sourceDir.Length);
                    string fName = f[sourceDir.Length..];



                    // Will not overwrite if the destination file already exists.
                    File.Copy(Path.Combine(sourceDir, fName), Path.Combine(destinoDir, fName));
                    var texto = File.ReadAllText(destinoDir + fName)
                        .Replace("[access_key]", "access_key")
                        .Replace("[secret_key]", "secret_key")
                        .Replace("[region]", "region");

                    // File.WriteAllLines
                    File.WriteAllText(destinoDir + fName, texto);
                }
            }

            void criandoSubnet()
            {
                string[] txtList = Directory.GetFiles(sourceDir, "main.tf");

                foreach (string f in txtList)
                {

                    // Remove path from the file name.
                    //string fName = f.Substring(sourceDir.Length);
                    string fName = f[sourceDir.Length..];



                    // Will not overwrite if the destination file already exists.
                    File.Copy(Path.Combine(sourceDir, fName), Path.Combine(destinoDir, fName));
                    var texto = File.ReadAllText(destinoDir + fName)
                        .Replace("[access_key]", "access_key")
                        .Replace("[secret_key]", "secret_key")
                        .Replace("[region]", "region");

                    // File.WriteAllLines
                    File.WriteAllText(destinoDir + fName, texto);
                }
            }

            criandoRoute();
            criandoEC2();
            criandoMain();
        }
    }
}
