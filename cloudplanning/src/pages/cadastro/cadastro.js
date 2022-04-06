import '../../assets/css/cadastro.css'
import { Component } from 'react';

import logo from '../../assets/img/logo.png'

export default class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            erroMensagem: '',
            isLoading: false
        };
    };


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

                        <form class="form-login" action="">
                            <input class="input-login" placeholder="Nome" type="name" name="Nome" required />
                            <input class="input-login" placeholder="Empresa" type="name" name="Empresa" required />
                            <input class="input-login" placeholder="Telefone" type="Telefone" name="Telefone" required />
                            <input class="input-login" placeholder="Email" type="E   mail" name="Email" required />
                            <input class="input-login" placeholder="Senha" type="password" name="senha" required />
                            <button class="btn-entrar" type="submit">Cadastrar-se</button>
                        </form>
                    </div>
                </main>
            </div>
        )
    }
};