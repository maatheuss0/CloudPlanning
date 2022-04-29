using System;
using System.IO;

namespace testandooooooooooooo
{
    class Program
    {
        static void Main(string[] args)
        {
            string sourceDir = @"C:\Users\47503739827.INFOSCS\Desktop\CloudPlanning - Copia\testandooooooooooooo\script\";
            string destinoDir = @"C:\Users\47503739827.INFOSCS\Desktop\";

            
            string[] txtList = Directory.GetFiles(sourceDir, "*.tf");

            foreach (string f in txtList)
            {

                // Remove path from the file name.
                //string fName = f.Substring(sourceDir.Length);
                string fName = f[sourceDir.Length..];



                // Will not overwrite if the destination file already exists.
                File.Copy(Path.Combine(sourceDir, fName), Path.Combine(destinoDir, fName)); // 41 items
                var texto = File.ReadAllText(destinoDir + fName)
                    .Replace("[enable_dns_hostnames]", "true")
                    .Replace("[nomeVPC]", "TestandoVPC")
                    .Replace("[NomeGateway]", "TestandoGateway")
                    .Replace("[from_port_ingress]", "22222")
                    .Replace("[to_port_ingress]", "22222")
                    .Replace("[protocol_ingress]", "22222")
                    .Replace("[cidr_blocks_ingress]", "0.0.0.0/0")
                    .Replace("[from_port_egress]", "22222")
                    .Replace("[to_port_egress]", "22222")
                    .Replace("[protocol_egress]", "ssh")
                    .Replace("[cidr_blocks_egress]", "0.0.0.0/0")
                    .Replace("[NomeGrupoSeguranca]", "TesteSeguranca")
                    .Replace("[cidr_block_aws_subnet_public]", "0.0.0.0/0")
                    .Replace("[availability_zone_public]", "a")
                    .Replace("[NomeSubnetPublica]", "SUBNETPUBLICA")
                    .Replace("[cidr_block_aws_subnet_private]", "0.0.0.0/0")
                    .Replace("[availability_zone_private]", "b")
                    .Replace("[NomeSubnetPrivada]", "SUBNETPRIVADA")
                    .Replace("[cidr_block_route]", "0.0.0.0/0")
                    .Replace("[NomeRota]", "TesteRota")
                    .Replace("[access_key]", "access_key")
                    .Replace("[secret_key]", "secret_key")
                    .Replace("[region]", "region") 
                    .Replace("[associate_public_ip_address]", "true")
                    .Replace("[instance_type_ec2]", "instance_type_ec2")
                    .Replace("[instance_type_ec2]", "instance_type_ec2")
                    .Replace("[key_name]", "key_name");


                // File.WriteAllLines
                File.WriteAllText(destinoDir + fName, texto);
            }
        }
    }
}
