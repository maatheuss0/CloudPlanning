import '../../assets/css/alterar_usuario.css'
import { Component } from 'react';
import { Link } from 'react-router-dom'
import React from 'react'
import axios from 'axios';



import logo1 from '../../assets/img/CloudPlanning-_1_-1 1.png'
import woman from '../../assets/img/woman.png'
import diagrama_fundo from '../../assets/img/tela_diagrama.png'



export default class Listar_Usuarios extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listaUsuarios: []
        }
    }

    listarUsuarios = () => {
        axios('http://localhost:5000/api/Usuarios').then(resposta => {
            if (resposta.status === 200) {
                this.setState({
                    lista: resposta.data
                })
            }
        }).catch(erro => console.log(erro))
    };

    componentDidMount() {
        this.listarUsuarios()
    }


    render() {
        document.title = 'Perfil | CloudPlanning'
        return (
            <div>
                <header>
                    <div className="header_diagramaa">
                        <div className="containerr container_headerr">
                            <div class="redirencionarr">
                                <img className="logo_azul" src={logo1} alt="logo" />
                                <p className="logo_diagramass">CloudPlanning</p>
                                <span>{}</span>
                            </div>
                        </div>
                    </div>
                </header>

                <main>
                    <div className="geral_perfil">
                        <p>Perfil</p>
                        <hr></hr>
                    </div>
                    <div className="quadro_perfil_geral">
                        <div>
                            <img className="imagem_usuario" src={woman}></img>
                        </div>
                        <div className="info_geral">
                            <div className="name_usuario">
                                <p>Nome de usuario</p>
                                <input></input>
                            </div>
                            <div className="email_usuario">
                                <p>Email</p>
                                <input></input>
                            </div>
                            <div className="senha_usuario">
                                <p>Senha</p>
                                <input></input>
                            </div>
                            <Link to="/" className="botao1_usuario">Alterar informações</Link>
                        </div>
                    </div>
                </main>
                <footer className="">
                    <span>© 2022 Copyright - Programador</span>
                </footer>
            </div>
        )
    }
}