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
            nomeUsuario: '',
            email: '',
            senha: '',
            empresa: '',
            telefone: '',
            CNPJ: '',
            cadastroMensagem: '',
        };
    };

    cadastrarUsuario = (event) => {
        event.preventDefault();

        this.setState({ erroMensagem: "", isLoading: true })

        axios.post('http://localhost:5000/api/Usuarios', {
            nomeUsuario: this.state.nomeUsuario,
            email: this.state.email,
            senha: this.state.senha,
            empresa: this.state.empresa,
            telefone: this.state.telefone,
            CNPJ: this.state.CNPJ
        })

            .then(resposta => {
                if (resposta.status === 200) {
                    localStorage.setItem('usuario-cadastro', resposta.data.token);
                    this.setState({ isLoading: false });
                    this.props.history.push('/Login');
                }
            })
    }


    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name]: campo.target.value })
        console.log([campo.target.name] + ' : ' + campo.target.value)
    }

    limparCampos = () => {
        this.setState({
            nomeUsuario: '',
            email: '',
            senha: '',
            empresa: '',
            telefone: '',
            CNPJ: '',
            idUsuario: 0
        })
    };

    botaoDoMenu(){
        var menu = document.getElementById("aaa")
        if (menu.style.display === "flex") {
            menu.style.display = "none"
        } else{
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

                        <button onClick={() => this.botaoDoMenu()}>a</button>

                        <form id="aaa" class="form-login" action="submit" onSubmit={this.cadastrarUsuario}>
                            
                            <input className="input-login" type="name" placeholder="Nome"
                                name='nomeUsuario'
                                onChange={this.atualizaStateCampo}
                                value={this.state.nomeUsuario}
                            />

                            <input className="input-login" type="name" placeholder="Empresa"
                                name='empresa'
                                onChange={this.atualizaStateCampo}
                                value={this.state.empresa}
                            />

                            <input className="input-login" type="name" placeholder="Telefone"
                                name='telefone'
                                onChange={this.atualizaStateCampo}
                                value={this.state.telefone}
                            />

                            <input className="input-login" type="name" placeholder="CJNP"
                                name='CNPJ'
                                onChange={this.atualizaStateCampo}
                                value={this.state.CNPJ}
                            />

                            <input className="input-login" type="Email" placeholder="Email"
                                name='email'
                                onChange={this.atualizaStateCampo}
                                value={this.state.email}
                            />

                            <input className="input-login" type="password" placeholder="password"
                                name='senha'
                                onChange={this.atualizaStateCampo}
                                value={this.state.senha}
                            />


                            <p style={{ color: 'green' }}>{this.state.cadastroMensagem}</p>
                            <button class="btn-entrar" type="submit">Cadastrar-se</button>
                        </form>
                        <div className="cadastrar2">
                            <p>Possui uma conta?</p> <Link to="/login" className="cadastro">Faça login</Link>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
};