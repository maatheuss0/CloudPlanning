import boto3

myclient = boto3.client('ec2')

myami = 'ami-033594f8862b03bb2'

myvpc = '10.0.0.0/16'

myvpcid = myclient.create_vpc(
    CidrBlock=myvpc,
)['Vpc']['VpcId']

myclient.create_tags(Resources=[myvpcid], Tags=[{'Key': 'Name', 'Value': 'Testeeeeeeeeeee'}])


subnet1 = myclient.create_subnet(
    CidrBlock='10.0.1.0/24',
    VpcId=myvpcid
)['Subnet']['SubnetId']
myclient.create_tags(Resources=[subnet1], Tags=[{'Key': 'Name', 'Value': 'Subnet 1 testeee'}])

mysub = myclient.create_subnet(
    CidrBlock='10.0.2.0/24',
    VpcId=myvpcid
)['Subnet']['SubnetId']

myclient.create_tags(Resources=[mysub], Tags=[{'Key': 'Name', 'Value': 'Subnet 2 testee'}])

myclient.run_instances(
    ImageId="ami-033594f8862b03bb2",
    MinCount=1,
    MaxCount=1,
    InstanceType="t2.micro",
    KeyName="Ec2-Key",
)
