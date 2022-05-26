import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Component } from 'react';
import logo from '../../assets/img/logo.png'
import '../../assets/css/cadastro.css'


export default class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            Senha: '',
            Nome: '',
            DataNascimento: '',
            Imagem: "ttttt"
        };
    };


    cadastrarUsuario = (event) => {

        event.preventDefault();

        this.setState({ erroMensagem: "", isLoading: true })

        axios.post('https://localhost:5003/api/Usuarios', {
            Email: this.state.Email,
            Senha: this.state.Senha,
            Nome: this.state.Nome,
            DataNascimento: this.state.DataNascimento,
            Imagem: this.state.Imagem

        })

            .then(resposta => {
                if (resposta.status === 201) {
                    localStorage.setItem('usuario-cadastro', resposta.data.token);
                    this.setState({ isLoading: false });
                    this.props.history.push('/diagramas');
                }
            })
            .catch(() => {
                this.setState({ erroMensagem: "Email já cadastrado, tente novamente!", isLoading: false });
            })
    }


    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name]: campo.target.value })
        console.log([campo.target.name] + ' : ' + campo.target.value)
    }

    limparCampos = () => {
        this.setState({
            Email: '',
            Senha: '',
            Nome: '',
            DataNascimento: '',
            Imagem: '',
        })
    };


    render() {

        document.title = 'Cadastro | CloudPlanning'
        return (
            <div>
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

                            <form className="form-cadastro" action="submit" onSubmit={this.cadastrarUsuario}>

                                <input className='input-login'
                                    type="text"
                                    name='Nome'
                                    placeholder="Nome"
                                    onChange={this.atualizaStateCampo}
                                    value={this.state.Nome} required></input>

                                <input className='input-login'
                                    type="date"
                                    name='DataNascimento'
                                    placeholder="Data de nascimento"
                                    onChange={this.atualizaStateCampo}
                                    value={this.state.DataNascimento} required></input>

                                <input className='input-login'
                                    type="Email"
                                    name='Email'
                                    placeholder="Email"
                                    onChange={this.atualizaStateCampo}
                                    value={this.state.Email} required></input>

                                <input className='input-login'
                                    type="password"
                                    name='Senha'
                                    placeholder="Senha"
                                    onChange={this.atualizaStateCampo}
                                    value={this.state.Senha} required></input>

                                <button class="btn-entrar" type="submit">Cadastrar-se</button>

                            </form>
                            <div className="cadastrar2">
                                <p>Possui uma conta?</p>
                                <Link to="/login" className="cadastro">Faça login</Link>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}
