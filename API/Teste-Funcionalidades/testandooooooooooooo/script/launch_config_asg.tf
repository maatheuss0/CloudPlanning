resource "aws_launch_configuration" "web_launch_conf" {
  name_prefix          = "devops-"
  image_id             = var.ubuntu_18_sg
  iam_instance_profile = aws_iam_instance_profile.ec2_cd_instance_profile.name
  # image_id                    = data.aws_ami.ubuntu.id
  instance_type               = "t2.micro"
  key_name                    = var.key_name
  security_groups             = [aws_security_group.asg_web_sg.id]
  associate_public_ip_address = true

  user_data = file("codedeploy_agent_install.sh")

  lifecycle {
    create_before_destroy = true
  }
}


resource "aws_security_group" "asg_web_sg" {
  name        = "asg_web_sg"
  description = "Allow HTTP inbound connections"
  vpc_id      = aws_vpc.devops_vpc.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "devops_SG_Web_Security_Group"
  }
}
