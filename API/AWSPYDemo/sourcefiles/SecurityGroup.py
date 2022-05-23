import pandas as pd
import boto3
from flask import Flask, request, jsonify, Response
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
        idiso = request.json['idiso']


        resource_ec2 = boto3.client("ec2")
        resource_ec2.run_instances(
            ImageId=idiso,
            MinCount=1,
            MaxCount=1,
            InstanceType=tipoinstancia,
            KeyName=keyname,
        )
        return Response("{'a':'b'}", status=201, mimetype='application/json')

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


        myclient = boto3.client('ec2')

        myvpcid = myclient.create_vpc(
            CidrBlock=myvpc
        )['Vpc']['VpcId']

        myclient.create_subnet(
            CidrBlock=ipsubnet1,
            VpcId=myvpcid
        )

        mysub = myclient.create_subnet(
            CidrBlock=ipsubnet2,
            VpcId=myvpcid
        )['Subnet']['SubnetId']

        myclient.run_instances(
            ImageId=myami,
            MinCount=1,
            MaxCount=1,
            InstanceType=tipoinstancia,
            KeyName=keyname,
        )
        return 'teste'

     except Exception as e:
        print(e)

app.run()