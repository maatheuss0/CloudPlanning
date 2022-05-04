import './notFound.css';
import { Link } from 'react-router-dom'

import not from '../../assets/img/notFound.png'


function App() {
  document.title = 'Página não encontrada'
  return (
    <div className="App">
      <header className="App-header">
        <img  src={not} alt="artigo" />
        <h4>Opps! Página não encontrada</h4>
        {/* <p>Essa página não existe. verifique o caminho, você pode retornar para o início</p> */}
        {/* <a className="botao" href="#">Voltar para ínicio</a> */}
        <Link to="/" className="botao">Voltar para ínicio</Link>
      </header>
    </div>
  );
}

export default App;