import '../../assets/css/login.css'
import { Component } from 'react';
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

        axios.post('http://localhost:5000/api/Login', {
            email: this.state.email,
            senha: this.state.senha
        })


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
                                placeholder="password"
                            />
                            <span class="esqueceu-senha"> Esqueceu sua senha?</span>
                            <button class="btn-entrar" type="submit">Entrar</button>
                        </form>
                    </div>
                </main>

            </div>
        )
    }
};