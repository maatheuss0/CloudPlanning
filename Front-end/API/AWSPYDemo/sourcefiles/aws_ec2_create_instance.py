import boto3


def create_ec2_instance():
    try:
        print("Criando uma EC2 TENHA MUITA FÉ")
        resource_ec2 = boto3.client("ec2")
        resource_ec2.run_instances(
            ImageId="ami-033594f8862b03bb2",
            MinCount=1,
            MaxCount=1,
            InstanceType="t2.micro",
            KeyName="Ec2-Key",
        )
    except Exception as e:
        print(e)


create_ec2_instance()
