import '../../assets/css/budge.css'
import { Component } from 'react';
import { Link } from 'react-router-dom'
import React from 'react'
import { parseJwt, usuarioAutenticado } from '../../services/auth'



import logo1 from '../../assets/img/CloudPlanning-_1_-1 1.png'
import diagrama_fundo from '../../assets/img/tela_diagrama.png'
import logo_laranja from '../../assets/img/logo_laranja.png'
import woman from '../../assets/img/woman.png'




function App() {
    document.title = 'Budge | CloudPlanning'
    return (
        <div>
            <header className="header_diagrama">
                <div className="containerr container_headerr">
                    <div className="redirencionarrr">
                        <img className="imgLogo" src={logo_laranja} alt="logo_CloudPlanning" />
                        <p className="logo_diagramasss">CloudPlanning</p>
                        <div className="perfil_redirencionarr">
                            <Link to="/alterar_usuario" className="butao_perfil_laranja">Perfil</Link>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className="all_itens">
                    <section className="quadroo">
                        <div className="but">
                            {/* <button className="but_desing">Desing</button> */}
                            <Link to="/diagramas" className="but_desingg">Design</Link>

                            {/* <button className="but_budge">Budge</button> */}
                            <Link to="/budge" className="but_budgee">Budge</Link>
                        </div>

                        <div className="comp_pesquisar">
                            <span>Calculadora AWS</span>
                        </div>
                        <div className="formatação">
                            <span>A Calculadora de preços da AWS permite explorar os serviços da AWS e criar uma estimativa para o custo de seus casos de uso na AWS</span>
                        </div>
                        <div className="comp_pesquisar">
                            <span>Crie uma estimativa</span>
                        </div>
                        <div className="formatação">
                            <span>Inicie sua estimativa sem compromisso e explore os serviços e a definição de preço da AWS para suas necessidades de arquitetura.</span>
                        </div>
                        <div className="comp_pesquisar">
                            <span>Como utilizar?</span>
                        </div>
                        <div className="formatação">
                            <span>A calculadora possui duas abas de serviço, uma destinada à estimativa de serviços e por fim, outra para a sua fatura. </span>
                            <div>
                                <span>Na aba “Serviços”, o cliente pode escolher uma região da AWS, serviços correspondentes e formulários de entrada para receber a estimativa, gerada de uma maneira mais próxima possível. Ao escolher a região, a lista de serviços muda automaticamente, conforme a disponibilidade. </span>
                            </div>
                            <div>
                                <span>Já na aba “Estimativa da sua fatura mensal”, é possível encontrar a visualização detalhada, em tempo real, de todos os custos mensais, ao passo que os valores de serviços AWS são inseridos. </span>
                            </div>
                            <div>
                                <span>Assim, a estimativa mostra o total de custos únicos e mensais recorrentes. Além disso, há modelos de clientes, no lado direito, que podem ser carregados para começar um caso de uso específico.</span>
                            </div>
                        </div>
                        <div className="comp_pesquisar">
                            <span>Recursos</span>
                        </div>
                        <div className="formatação_aws">
                            <span>Com AWS Pricing Calculator, Você pode executar as seguintes tarefas:</span>
                            <div>
                                <div className='recursos'>
                                    <span>Visualizar preços transparentes: veja os cálculos por trás dos preços estimados para suas configurações de serviço. Você pode visualizar as estimativas de preço por serviço ou por grupos de serviços para analisar os custos de arquitetura.</span>
                                </div>
                                <div>
                                    <span>Usar grupos para estimativas hierárquicas: classifique suas estimativas em grupos para se alinhar com sua arquitetura para uma análise clara do custo de serviço.</span>
                                </div>
                                <div>
                                    <span>Compartilhe estimativas: Salve o link para cada estimativa para compartilhar ou revisitar posteriormente. As estimativas são salvas noAWSservidores públicos.</span>
                                </div>
                                <div>
                                    <span>Exportar estimativas: exporte suas estimativas em formato CSV ou PDF para compartilhar localmente com suas partes interessadas.</span>
                                </div>
                            </div>
                        </div>

                    </section>

                    <section>
                        <div className="teste">
                            <div className='tittle'>
                                <h1>Calculadora AWS</h1>
                                <hr></hr>
                            </div>
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