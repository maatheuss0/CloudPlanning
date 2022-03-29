import './App.css'

import logo from '../../assets/img/CloudPlanning-_1_-1 1.png'
import empresa1 from '../../assets/img/DAREDE.png'

function App() {
    return (

        <>
            <header>
                <div class="container container_header">
                    <img src={logo} alt="logo_CloudPlanning"/>
                    <p>CloudPlanning</p>
                    <nav class ="cabeçalho">
                    <a class ="alinhamento" href="#início">Início</a>
                    <a class ="alinhamento" href="#sobre nós">Sobre nós</a>
                    <a class ="login" href="#login">LOGIN</a>
                    <button>Cadastrar</button>
                    </nav>
                </div>
            </header>

            <main>
                <section class="container_banner banner">
                    <div class="conteudo_banner">
                        <div class="caixa">
                            <img src={empresa1} alt="logo_darede"/>
                            <p>da rede</p>
                        </div>
                    </div>
                </section>
            </main>

        </>
    );
}

export default App;


