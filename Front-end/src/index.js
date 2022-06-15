import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from 'react-router-dom';
import { usuarioAutenticado } from './services/auth';
import './index.css';
import Home from './pages/home/App';
import Login from './pages/login/login';
import cadastro from './pages/cadastro/cadastro';
import diagramas from './pages/diagramas/diagramas';
import NotFound from './pages/notFound/NotFound';
import Budge from './pages/budge/budge'

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      usuarioAutenticado() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/Login", state: { from: props.location } }} />
      )
    }
  />
);


const routing = (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} /> {/* Home */}
        <Route path="/Login" component={Login} /> {/* Login */}
        <Route path="/cadastro" component={cadastro} /> {/* Cadastro */}
        <PrivateRoute path="/diagramas" component={diagramas} /> {/* Diagramas */}
        <PrivateRoute path="/budge" component={Budge} /> {/* Budge */}

        <Route path="/notFound" component={NotFound} /> {/* Not Found */}
        <Redirect to="/notFound" /> {/* Redireciona para Not Found caso não encontre nenhuma rota */}
      </Switch>
  </BrowserRouter>
)


ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
