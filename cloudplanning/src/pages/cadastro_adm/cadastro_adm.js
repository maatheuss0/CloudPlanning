import '../../assets/css/cadastro-adm.css'
import { Component } from 'react';
import { Link } from 'react-router-dom'
import React from 'react'



import logo from '../../assets/img/logo.png'
import axios from 'axios';

export default class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NomeFantasia: '',
            email: '',
            senha: '',
            telefone: '',
            CNPJ: '',
        };
    };

    cadastrarEmpresa = (event) => {
        event.preventDefault();

        this.setState({ erroMensagem: "", isLoading: true })

        axios.post('https://localhost:5001/api/Empresas', {
            NomeFantasia: this.state.NomeFantasia,
            telefone: this.state.telefone,
            CNPJ: this.state.CNPJ,

            idUsuarioNavigation: {
                email:  this.state.email,
                senha:  this.state.senha,
                IdTipoUsuario: 3
            }
        })

            .then(resposta => {
                if (resposta.status === 200) {
                    localStorage.setItem('usuario-cadastro', resposta.data.token);
                    this.setState({ isLoading: false });
                    this.props.history.push('/diagramas');
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
            NomeFantasia: '',
            CNPJ: '',
            empresa: '',
            telefone: '',
            email: '',
            senha: '',
        })
    };

    botaoDoMenu() {
        var menu = document.getElementById("aaa")
        if (menu.style.display === "flex") {
            menu.style.display = "none"
        } else {
            menu.style.display = "flex"
        }
    }


    render() {
        return (
            <div>

                <main className="main-login">
                    <div className="container-fundo">

                    </div>

                    <div className="container-input">
                        <a href="http://localhost:3000/">
                            <img className="logo" src={logo} alt="logo" />
                        </a>
                        <p className="titulo-input">Crie uma conta gratuita</p>
                        <hr className='hr_adm'></hr>

                        {/* <button onClick={() => this.botaoDoMenu()}>a</button> */}

                        <form id="aaa" className="form-login" action="submit" onSubmit={this.cadastrarEmpresa}>

                            <input className="input-login" type="name" placeholder="Nome Fantasia"
                                name='NomeFantasia'
                                onChange={this.atualizaStateCampo}
                                value={this.state.NomeFantasia}
                            />

                            {/* <input className="input-login" type="name" placeholder="Empresa"
                                name='empresa'
                                onChange={this.atualizaStateCampo}
                                value={this.state.empresa}
                            /> */}

                            <input className="input-login"
                                type="number"
                                placeholder="Telefone"
                                name='telefone'
                                onChange={this.atualizaStateCampo}
                                value={this.state.telefone}
                            />


                            <input className="input-login"
                                type="name"
                                placeholder="CNPJ"
                                name='CNPJ' maxLength="14"
                                onChange={this.atualizaStateCampo}
                                value={this.state.CNPJ}
                            />

                            <input className="input-login" type="Email" placeholder="Email"
                                name='email'
                                onChange={this.atualizaStateCampo}
                                value={this.state.email}
                            />

                            <input className="input-login" type="password" placeholder="Senha"
                                name='senha'
                                onChange={this.atualizaStateCampo}
                                value={this.state.senha}
                            />


                            <button className="btn-entrar" type="submit">Cadastrar-se</button>
                            <p style={{ color: 'green' }}>{this.state.cadastroMensagem}</p>
                        </form>
                        <div className="cadastrar2">
                            <p>Possui uma conta?</p>
                            <Link to="/login" className="cadastro">Faça login</Link>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
};