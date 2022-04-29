import '../../assets/css/budge.css'
import { Component } from 'react';
import { Link } from 'react-router-dom'
import React from 'react'



import logo1 from '../../assets/img/CloudPlanning-_1_-1 1.png'
import diagrama_fundo from '../../assets/img/tela_diagrama.png'
import logo_laranja from '../../assets/img/logo_laranja.png'



function App() {
    return (
        <div>
            <header className="header_diagrama">
                <div className="containerr container_headerr">
                    <div className="redirencionarrr">
                        <img className="imgLogo" src={logo_laranja} alt="logo_CloudPlanning" />
                        <p className="logo_diagramasss">CloudPlanning</p>
                    </div>
                </div>
            </header>
            <main>
                <div className="all_itens">
                    <section className="quadroo">
                        <div className="but">
                            {/* <button className="but_desing">Desing</button> */}
                            <Link to="/diagramas" className="but_desingg">Desing</Link>

                            {/* <button className="but_budge">Budge</button> */}
                            <Link to="/budge" className="but_budgee">Budge</Link>
                        </div>
                        
                    </section>

                    <section>
                        <div className="teste">
                            <iframe scrolling="no" className="iframe" src="https://calculator.aws/#/estimate" title="description"></iframe>
                            <div className='retangulo'>
                            </div>
                            <div className='retangulo2'>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    )
};

export default App;