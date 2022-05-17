import React from 'react';
import { usuarioAutenticado } from '../src/services/auth    '

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        usuarioAutenticado() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
    )} />
);

const Routes = () => {
    <BrowserRouter>
        <switch>
            <Route exact path="/" component={() => <h1>Hello</h1>} />
        </switch>
    </BrowserRouter>
}

export default Routes;