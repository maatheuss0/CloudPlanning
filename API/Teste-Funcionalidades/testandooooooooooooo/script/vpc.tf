
resource "aws_vpc" "devops_vpc" {
  cidr_block           = var.devops_sg_cidr_vpc
  enable_dns_hostnames = "[enable_dns_hostnames]" 

  tags = {
    Name = "[nomeVPC]" 
  }
}

# Create an internet gateway to give internet access
resource "aws_internet_gateway" "devops_internet_gateway" {
  vpc_id = aws_vpc.devops_vpc.id

  tags = {
    Name = "[NomeGateway]" 
  }
}

# A permissive security group
resource "aws_security_group" "devops_security_group" {
  vpc_id = aws_vpc.devops_vpc.id

  # Full inbound access
  ingress {
    from_port   = [from_port_ingress] 
    to_port     = [to_port_ingress] 
    protocol    = "[protocol_ingress]" 
    cidr_blocks = ["[cidr_blocks_ingress]"] 
  }

  # internet access
  egress {
    from_port   = [from_port_egress] 
    to_port     = [to_port_egress] 
    protocol    = "[protocol_egress]" 
    cidr_blocks = ["[cidr_blocks_egress]"] 
  }

  tags = {
    Name = "[NomeGrupoSeguranca]" 
  }
}
