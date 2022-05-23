import boto3
from flask import Flask, request, Response
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/api/ec2', methods=['POST'])
@cross_origin()
def create_ec2_instance():
    try:
        keyname = request.json['keyname']
        tipoinstancia = request.json['tipoinstancia']
        idiso = request.json['id-iso']

        resource_ec2 = boto3.client("ec2")
        resource_ec2.run_instances(
            ImageId=idiso,
            MinCount=1,
            MaxCount=1,
            InstanceType=tipoinstancia,
            KeyName=keyname,
        )
        return Response("{'msg':'Criado com sucesso'}", status=201, mimetype='application/json')
    except Exception as e:
        print(e)


@app.route('/api/vpc', methods=['POST'])
@cross_origin()
def create_vpc():
    try:
        myami = request.json['idiso']
        myvpc = request.json['ipVpc']
        ipsubnet1 = request.json['ipsubnet1']
        ipsubnet2 = request.json['ipsubnet2']
        tipoinstancia = request.json['tipoinstancia']
        keyname = request.json['keyname']
        nomevpc = request.json['nomevpc']
        nomesubnet1 = request.json['nomesubnet1']
        nomesubnet2 = request.json['nomesubnet2']

        myclient = boto3.client('ec2')

        myvpcid = myclient.create_vpc(
            CidrBlock=myvpc
        )['Vpc']['VpcId']
        myclient.create_tags(Resources=[myvpcid], Tags=[{'Key': 'Name', 'Value': nomevpc}])

        subnet1 = myclient.create_subnet(
            CidrBlock=ipsubnet1,
            VpcId=myvpcid
        )['Subnet']['SubnetId']
        myclient.create_tags(Resources=[subnet1], Tags=[{'Key': 'Name', 'Value': nomesubnet1}])

        mysub = myclient.create_subnet(
            CidrBlock=ipsubnet2,
            VpcId=myvpcid
        )['Subnet']['SubnetId']
        myclient.create_tags(Resources=[mysub], Tags=[{'Key': 'Name', 'Value': nomesubnet2}])

        myclient.run_instances(
            ImageId=myami,
            MinCount=1,
            MaxCount=1,
            InstanceType=tipoinstancia,
            KeyName=keyname,
        )
        return Response("{'msg':'Criado com sucesso'}", status=201, mimetype='application/json')
    except Exception as e:
        print(e)


app.run()