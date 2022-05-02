import '../../assets/css/diagramas.css'
import { Component } from 'react';
import { Link } from 'react-router-dom'
import React from 'react'
import '../../Drop/Dragging.js'


import logo1 from '../../assets/img/CloudPlanning-_1_-1 1.png'
import diagrama_fundo from '../../assets/img/tela_diagrama.png'
import ec2 from '../../assets/img/ec2.png'




function App() {
    return (
        <div>
            <header className="header_diagrama">
                <div className="containerr container_headerr">
                    <div className="redirencionarr">
                        <img className="logo_azul" src={logo1} alt="logo_CloudPlanning" />
                        <p className="logo_diagramass">CloudPlanning</p>
                    </div>
                    {/* <nav role="navigation">
                        <div id="menuToggle">
                            <input type="checkbox" />
                            <span></span>
                            <span></span>
                            <span></span>
                            <ul id="menu">
                                <a href="http://localhost:3000/alterar_perfil#"><li>Perfil</li></a>
                                <a href="http://localhost:3000/Budge#"><li>Budge</li></a>
                            </ul>
                        </div>
                    </nav> */}
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
                                        <button className="componentes_bt"><span>Subnet</span></button>
                                        <button className="componentes_bt"><span>Rotas</span></button>
                                        <button className="componentes_bt"><span>Internet Gateway</span></button>
                                        <button className="componentes_bt"><span>Network ACL</span></button>
                                        <button className="componentes_bt"><span>NAT Gateway</span></button>
                                    </div>
                                </div>
                                <div>
                                    <button className="componente_principal">Computação</button>
                                    <div className="componentess">
                                        <button className="componentes_bt"><span>Sistema Operacional</span></button>
                                        <button className="componentes_bt"><span>Armazenamento</span></button>
                                        <button className="componentes_bt"><span>Memória RAM</span></button>
                                        <button className="componentes_bt"><span>Zona de disponibilidade</span></button>
                                        <button className="componentes_bt"><span>VPC</span></button>
                                        <button className="componentes_bt"><span>Subrede</span></button>
                                        <button className="componentes_bt"><span>Auto Assign para IP</span></button>
                                        <button className="componentes_bt"><span>Security Group</span></button>
                                        <button className="componentes_bt"><span>Chave de AcessoP</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>


                        <div className='tittle_diagrama'>
                            <form>
                                <input className='titulo' placeholder='Meu primerio diagrama'></input>
                            </form>
                            <hr></hr>
                        </div>

                        <div className="perfil_redirencionar">
                            <form>
                                <a href="http://localhost:3000/alterar_usuario">
                                    <img className="botao_perfil" src={logo1}></img>
                                </a>
                            </form>
                        </div>
                        {/* <div className="diagramaa">
                            <img className='diagrama_fundu' src={diagrama_fundo} alt="" />
                        </div> */}
                        <div id="drag-2" className="draggable">

                        </div>
                        <div id="drag-2" className="draggable">

                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
};

export default App;