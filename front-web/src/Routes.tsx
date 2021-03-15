import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import MovieDetails from './pages/Catalog/components/MovieDetails';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import history from 'core/utils/history';

const Routes = () => (
  <Router history={ history }>
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
  </Router>
);

export default Routes;