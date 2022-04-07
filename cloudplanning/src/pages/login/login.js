import '../../assets/css/login.css'
import { Component } from 'react';
import { Link } from 'react-router-dom'
import React from 'react'
import axios from 'axios';



import logo from '../../assets/img/logo.png'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            erroMensagem: '',
            isLoading: false
        };
    };

    efetuaLogin = (event) => {

        event.preventDefault();

        this.setState({ erroMensagem: '', isLoading: true });

        axios.post('https://localhost:5001/api/Login', {
            email: this.state.email,
            senha: this.state.senha
        })

            .then(resposta => {
                if (resposta.status === 200) {
                    localStorage.setItem('usuario-login', resposta.data.token);
                    this.setState({ isLoading: false });
                    this.props.history.push('/diagramas');
                }
            })
            .catch(() => {
                this.setState({ erroMensagem: "Email e/ou senha inválidos!", isLoading: false });
            })
    }

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name]: campo.target.value })
        console.log([campo.target.name] + ' : ' + campo.target.value)
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
                        <p class="titulo-input">Realize login no sistema</p>
                        <hr />
                        <form onSubmit={this.efetuaLogin} class="form-login">
                            <input
                                className="input-login"
                                // e-mail
                                type="text"
                                name="email"
                                // define que o input email recebe o valor do state email
                                value={this.state.email}
                                // faz a chamada para a função que atualiza o state, conforme o usuário altera o valor do input
                                onChange={this.atualizaStateCampo}
                                placeholder="Email"
                            />
                            <input
                                className="input-login"
                                // senha
                                type="password"
                                name="senha"
                                // define que o input senha recebe o valor do state senha
                                value={this.state.senha}
                                // faz a chamada para a função que atualiza o state, conforme o usuário altera o valor do input
                                onChange={this.atualizaStateCampo}
                                placeholder="Senha"
                            />
                            <span class="esqueceu-senha"> Esqueceu sua senha?</span>
                            {
                                this.state.isLoading === true &&
                                <button className="btn-entrar" type="submit" disabled>Loading...</button>
                            }
                            {
                                this.state.isLoading === false &&
                                <button className="btn-entrar" disabled={this.state.email === '' || this.state.senha === '' ? 'none' : ''} type="submit">Entrar</button>
                            }
                            <p className="erro" style={{ color: 'red' }}>{this.state.erroMensagem}</p>

                        </form>
                        <div className="cadastrar">
                            <p>Não possui uma conta?</p> <Link to="/cadastro" className="login">Cadastre-se</Link>
                        </div>
                    </div>
                </main>

            </div>
        )
    }
};