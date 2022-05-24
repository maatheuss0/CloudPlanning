import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import '../../assets/css/cadastro.css'


export default function Cadastro() {

    const [email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const [Nome, setNome] = useState('');
    const [arquivo, setArquivo] = useState('');
    const [DataNascimento, setDataNascimento] = useState('');
    const [base64img, setBase64img] = useState('');
    const [isLoading, setIsLoading] = useState(false);



    const Cadastrar = (event) => {

        event.preventDefault();
        setIsLoading(true);
        var formData = new FormData();
    
        const target = document.getElementById('arquivo')
        const file = target.files[0]
        formData.append('arquivo', file, file.name)
    
        formData.append('nome', Nome);
        formData.append('email', email);
        formData.append('senha', Senha);
    
        axios({
          method: "post",
          url: "http://localhost:5000/api/Usuarios",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        })
          .then(function (response) {
            console.log(response);
            setIsLoading(false);
          })
          .catch(function (response) {
            //handle error
            console.log(response);
            setIsLoading(false);
          });
      }
    

            


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

                        <form className="form-cadastro" action="submit">

                            {/* <input className="input-login" type="file" placeholder="arquivo"
                                name='arquivo'
                                onChange={campo => setArquivo(campo.target.value)} value={arquivo} required
                            /> */}

                            <input className="input-login" type="text" placeholder="Nome"
                                name='nomeUsuario'
                                onChange={campo => setNome(campo.target.value)} value={Nome} required
                            />



                            <input className="input-login" type="date" placeholder="Data de nascimento"
                                name='dataNasc'
                                onChange={campo => setDataNascimento(campo.target.value)} value={DataNascimento} required
                            />



                            <input className="input-login" type="Email" placeholder="Email"
                                name='email'
                                onChange={campo => setEmail(campo.target.value)} value={email} required
                            />


                            <input className="input-login" type="password" placeholder="Senha"
                                name='senha'
                                onChange={campo => setSenha(campo.target.value)} value={Senha} required
                            />



                            {/* <button className="btn-entrar" type="submit">Cadastrar-se</button> */}

                            {isLoading ?
                                <button className='btn-entrar' type="submit" disabled>Carregando...</button>
                                : <button className='btn-entrar' type="submit">Cadastrar</button>}


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
