
resource "aws_subnet" "devops-pub-1a" {
  vpc_id            = aws_vpc.devops_vpc.id
  cidr_block        = "[cidr_block_aws_subnet_public]"
  availability_zone = "${var.region}[availability_zone_public]"

  tags = {
    Name = "[NomeSubnetPublica]"
  }
}

resource "aws_subnet" "devops-prv-1a" {
  vpc_id            = aws_vpc.devops_vpc.id
  cidr_block        = [cidr_block_aws_subnet_private] 
  availability_zone = "${var.region}[availability_zone_private]" 

  tags = {
    Name = "[NomeSubnetPrivada]" 
  }
}



