import boto3

myclient = boto3.client('ec2')

myami = 'ami-033594f8862b03bb2'

myvpc = '10.0.0.0/16'

myvpcid = myclient.create_vpc(
    CidrBlock=myvpc
)['Vpc']['VpcId']

myclient.create_subnet(
    CidrBlock='10.0.1.0/24',
    VpcId=myvpcid
)

mysub = myclient.create_subnet(
    CidrBlock='10.0.2.0/24',
    VpcId=myvpcid
)['Subnet']['SubnetId']

myclient.run_instances(
    ImageId="ami-033594f8862b03bb2",
    MinCount=1,
    MaxCount=1,
    InstanceType="t2.micro",
    KeyName="Ec2-Key",
)
