

resource "aws_route_table" "devops_pub_route_table" {
  vpc_id = aws_vpc.devops_vpc.id


  route {
    cidr_block = "[cidr_block_route]" 
    gateway_id = aws_internet_gateway.devops_internet_gateway.id
  }
  tags = {
    Name = "[NomeRota]" 
  }
}

resource "aws_route_table_association" "devops_table_associatio_2a" {
  subnet_id      = aws_subnet.devops-pub-1a.id
  route_table_id = aws_route_table.devops_pub_route_table.id
}

resource "aws_route_table_association" "devops_table_association_2b" {
  subnet_id      = aws_subnet.devops-prv-1a.id
  route_table_id = aws_route_table.devops_pub_route_table.id
}


