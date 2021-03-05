import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './core/components/Navbar';
import Details from './pages/Details';
import Catalog from './pages/Catalog';
import Home from './pages/Home';

const Routes = () => (
  <BrowserRouter>
  <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/catalog">
        <Catalog />
      </Route>
      <Route path="/details">
        <Details />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;