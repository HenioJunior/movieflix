import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './core/components/Navbar';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import MovieDetails from './pages/Catalog/components/MovieDetails';

const Routes = () => (
  <BrowserRouter>
  <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies" exact>
        <Catalog />
      </Route>
        <Route path="/movies/:moviesId">
          <MovieDetails />
        </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;