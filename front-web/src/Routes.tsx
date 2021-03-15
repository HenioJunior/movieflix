import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MovieDetails from './pages/Catalog/components/MovieDetails';
import Catalog from './pages/Catalog';
import Home from './pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies" exact>
        <Catalog />
      </Route>
      <Route path="/movies/:movieId">
        <MovieDetails />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;