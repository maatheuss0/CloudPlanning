import '../../assets/css/login.css'
import { Component } from 'react';

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
                        <form class="form-login" onSubmit={this.efetuaLogin}>
                            <input class="input-login" placeholder="Email" type="email" name="email" required />
                            <input class="input-login" placeholder="Senha" type="password" name="senha" required />
                            <span class="esqueceu-senha"> Esqueceu sua senha?</span>
                            <button class="btn-entrar" type="submit">Entrar</button>
                        </form>
                    </div>
                </main>

            </div>
        )
    }
};