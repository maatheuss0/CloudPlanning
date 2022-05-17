import boto3;

def create_ec2_instance():
    try:
        print("Criando uma EC2 TENHA MUITA FÉ")
        resource_ec2 = boto3.client("ec2")
        resource_ec2.run_instances(
            ImageId="",
            MinCount=1,
            MaxCount=1,
            InstanceType="t2.micro",
            KeyName="ec2-key",
        )
    except Exception as e:
        print(e);

create_ec2_instance()