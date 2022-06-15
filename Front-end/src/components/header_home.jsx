import './App.css';
import { Link } from 'react-router-dom'
import { Component } from 'react';

import logo from '../../assets/img/CloudPlanning-_1_-1 1.png'


export default class Cabecalho extends Component {
    render() {
        <header>
            <div className="container container_header">
                <img className="logo_home" src={logo} alt="logo_CloudPlanning" />
                <p className="nome_home">CloudPlanning</p>
                <nav className="cabeçalho">
                    <a className="alinhamento" href="#início">INÍCIO</a>
                    {/* <a className="alinhamento" href="#sobre nós">SOLUÇÕES</a> */}
                    <a className="alinhamento" href="#tips">SOLUÇÕES</a>
                    {/* <a className="login" href="#login">LOGIN</a> */}
                    <Link to="/login" className="login1">LOGIN</Link>
                    {/* <button className="butao" >Cadastrar</button> */}
                    <Link to="/cadastro" className="butao">Cadastrar</Link>
                </nav>
                <a href="">
                    <i className="fa-solid fa-bars"></i>
                </a>
            </div>
        </header>
    }
}