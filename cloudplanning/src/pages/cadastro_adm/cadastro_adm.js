import '../../assets/css/cadastro.css'
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
            empresa: '',
            telefone: '',
            CNPJ: '',
            CPF: '',
            dataNasc: '',
            cadastroMensagem: '',
        };
    };

    cadastrarEmpresa = (event) => {
        event.preventDefault();

        this.setState({ erroMensagem: "", isLoading: true })

        axios.post('http://localhost:5000/api/Empresas', {
            NomeFantasia: this.state.NomeFantasia,
            telefone: this.state.telefone,
            CNPJ: this.state.CNPJ
 
        })

            .then(resposta => {
                if (resposta.status === 200) {
                    localStorage.setItem('empresa-cadastro', resposta.data.token);
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
            email: '',
            senha: '',
            empresa: '',
            telefone: '',
            CNPJ: '',
            CPF: '',
            dataNasc: '',
            idUsuario: 0
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

                <main class="main-login">
                    <div class="container-fundo">

                    </div>

                    <div class="container-input">
                        <a href="http://localhost:3000/">
                            <img class="logo" src={logo} alt="logo" />
                        </a>
                        <p class="titulo-input">Crie uma conta gratuita</p>
                        <hr />

                        {/* <button onClick={() => this.botaoDoMenu()}>a</button> */}

                        <form id="aaa" class="form-login" action="submit" onSubmit={this.cadastrarEmpresa}>

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
                                type="name"
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


                            <button class="btn-entrar" type="submit">Cadastrar-se</button>
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