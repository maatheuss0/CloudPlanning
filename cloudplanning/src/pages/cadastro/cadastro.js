import '../../assets/css/cadastro.css'
import { Component, useState } from 'react';
import { Link } from 'react-router-dom'
import React from 'react'


import logo from '../../assets/img/logo.png'
import axios from 'axios';
import Login from '../login/login';

export default class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomeUsuario: '',
            email: '',
            senha: '',
            dataNasc: '',
            cadastroMensagem: '',
            erroMensagem: '',
            isLoading: false
        };
    };


    cadastrarUsuario = (event) => {
        event.preventDefault();

        this.setState({ erroMensagem: "", isLoading: true })

        axios.post('http://localhost:5000/api/Usuarios', {
            nomeUsuario: this.state.nomeUsuario,
            email: this.state.email,
            senha: this.state.senha,
            dataNasc: this.state.dataNasc,
        })

            .then(resposta => {
                if (resposta.status === 201) {
                    localStorage.setItem('usuario-cadastro', resposta.data.token);
                    this.setState({ isLoading: false });
                    this.props.history.push('/diagramas');
                }
            })
            .catch(() => {
                this.setState({ erroMensagem: "Esse email já está sendo utilizado, por favor insira outro!", isLoading: false });
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
            dataNasc: '',
            erroMensagem: '',
            isLoading: false
        })
    };




    render() {
        document.title = 'Cadastro | CloudPlanning'
        return (
            <div>

                <main className="main-login">
                    <div className="container-fundo">

                    </div>

                    <div className="container-input">
                        <a href="http://localhost:3000/">
                            <img className="logo" src={logo} alt="logo" />
                        </a>
                        <p className="titulo-input_cad">Crie uma conta gratuita</p>
                        <hr className='hr_cadastro' />

                        {/* <button onClick={() => this.botaoDoMenu()}>a</button> */}

                        <form id="aaa" className="form-cadastro" action="submit" onSubmit={this.cadastrarUsuario}>

                            <input className="input-login" type="text" placeholder="Nome"
                                name='nomeUsuario'
                                onChange={this.atualizaStateCampo}
                                value={this.state.nomeUsuario}
                            />



                            <input className="input-login" type="date" placeholder="Data de nascimento"
                                name='dataNasc'
                                onChange={this.atualizaStateCampo}
                                value={this.state.dataNasc}
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



                            {/* <button className="btn-entrar" type="submit">Cadastrar-se</button> */}
                            {
                                this.state.isLoading === true &&
                                <button className="btn-entrar" type="submit" disabled>Loading...</button>
                            }
                            {
                                this.state.isLoading === false &&
                                <button className="btn-entrar" disabled={this.state.email === '' || this.state.senha === '' ? 'none' : ''} type="submit">Cadastrar-se</button>
                            }
                            <p style={{ color: 'red' }}>{this.state.erroMensagem}</p>

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