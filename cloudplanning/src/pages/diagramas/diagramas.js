import '../../assets/css/diagramas.css'
import { Component } from 'react';
import { Link } from 'react-router-dom'
import React, { useState, useRef } from 'react'
import '../../Drop/Dragging.js'
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Stage, Layer, Circle, Text } from "react-konva";


import apple from '../../assets/img/apple.png'
import micro from '../../assets/img/microsoft.webp'
import linux from '../../assets/img/linux.png'
import logo1 from '../../assets/img/CloudPlanning-_1_-1 1.png'
import excluir from '../../assets/img/excluir.png'
import bola from '../../assets/img/bolaA.png'
import hex from '../../assets/img/HexágonoA.png'
import losango from '../../assets/img/losangoA.png'
import pentagono from '../../assets/img/pentagonoA.png'
import cubo from '../../assets/img/quadradoA.png'
import trapezio from '../../assets/img/trapezioA.png'
import seta1 from '../../assets/img/seta.png'
import seta2 from '../../assets/img/double-arrow.png'
import line from '../../assets/img/line.png'
import Modal from '../../components/Modal';
import ModalVpc from '../../components/ModalVpc';
import ModalPerfil from '../../components/ModalPerfil';
import ModalWindows from '../../components/ModalWindows';
import ModalFormas from '../../components/ModalFormas';

