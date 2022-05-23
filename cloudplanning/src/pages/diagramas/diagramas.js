import '../../assets/css/diagramas.css'
import { Component } from 'react';
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import '../../Drop/Dragging.js'
import axios from 'axios';
import { useHistory } from "react-router-dom";



import woman from '../../assets/img/woman.png'
import logo1 from '../../assets/img/CloudPlanning-_1_-1 1.png'
import diagrama_fundo from '../../assets/img/tela_diagrama.png'
import ec2 from '../../assets/img/ec2.png'
import disponibilidade from '../../assets/img/disponibilidade.png'
import internet from '../../assets/img/internet-gateway.png'
import nat from '../../assets/img/nat-gateway.png'
import vpc from '../../assets/img/vpc.png'
import acl from '../../assets/img/ACL.png'
import mais from '../../assets/img/more.png'
import excluir from '../../assets/img/excluir.png'
import livro from '../../assets/img/book.png'
import Modal from '../../components/Modal';
import ModalVpc from '../../components/ModalVpc';


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
        };
    };

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
                    this.props.history.push('/');
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
                    this.props.history.push('/');
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

    // const[isModalVisibleV, setIsModalVisibleV] = (false);
    // const[isModalVisible, setIsModalVisible] = (false);

    render() {

        document.title = 'Diagramas | CloudPlanning'
        return (
            <div>
                <header className="header_diagrama">
                    <div className="containerr container_headerr">
                        <div>
                            <a>
                                <img className="livro" src={livro} alt="logo_CloudPlanning" />
                            </a>
                        </div>
                        <div className="redirencionarr_diagrma">
                            <img className="logo_azul" src={logo1} alt="logo_CloudPlanning" />
                            <p className="logo_diagramass">CloudPlanning</p>
                        </div>
                        <div className="perfil_redirencionar">
                            <Link to="/alterar_usuario" className="butao_perfil">Perfil</Link>
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
                                        <button className="componente_principal">VPC</button>
                                        <div className="componentess">
                                            {/* <button className="componentes_bt"><span>Subnet</span></button> */}
                                            {/* <button className="componentes_bt"><span>Rotas</span></button> */}
                                            <div className=''>
                                                <button className="componentes_bt"><span>Internet Gateway</span></button>
                                                <p className="int_get">Gateway funciona como uma espécie de portal, ou seja, age como uma espécie de “fio condutor” da conexão do dispositivo com a internet.</p>
                                            </div>
                                            <div className=''>
                                                <button className="componentes_bt"><span>Network ACL</span></button>
                                                <p className="int_get">É uma camada de segurança opcional para sua VPC que funciona como firewall para controlar o tráfego de entrada e saída de uma ou mais sub-redes.</p>
                                            </div>
                                            <div className=''>
                                                <button className="componentes_bt"><span>NAT Gateway</span></button>
                                                <p className="int_get">Você pode usar um gateway NAT para que as instâncias em uma sub-rede privada possam se conectar a serviços fora da VPC</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="componente_principal">Computação</button>
                                        <div className="componentess">

                                            <div>
                                                <button className="componentes_bt" /*onClick={() => setIsModalVisible(true)}*/><span>EC2</span></button>
                                                <p className='int_get'>O EC2 permite que você adquira esse conjunto de recursos (memória, disco, CPU e rede) atráves do pagamento por uso</p>
                                            </div>
                                            {/* {isModalVisible ? (
                                            <Modal onClose={() => setIsModalVisible(false)}> */}
                                            {/* <form onSubmit={this.cadastrarEC2}>
                                                    <div className='inputs_vpc'>
                                                        <span>Tipo da Instância</span>
                                                        <input className='inpp'
                                                            type="text"
                                                            placeholder=""
                                                            name=''
                                                            onChange={this.TipoInstancia}
                                                            value={this.state.TipoInstancia}
                                                            required></input>
                                                        <span>Keyname</span>
                                                        <input className='inpp'
                                                            type="text"
                                                            placeholder=""
                                                            name='keyname'
                                                            onChange={this.Keyname}
                                                            value={this.state.Keyname}></input>
                                                        <span>Id iso</span>
                                                        <input className='inpp'
                                                            type="text"
                                                            placeholder=""
                                                            name='IdIso'
                                                            onChange={this.IdIso}
                                                            value={this.state.IdIso}></input>
                                                    </div>
                                                    <button className='but_vpc' type="submit">Enviar</button>
                                                </form> */}
                                            {/* </Modal>
                                        ) : null} */}

                                            <button className="componentes_bt"><span>Security Groups</span></button>
                                            <p className="int_get">Um grupo de segurança atua como firewall virtual para as instâncias do EC2 visando controlar o tráfego de entrada e de saída</p>

                                            <button className="componentes_bt"><span>Sistema Operacional</span></button>
                                            <p className='int_get'>Sistema operativo ou operacional é um programa ou um conjunto de programas cuja função é gerenciar os recursos do sistema</p>

                                            <button className="componentes_bt"><span>Zona de disponibilidade</span></button>
                                            <p className='int_get'>As zonas de disponibilidade são vários locais isolados dentro de cada região</p>

                                            <button className="componentes_bt"/* onClick={() => setIsModalVisibleV(true)}*/ ><span>VPC</span></button>
                                            <p className='int_get'>VPC é uma demanda configurável de recursos compartilhados de computação alocados dentro de um ambiente de nuvem pública</p>
                                            {/* {isModalVisibleV ? (
                                            <ModalVpc onClose={() => setIsModalVisibleV(false)}> */}
                                            {/* <form>
                                                    <div className='inputs_vpc'>
                                                        <span>Keyname</span>
                                                        <input className='inp'></input>
                                                        <span>Tipo de Instância</span>
                                                        <input className='inp'></input>
                                                        <span>Id da Iso</span>
                                                        <input className='inp'></input>
                                                        <div className='inp2'>
                                                            <span>Ip Subnet Pública</span>
                                                            <input className='inp'></input>
                                                            <span>Ip Subnet Privada</span>
                                                            <input className='inp'></input>
                                                            <span>Ip Vpc</span>
                                                            <input className='inp'></input>
                                                        </div>
                                                    </div>
                                                    <button className='but_vpc'>Enviar</button>
                                                </form> */}
                                            {/* </ModalVpc>
                                        ) : null} */}
                                            {/* <button className="componentes_bt"><span>Subrede</span></button> */}
                                            {/* <button className="componentes_bt"><span>Auto Assign para IP</span></button> */}
                                            {/* <button className="componentes_bt"><span>Security Group</span></button> */}
                                            {/* <button className="componentes_bt"><span>Chave de Acesso</span></button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="intens_todo">
                            <div className='tittle_diagrama'>
                                <form>
                                    <input className='titulo' placeholder='Meu primerio diagrama'></input>
                                </form>
                                <hr></hr>
                            </div>
                            {/* <div className="formata">
                                <Link to="" className="butao_perfil">Blibioteca</Link>
                            </div> */}
                            <div className="simbols">
                                <div>
                                    <a>
                                        <img className="more" src={mais} alt="logo_CloudPlanning" />
                                    </a>
                                </div>
                                <div>
                                    <a>
                                        <img className="" src={excluir} alt="logo_CloudPlanning" />
                                    </a>
                                </div>
                            </div>
                            {/* <div className="diagramaa">
                            <img className='diagrama_fundu' src={diagrama_fundo} alt="" />
                        </div> */}
                            {/* <div id="drag-2" className="draggable">

                        </div>

                        <div id="drag-3" className="draggable">
                        
                        </div>
                        <div id="drag-4" className="draggable">
                        
                        </div>
                        
                        <div id="drag-5" className="draggable">
                        
                        </div>
                        
                        <div id="drag-6" className="draggable">
                        
                        </div>
                        
                        <div id="drag-7" className="draggable">
                        
                        </div>
                        
                        <div id="drag-8" className="draggable">
                        
                    </div> */}
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
                                <button className='but_vpc' type="submit">Enviar</button>
                            </form>

                            <form onSubmit={this.cadastrarVPC}>
                                <div className='inputs_vpc'>
                                <span>Tipo da Instância</span>
                                    <input className='inp'
                                        type="text"
                                        name='tipoinstancia'
                                        onChange={this.atualizaStateCampo}
                                        value={this.state.tipoinstancia}
                                        required></input>
                                    <span>Keyname</span>
                                    <input className='inp'
                                        type="text"
                                        name='keyname'
                                        onChange={this.atualizaStateCampo}
                                        value={this.state.keyname}
                                        required></input>
                                    <span>Id iso</span>
                                    <input className='inp'
                                        type="text"
                                        name='idiso'
                                        onChange={this.atualizaStateCampo}
                                        value={this.state.idiso}></input>
                                    <span>Nome VPC</span>
                                    <input className='inp'
                                        type="text"
                                        name='nomevpc'
                                        onChange={this.atualizaStateCampo}
                                        value={this.state.nomevpc}></input>
                                    <span>Nome Subnet Pública</span>
                                    <input className='inp'
                                        type="text"
                                        name='nomesubnet1'
                                        onChange={this.atualizaStateCampo}
                                        value={this.state.nomesubnet1}></input>
                                    <span>Nome Subnet Privada</span>
                                    <input className='inp'
                                        type="text"
                                        name='nomesubnet2'
                                        onChange={this.atualizaStateCampo}
                                        value={this.state.nomesubnet2}></input>
                                    <div className='inp2'>
                                        <span>Ip Subnet Pública</span>
                                        <input className='inp'
                                            type="text"
                                            name='ipsubnet1'
                                            onChange={this.atualizaStateCampo}
                                            value={this.state.ipsubnet1}></input>
                                        <span>Ip Subnet Privada</span>
                                        <input className='inp'
                                            type="text"
                                            name='ipsubnet2'
                                            onChange={this.atualizaStateCampo}
                                            value={this.state.ipsubnet2}></input>
                                        <span>Ip Vpc</span>
                                        <input className='inp'
                                            type="text"
                                            name='ipVpc'
                                            onChange={this.atualizaStateCampo}
                                            value={this.state.ipVpc}></input>
                                    </div>
                                </div>
                                <button className='but_vpc' type='submit'>Enviar</button>
                            </form>
                        </section>

                    </div>
                </main>
            </div>
        )
    }
};