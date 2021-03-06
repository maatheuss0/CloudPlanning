import '../../assets/css/budge.css'
import { Component } from 'react';
import { Link } from 'react-router-dom'
import React from 'react'
import { parseJwt, usuarioAutenticado } from '../../services/auth'



import logo1 from '../../assets/img/CloudPlanning-_1_-1 1.png'
import diagrama_fundo from '../../assets/img/tela_diagrama.png'
import logo_laranja from '../../assets/img/logo_laranja.png'
import woman from '../../assets/img/woman.png'
import ModalPerfil from '../../components/ModalPerfil';





export default class Budge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            isModalVisibleP: false,
            isModalVisibleV: false,
        };
    };

    render() {


        document.title = 'Budge | CloudPlanning'
        return (
            <div>
                <header className="header_diagrama">
                    <div className="containerr container_headerr">
                        <div className="redirencionarrr">
                            <img className="imgLogo" src={logo_laranja} alt="logo_CloudPlanning" />
                            <p className="logo_diagramasss">CloudPlanning</p>
                            {/* <div className="perfil_redirencionarr">
                                <button className="butao_perfil_laranja" onClick={() => this.setState({ isModalVisibleP: true })}>Perfil</button>
                            </div> */}
                        </div>
                        <div>
                            {this.state.isModalVisibleP ? (
                                <ModalPerfil onClose={() => this.setState({ isModalVisibleP: false })}>
                                    <form>
                                        <div className='inputs_vpc'>

                                        </div>
                                    </form>
                                </ModalPerfil>
                            ) : null}
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
                            <div className="formata????o">
                                <span>A Calculadora de pre??os da AWS permite explorar os servi??os da AWS e criar uma estimativa para o custo de seus casos de uso na AWS</span>
                            </div>
                            <div className="comp_pesquisar">
                                <span>Crie uma estimativa</span>
                            </div>
                            <div className="formata????o">
                                <span>Inicie sua estimativa sem compromisso e explore os servi??os e a defini????o de pre??o da AWS para suas necessidades de arquitetura.</span>
                            </div>
                            <div className="comp_pesquisar">
                                <span>Como utilizar?</span>
                            </div>
                            <div className="formata????o">
                                <span>A calculadora possui duas abas de servi??o, uma destinada ?? estimativa de servi??os e por fim, outra para a sua fatura. </span>
                                <div>
                                    <span>Na aba ???Servi??os???, o cliente pode escolher uma regi??o da AWS, servi??os correspondentes e formul??rios de entrada para receber a estimativa, gerada de uma maneira mais pr??xima poss??vel. Ao escolher a regi??o, a lista de servi??os muda automaticamente, conforme a disponibilidade. </span>
                                </div>
                                <div>
                                    <span>J?? na aba ???Estimativa da sua fatura mensal???, ?????poss??vel encontrar a visualiza????o detalhada, em tempo real, de todos os custos mensais, ao passo que os valores de servi??os AWS s??o inseridos. </span>
                                </div>
                                <div>
                                    <span>Assim, a estimativa mostra o total de custos ??nicos e mensais recorrentes. Al??m disso, h?? modelos de clientes, no lado direito, que podem ser carregados para come??ar um caso de uso espec??fico.</span>
                                </div>
                            </div>
                            <div className="comp_pesquisar">
                                <span>Recursos</span>
                            </div>
                            <div className="formata????o_aws">
                                <span>Com AWS Pricing Calculator, Voc?? pode executar as seguintes tarefas:</span>
                                <div>
                                    <div className='recursos'>
                                        <span>Visualizar pre??os transparentes: veja os c??lculos por tr??s dos pre??os estimados para suas configura????es de servi??o. Voc?? pode visualizar as estimativas de pre??o por servi??o ou por grupos de servi??os para analisar os custos de arquitetura.</span>
                                    </div>
                                    <div>
                                        <span>Usar grupos para estimativas hier??rquicas: classifique suas estimativas em grupos para se alinhar com sua arquitetura para uma an??lise clara do custo de servi??o.</span>
                                    </div>
                                    <div>
                                        <span>Compartilhe estimativas: Salve o link para cada estimativa para compartilhar ou revisitar posteriormente. As estimativas s??o salvas noAWSservidores p??blicos.</span>
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
                                <div className='retangulo3'>
                                </div>
                            </div>
                        </section>

                    </div>
                </main>
            </div>
        )
    };
}