export default class Diagramas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tipoinstancia: '',
            keyname: '',
            idiso: '',
            ipsubnet1: '',
            ipsubnet2: '',
            ipVpc: '',
            nomevpc: '',
            nomesubnet1: '',
            nomesubnet2: '',
            erroMensagem: '',
            isModalVisible: false,
            isModalVisibleP: false,
            isModalVisibleV: false,
            isModalVisibleW: false,
            isModalVisibleF: false,
            listarTodos: [],
            id: 1
        };
    };




    ListarTodos = (event, imagem) => {

        event.preventDefault();

        let idNovo = this.state.id

        this.state.listarTodos.push({ "imagem": imagem, "id": idNovo })

        this.setState({ id: idNovo + 1 })

        console.log(this.state.listarTodos)

    }


    cadastrarEC2 = (event) => {
        event.preventDefault();

        this.setState({ erroMensagem: "", isLoading: true })

        axios.post('http://localhost:5000/api/ec2', {
            tipoinstancia: this.state.tipoinstancia,
            keyname: this.state.keyname,
            idiso: this.state.idiso,
        })

            .then(resposta => {
                if (resposta.status === 201) {
                    localStorage.setItem('diagrama-cadastro', resposta.data.token);
                    this.setState({ isLoading: false });
                }
            })
            .catch(() => {
                this.setState({ erroMensagem: "Dados inseridos são inválidos!", isLoading: false });
            })
    }

    cadastrarVPC = (event) => {
        event.preventDefault();

        this.setState({ erroMensagem: "", isLoading: true })

        axios.post('http://localhost:5000/api/vpc', {
            tipoinstancia: this.state.tipoinstancia,
            keyname: this.state.keyname,
            idiso: this.state.idiso,
            ipsubnet1: this.state.ipsubnet1,
            ipsubnet2: this.state.ipsubnet2,
            ipVpc: this.state.ipVpc,
            nomevpc: this.state.nomevpc,
            nomesubnet1: this.state.nomesubnet1,
            nomesubnet2: this.state.nomesubnet2
        })

            .then(resposta => {
                if (resposta.status === 201) {
                    localStorage.setItem('diagrama-cadastro', resposta.data.token);
                    this.setState({ isLoading: false });
                }
            })
            .catch(() => {
                this.setState({ erroMensagem: "Dados inseridos são inválidos!", isLoading: false });
            })
    }


    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name]: campo.target.value })
        console.log([campo.target.name] + ' : ' + campo.target.value)

    }

    limparCampos = () => {
        this.setState({
            tipoinstancia: '',
            keyname: '',
            idiso: '',
            ipsubnet1: '',
            ipsubnet2: '',
            ipVpc: '',
            nomevpc: '',
            nomesubnet1: '',
            nomesubnet2: '',
        })
    };


    render() {


        document.title = 'Diagramas | CloudPlanning'
        return (
            <div className='diagrama_tela_fundo'>
                <body className='body_diagrama'>
                    <header className="header_diagrama">
                        <div className="containerr container_headerr">
                            <div className="redirencionarr_diagrma">
                                <img className="logo_azul" src={logo1} alt="logo_CloudPlanning" />
                                <p className="logo_diagramass">CloudPlanning</p>
                            </div>
                            <div>
                            </div>
                        </div>

                    </header>
                    <main>
                        <div className="all_itens">
                            <section className="quadro">
                                <div className="but">
                                    <button className="but_desing">Design</button>
                                    {/* <button className="but_budge">Budge</button> */}
                                    <Link to="/budge" className="but_budge">Budge</Link>
                                </div>
                                <div>
                                    <div className="comp_pesquisar">
                                        <span>Componentes</span>
                                    </div>
                                    <div className="butão">
                                        <div>
                                            <button className="componente_principal">Comúm</button>
                                            <div className="componentess">
                                                <div>
                                                    <button className="componentes_bt" onClick={(e) => (this.setState({ isModalVisibleF: true }))}><span>Formas</span></button>
                                                    <p className="int_get">Faça o uso de diversas formas geométricas para destacar determinadas áreas de seu diagrama</p>
                                                </div>
                                                <div>
                                                    {this.state.isModalVisibleF ? (
                                                        <ModalFormas onClose={() => this.setState({ isModalVisibleF: false })}>
                                                            <div className='oTodoo'>
                                                                <div>
                                                                    <a>
                                                                        <button className="img_system" type="button" onClick={(e) => (this.setState({ isModalVisibleF: false }), this.ListarTodos(e, "drag-13"))}><img className='forrmas' src={bola} /></button>
                                                                        <p className='p_re'>Círculo</p>
                                                                    </a>
                                                                    <a>
                                                                        <button className="img_system" type="button" onClick={(e) => (this.setState({ isModalVisibleF: false }), this.ListarTodos(e, "drag-12"))}><img className='forrmas' src={cubo} /></button>
                                                                        <p className='p_red'>Quadrado</p>
                                                                    </a>
                                                                    <a>
                                                                        <button className="img_system" type="button" onClick={(e) => (this.setState({ isModalVisibleF: false }), this.ListarTodos(e, "drag-14"))}><img className='forrmas' src={hex} /></button>
                                                                        <p className='p_red'>Hexágono</p>
                                                                    </a>
                                                                </div>
                                                                <div>
                                                                    <a>
                                                                        <button className="img_system" type="button" onClick={(e) => (this.setState({ isModalVisibleF: false }), this.ListarTodos(e, "drag-15"))}><img className='forrmas' src={losango} /></button>
                                                                        <p className='p_re'>Losango</p>
                                                                    </a>
                                                                    <a>
                                                                        <button className="img_system" type="button" onClick={(e) => (this.setState({ isModalVisibleF: false }), this.ListarTodos(e, "drag-17"))}><img className='forrmas' src={trapezio} /></button>
                                                                        <p className='p_re'>Trapézio</p>
                                                                    </a>
                                                                    <a>
                                                                        <button className="img_system" type="button" onClick={(e) => ((this.setState({ isModalVisibleF: false }), this.setState({ isModalVisibleW: false })), this.ListarTodos(e, "drag-16"))}><img className='forrmas' src={pentagono} /></button>
                                                                        <p className='p_red'>Pentagono</p>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </ModalFormas>
                                                    ) : null}
                                                </div>


                                                <div className=''>
                                                    <button className="componentes_bt" onClick={(e) => (this.setState({ isModalVisibleP: true }))}><span>Setas</span></button>
                                                    <p className="int_get">Utilize setas para evidenciar os componentes de seu diagrama</p>
                                                </div>
                                                <div>
                                                    {this.state.isModalVisibleP ? (
                                                        <ModalPerfil onClose={() => this.setState({ isModalVisibleP: false })}>
                                                            <div className=''>
                                                                <div className='setas1'>
                                                                    <div>
                                                                        <a>
                                                                            <button className="img_system" type="button" onClick={(e) => (this.setState({ isModalVisibleP: false }), this.ListarTodos(e, "drag-26"))}><img className='fomas' src={line} /></button>
                                                                        </a>
                                                                        <a>
                                                                            <button className="img_system" type="button" onClick={(e) => (this.setState({ isModalVisibleP: false }), this.ListarTodos(e, "drag-27"))}><img className='fomas1' src={line} /></button>
                                                                        </a>
                                                                        <a>
                                                                            <button className="img_system" type="button" onClick={(e) => (this.setState({ isModalVisibleP: false }), this.ListarTodos(e, "drag-28"))}><img className='fomas2' src={line} /></button>
                                                                        </a>
                                                                        <a>
                                                                            <button className="img_system" type="button" onClick={(e) => (this.setState({ isModalVisibleP: false }), this.ListarTodos(e, "drag-29"))}><img className='fomas3' src={line} /></button>
                                                                        </a>
                                                                        <a>
                                                                            <button className="img_system" type="button" onClick={(e) => (this.setState({ isModalVisibleP: false }), this.ListarTodos(e, "drag-30"))}><img className='fomas4' src={line} /></button>
                                                                        </a>
                                                                        <a>
                                                                            <button className="img_system" type="button" onClick={(e) => (this.setState({ isModalVisibleP: false }), this.ListarTodos(e, "drag-31"))}><img className='fomas5' src={line} /></button>
                                                                        </a>
                                                                        <a>
                                                                            <button className="img_system" type="button" onClick={(e) => (this.setState({ isModalVisibleP: false }), this.ListarTodos(e, "drag-32"))}><img className='fomas6' src={line} /></button>
                                                                        </a>
                                                                        <a>
                                                                            <button className="img_system" type="button" onClick={(e) => (this.setState({ isModalVisibleP: false }), this.ListarTodos(e, "drag-33"))}><img className='fomas7' src={line} /></button>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className='setas1'>
                                                                    <div className='seta_Redirencionar'>
                                                                        <a>
                                                                            <button className="img_system" type="button" onClick={(e) => (this.setState({ isModalVisibleP: false }), this.ListarTodos(e, "drag-18"))}><img className='fomas' src={seta1} /></button>
                                                                        </a>
                                                                        <a>
                                                                            <button className="img_system" type="button" onClick={(e) => (this.setState({ isModalVisibleP: false }), this.ListarTodos(e, "drag-19"))}><img className='fomas1' src={seta1} /></button>
                                                                        </a>
                                                                        <a>
                                                                            <button className="img_system" type="button" onClick={(e) => (this.setState({ isModalVisibleP: false }), this.ListarTodos(e, "drag-20"))}><img className='fomas2' src={seta1} /></button>
                                                                        </a>
                                                                        <a>
                                                                            <button className="img_system" type="button" onClick={(e) => (this.setState({ isModalVisibleP: false }), this.ListarTodos(e, "drag-21"))}><img className='fomas3' src={seta1} /></button>
                                                                        </a>
                                                                        <a>
                                                                            <button className="img_system" type="button" onClick={(e) => (this.setState({ isModalVisibleP: false }), this.ListarTodos(e, "drag-22"))}><img className='fomas4' src={seta1} /></button>
                                                                        </a>
                                                                        <a>
                                                                            <button className="img_system" type="button" onClick={(e) => (this.setState({ isModalVisibleP: false }), this.ListarTodos(e, "drag-23"))}><img className='fomas5' src={seta1} /></button>
                                                                        </a>
                                                                        <a>
                                                                            <button className="img_system" type="button" onClick={(e) => (this.setState({ isModalVisibleP: false }), this.ListarTodos(e, "drag-24"))}><img className='fomas6' src={seta1} /></button>
                                                                        </a>
                                                                        <a>
                                                                            <button className="img_system" type="button" onClick={(e) => (this.setState({ isModalVisibleP: false }), this.ListarTodos(e, "drag-25"))}><img className='fomas7' src={seta1} /></button>
                                                                        </a>
                                                                    </div>
                                                                </div>



                                                            </div>
                                                        </ModalPerfil>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <button className="componente_principal">VPC</button>
                                            <div className="componentess">
                                                <div className=''>
                                                    <button className="componentes_bt" onClick={(e) => this.ListarTodos(e, "drag-4")}><span>Internet Gateway</span></button>
                                                    <p className="int_get">Gateway funciona como uma espécie de portal, ou seja, age como uma espécie de “fio condutor” da conexão do dispositivo com a internet</p>
                                                </div>
                                                <div className=''>
                                                    <button className="componentes_bt" onClick={(e) => this.ListarTodos(e, "drag-2")}><span>Network ACL</span></button>
                                                    <p className="int_get">É uma camada de segurança opcional para sua VPC que funciona como firewall para controlar o tráfego de entrada e saída de uma ou mais sub-redes</p>
                                                </div>
                                                <div className=''>
                                                    <button className="componentes_bt" onClick={(e) => this.ListarTodos(e, "drag-5")}><span>NAT Gateway</span></button>
                                                    <p className="int_get">Você pode usar um gateway NAT para que as instâncias em uma sub-rede privada possam se conectar a serviços fora da VPC</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="componente_principal">Computação</button>
                                            <div className="componentess">

                                                <div>
                                                    <button className="componentes_bt" onClick={(e) => (this.setState({ isModalVisible: true }), this.ListarTodos(e, "drag-8"))}><span>EC2</span></button>
                                                    <p className='int_get'>O EC2 permite que você adquira esse conjunto de recursos (memória, disco, CPU e rede) atráves do pagamento por uso</p>
                                                </div>
                                                {this.state.isModalVisible ? (
                                                    <Modal onClose={() => this.setState({ isModalVisible: false })}>
                                                        <form onSubmit={this.cadastrarEC2}>
                                                            <div className='inputs_vpc'>
                                                                <span>Tipo da Instância</span>
                                                                <input className='inpp'
                                                                    type="text"
                                                                    name='tipoinstancia'
                                                                    onChange={this.atualizaStateCampo}
                                                                    value={this.state.tipoinstancia}
                                                                    required></input>
                                                                <span>Keyname</span>
                                                                <input className='inpp'
                                                                    type="text"
                                                                    name='keyname'
                                                                    onChange={this.atualizaStateCampo}
                                                                    value={this.state.keyname}
                                                                    required></input>
                                                                <span>Id iso</span>
                                                                <input className='inpp'
                                                                    type="text"
                                                                    name='idiso'
                                                                    onChange={this.atualizaStateCampo}
                                                                    value={this.state.idiso}></input>
                                                            </div>

                                                            <button className='but_ec2' type="submit">Enviar</button>


                                                        </form>
                                                    </Modal>
                                                ) : null}



                                                <button className="componentes_bt" onClick={(e) => (this.setState({ isModalVisibleW: true }), this.ListarTodos(e, "drag-1"))}><span>Sistema Operacional</span></button>
                                                <p className='int_get'>Sistema operativo ou operacional é um programa ou um conjunto de programas cuja função é gerenciar os recursos do sistema</p>
                                                {this.state.isModalVisibleW ? (
                                                    <ModalWindows onClose={() => this.setState({ isModalVisibleW: false })}>
                                                        <div className='oTodo'>
                                                            <a>
                                                                <button className="img_system" type="button" onClick={(e) => (this.setState({ isModalVisibleW: false }), this.ListarTodos(e, "drag-9"))}><img className='micro' src={micro} /></button>
                                                            </a><a>
                                                                <button className="img_system" type="button" onClick={(e) => (this.setState({ isModalVisibleW: false }), this.ListarTodos(e, "drag-10"))}><img className='linux' src={linux} /></button>
                                                            </a><a>
                                                                <button className="img_system" type="button" onClick={(e) => (this.setState({ isModalVisibleW: false }), this.ListarTodos(e, "drag-11"))}><img className='apple' src={apple} /></button>
                                                            </a>
                                                        </div>
                                                    </ModalWindows>
                                                ) : null}


                                                <button className="componentes_bt" onClick={(e) => this.ListarTodos(e, "drag-3")}><span>Zona de disponibilidade</span></button>
                                                <p className='int_get'>As zonas de disponibilidade são vários locais isolados dentro de cada região</p>

                                                <button className="componentes_bt" onClick={(e) => (this.setState({ isModalVisibleV: true }), this.ListarTodos(e, "drag-6"))} ><span>VPC</span></button>
                                                <p className='int_get'>VPC é uma demanda configurável de recursos compartilhados de computação alocados dentro de um ambiente de nuvem pública</p>
                                                {this.state.isModalVisibleV ? (
                                                    <ModalVpc onClose={() => this.setState({ isModalVisibleV: false })}>
                                                        <form onSubmit={this.cadastrarVPC}>
                                                            <div className='inputs_vpc'>
                                                                <div className='keyname'>
                                                                    <span>Keyname</span>
                                                                </div>
                                                                <input className='inp_'
                                                                    type="text"
                                                                    name='keyname'
                                                                    onChange={this.atualizaStateCampo}
                                                                    value={this.state.keyname}
                                                                    required></input>
                                                                <span cla>Tipo da Instância</span>
                                                                <input className='inp'
                                                                    type="text"
                                                                    name='tipoinstancia'
                                                                    onChange={this.atualizaStateCampo}
                                                                    value={this.state.tipoinstancia}
                                                                    required></input>
                                                                <span>Id iso</span>
                                                                <input className='inp'
                                                                    type="text"
                                                                    name='idiso'
                                                                    onChange={this.atualizaStateCampo}
                                                                    value={this.state.idiso}
                                                                    required></input>
                                                                <span>Nome VPC</span>
                                                                <input className='inp'
                                                                    type="text"
                                                                    name='nomevpc'
                                                                    onChange={this.atualizaStateCampo}
                                                                    value={this.state.nomevpc}
                                                                    required></input>
                                                                <span>Nome Subnet Pública</span>
                                                                <input className='inp'
                                                                    type="text"
                                                                    name='nomesubnet1'
                                                                    onChange={this.atualizaStateCampo}
                                                                    value={this.state.nomesubnet1}
                                                                    required></input>
                                                                <div className='inp2'>
                                                                    <span>Nome Subnet Privada</span>
                                                                    <input className='inp'
                                                                        type="text"
                                                                        name='nomesubnet2'
                                                                        onChange={this.atualizaStateCampo}
                                                                        value={this.state.nomesubnet2}
                                                                        required></input>
                                                                    <span>Ip Subnet Pública</span>
                                                                    <input className='inp'
                                                                        type="text"
                                                                        name='ipsubnet1'
                                                                        onChange={this.atualizaStateCampo}
                                                                        value={this.state.ipsubnet1}
                                                                        required></input>
                                                                    <span>Ip Subnet Privada</span>
                                                                    <input className='inp'
                                                                        type="text"
                                                                        name='ipsubnet2'
                                                                        onChange={this.atualizaStateCampo}
                                                                        value={this.state.ipsubnet2}
                                                                        required></input>
                                                                    <span>Ip Vpc</span>
                                                                    <input className='inp'
                                                                        type="text"
                                                                        name='ipVpc'
                                                                        onChange={this.atualizaStateCampo}
                                                                        value={this.state.ipVpc}
                                                                        required></input>
                                                                </div>
                                                            </div>
                                                            <button className='but_vpc' type='submit' onClick={(e) => (this.setState({ isModalVisibleW: false }))}>Enviar</button>
                                                        </form>
                                                    </ModalVpc>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>


                            <section className="intens_todo">
                                <div className='tittlee'>
                                    <div className="simbols">
                                        <div>
                                            <a>
                                                <button className="more" type="button" onClick={() => this.setState({ listarTodos: [] })}><img src={excluir} /></button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {this.state.listarTodos.map((c) => (<div key={c.id} id={c.imagem} className="draggable"></div>))}

                            </section>

                        </div>
                    </main>
                </body>
            </div>
        )
    }
};