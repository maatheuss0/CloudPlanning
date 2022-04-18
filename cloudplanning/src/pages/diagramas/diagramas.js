import '../../assets/css/diagramas.css'
import { Component } from 'react';
import { Link } from 'react-router-dom'
import React from 'react'


import logo1 from '../../assets/img/CloudPlanning-_1_-1 1.png'
import diagrama_fundo from '../../assets/img/tela_diagrama.png'


export default class Diagramas extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };

    



    render() {
        return (
            <div>
                <header className="header_diagrama">
                    <div className="containerr container_headerr">
                        <div className="redirencionarr">
                            <img src={logo1} alt="logo_CloudPlanning" />
                            <p className="logo_diagramass">CloudPlanning</p>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="all_itens">
                        <section className="quadro">
                            <div className="but">
                                <button className="but_desing">Desing</button>
                                <button className="but_budge">Budge</button>
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
                            <div className="diagramaa">
                                <img src={diagrama_fundo} alt="" />
                            </div>
                            <div class="resize-drag">
                                Resize from any edge or corner
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        )
    }
};