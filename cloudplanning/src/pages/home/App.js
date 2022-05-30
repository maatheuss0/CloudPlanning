import './App.css';
import { Link } from 'react-router-dom'
import { Component } from 'react';

import logo from '../../assets/img/CloudPlanning-_1_-1 1.png'
import darede from '../../assets/img/DAREDE.png'
import aws from '../../assets/img/aws.png'
import diagrama1 from '../../assets/img/pngwing 1.png'
import diagrama2 from '../../assets/img/pngwing 2.png'
import diagrama3 from '../../assets/img/pngwing 3.png'
import fundo from '../../assets/img/image_fundo.png'




function App() {
  document.title = 'Início | CloudPlanning'
  return (
    <div className='itens'>
      <header>
        <div className="container container_header">
          <img className="logo_home" src={logo} alt="logo_CloudPlanning" />
          <p className="nome_home">CloudPlanning</p>
          <nav className="cabeçalho">
            {/* <a className="alinhamento" href="#início">INÍCIO</a> */}
            {/* <a className="alinhamento" href="#sobre nós">SOLUÇÕES</a> */}
            {/* <a className="alinhamento" href="#tips">SOLUÇÕES</a> */}
            {/* <a className="login" href="#login">LOGIN</a> */}
              <Link to="/login" className="login1">LOGIN</Link>
              <Link to="/cadastro" className="butao">Cadastrar</Link>
            {/* <button className="butao" >Cadastrar</button> */}
          </nav>
          <a href="">
            <i className="fa-solid fa-bars"></i>
          </a>
        </div>
      </header>


      <main>
        <div className="fundo">
          <section className="container_banner container  banner">
            <div className="conteudo_banner">
              <div>
                <article className="caixa">
                  <div className="alinhar">
                    <img className="img1" src={darede} alt="artigo" />
                    <p>Com vasta experiência no mercado e sendo parceira da Amazon
                      Web Services e Microsoft, duas das principais empresas de tecnologia do mundo, a
                      Darede
                      busca trazer inovação e excelência ao oferecer a seus clientes os melhores
                      serviços
                      do
                      mercado. A Darede oferece uma orientação completa e abrangente para que sua
                      empresa
                      siga a melhor jornada para cloud, projetando uma arquitetura personalizada e
                      totalmente voltada para suas necessidades</p>
                  </div>
                </article>
              </div>
              <div className="caixa">
                <div className="alinhar"></div>
                <img className="img2" src={aws} alt="artigo" />
                <p>A Amazon Web Services (AWS) é a plataforma de nuvem mais adotada e mais abrangente do
                  mundo,
                  oferecendo mais de 200 serviços completos de datacenters em todo o mundo. Os recursos de
                  computação em nuvem da Amazon são hospedados em vários locais no mundo todo. Esses
                  locais
                  são compostos por regiões da AWS, zonas de disponibilidade e zonas locais. Cada região
                  da
                  AWS é uma área geográfica separada</p>
              </div>

            </div>
          </section>
        </div>

        <section className="diagramas container">
          <h2>Trabalhe como um profissional</h2>
          <h3>Crie diagramas da AWS</h3>
          <Link to="/login" className="botao">Crie seu diagrama</Link>
          {/* <button>Crie seu diagrama</button> */}
          <hr />
          <div className="infra">
            <img className="infra2" src={diagrama1} alt="" />
            <img src={diagrama2} alt="" />
            <img className="infra2" src={diagrama3} alt="" />
          </div>
        </section>

        <section className="">
          <div id="tips" className="fundo2 container">
            <img src={diagrama2} alt="" />
            <div className="quem_somos">
              <h1>Diagramas de rede</h1>
              <hr></hr>
              <span>Os diagramas de rede são essenciais para ilustrar as entradas e saídas da sua rede. Como
                engenheiro de rede ou profissional de TI, você provavelmente precisará desenhar diagramas de
                rede ao projetar, desenvolver e solucionar problemas de sua rede, ou para ajudar outras
                pessoas
                a entender suas funcionalidades. Programas para desenhar estrutura de redes também podem ser
                usados para coordenar atualizações e atuar como documentações para a comunicação externa,
                integração e solução de problemas
              </span>
              <span>
                Um diagrama de rede é uma representação visual de uma rede de computadores ou
                telecomunicações.
                Ele mostra os componentes que constituem uma rede e como eles interagem, incluindo
                roteadores,
                dispositivos, hubs, firewalls etc. Este diagrama de rede mostra uma rede de área local
                (LAN)</span>

              <Link to="/login" className="botao1">Começe agora</Link>
              {/* <button>Começe agora</button> */}
            </div>
          </div>
        </section>
      </main>
      <footer className="header_home">
        <span>© 2022 Copyright - Programador</span>
      </footer>
    </div>
  );
}

export default App;