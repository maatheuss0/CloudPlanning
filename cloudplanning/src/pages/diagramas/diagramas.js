import '../../assets/css/diagramas.css'
import { Component } from 'react';
import { Link } from 'react-router-dom'
import React from 'react'
import '../../Drop/Dragging.js'


import woman from '../../assets/img/woman.png'
import logo1 from '../../assets/img/CloudPlanning-_1_-1 1.png'
import diagrama_fundo from '../../assets/img/tela_diagrama.png'
import ec2 from '../../assets/img/ec2.png'
import disponibilidade from '../../assets/img/disponibilidade.png'
import internet from '../../assets/img/internet-gateway.png'
import nat from '../../assets/img/nat-gateway.png'
import vpc from '../../assets/img/vpc.png'
import acl from '../../assets/img/ACL.png'


export default class Diagramas extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            nomeUsuario: '',
            arquivo: '',
        };
    };



    render() {
        document.title = 'Diagramas | CloudPlanning'
        return (
            <div>
                <header className="header_diagrama">
                    <div className="containerr container_headerr">
                        <div className="redirencionarr_diagrma">
                            <img className="logo_azul" src={logo1} alt="logo_CloudPlanning" />
                            <p className="logo_diagramass">CloudPlanning</p>
                        </div>
                        <div className="perfil_redirencionar">
                                {/* <p>Username</p> */}
                                <span className="">{}</span>
                                <a href="http://localhost:3000/alterar_usuario">
                                    <img className="botao_perfil" src={woman}></img>
                                </a>
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
                                            <button className="componentes_bt"><span>Internet Gateway</span></button>
                                            <button className="componentes_bt"><span>Network ACL</span></button>
                                            <button className="componentes_bt"><span>NAT Gateway</span></button>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="componente_principal">Computação</button>
                                        <div className="componentess">
                                            <button className="componentes_bt"><span>EC2</span></button>
                                            <button className="componentes_bt"><span>Sistema Operacional</span></button>
                                            {/* <button className="componentes_bt"><span>Armazenamento</span></button> */}
                                            {/* <button className="componentes_bt"><span>Memória RAM</span></button> */}
                                            <button className="componentes_bt"><span>Zona de disponibilidade</span></button>
                                            <button className="componentes_bt"><span>VPC</span></button>
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
                            {/* <div className="diagramaa">
                            <img className='diagrama_fundu' src={diagrama_fundo} alt="" />
                        </div> */}
                            <div id="drag-2" className="draggable">

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

                            </div>
                        </section>

                    </div>
                </main>
            </div>
        )
    }
};
