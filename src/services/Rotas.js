import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Login from '../pages/Login';
import Explore from '../pages/Explore';

function Rotas() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/header" component={ Header } />
        <Route exact path="/" component={ Login } />
        <Route exact path="/explore" component={ Explore } />
      </Switch>
    </BrowserRouter>
  );
}

export default Rotas;
