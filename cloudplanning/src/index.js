import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from 'react-router-dom';

import './index.css';

import Home from './pages/home/App';
import Login from './pages/login/login';
import cadastro from './pages/cadastro/cadastro';
import diagramas from './pages/diagramas/diagramas';
import NotFound from './pages/notFound/NotFound';
import Budge from './pages/budge/budge'
import Cadastro_adm from './pages/cadastro_adm/cadastro_adm'
import alterar_usuario from './pages/alterar_usuario/alterar_usuario'
import alterar_empresa from './pages/alterar_empresa/alterar_empresa'
// import esqueciSenha from './pages/esqueciSenha/esqueciSenha';

import reportWebVitals from './reportWebVitals';


const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} /> {/* Home */}
        <Route path="/Login" component={Login} /> {/* Login */}
        <Route path="/cadastro" component={cadastro} /> {/* Cadastro */}
        <Route path="/diagramas" component={diagramas} /> {/* Diagramas */}
        <Route path="/budge" component={Budge} /> {/* Diagramas */}
        <Route path="/cadastro_adm" component={Cadastro_adm} /> {/* Diagramas */}
        <Route path="/alterar_usuario" component={alterar_usuario} /> {/* Diagramas */}
        <Route path="/alterar_empresa" component={alterar_empresa} /> {/* Diagramas */}
        {/* <Route path="/esqueciSenha" component={esqueciSenha} /> esqueciSenha */}

        <Route path="/notFound" component={NotFound} /> {/* Not Found */}
        <Redirect to="/notFound" /> {/* Redireciona para Not Found caso não encontre nenhuma rota */}
      </Switch>
    </div>
  </Router>
)


ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
