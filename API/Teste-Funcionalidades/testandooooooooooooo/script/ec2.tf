resource "aws_launch_configuration" "web_launch_conf" {
  name_prefix          = "devops-"
  image_id             = var.ubuntu_18_sg -----------
  iam_instance_profile = aws_iam_instance_profile.ec2_cd_instance_profile.name
  # image_id                    = data.aws_ami.ubuntu.id
  instance_type               = "t2.micro" -----------
  key_name                    = var.key_name -------------
  security_groups             = [aws_security_group.asg_web_sg.id]
  associate_public_ip_address = true ----------------------
}


resource "aws_security_group" "asg_web_sg" {
  name        = "[NomeSeguranca]" 
  description = "Allow HTTP inbound connections"
  vpc_id      = aws_vpc.devops_vpc.id

  ingress {
    from_port   = [from_port_http]
    to_port     = [to_port_http]
    protocol    = "[protocol_http]"
    cidr_blocks = ["[cidr_blocks_http]"]
  }

  ingress {
    from_port   = [from_port_ssh]
    to_port     = [to_port_ssh]
    protocol    = "[protocol_ssh]"
    cidr_blocks = ["[cidr_blocks_ssh]"]
  }

  egress {
    from_port   = [from_port_egress_security_group]
    to_port     = [to_port_egress_security_group]
    protocol    = "[protocol_egress_security_group]"
    cidr_blocks = ["cidr_blocks_egress_security_group"]
  }

  tags = {
    Name = "[NomeSeguranca]"
  }
}