import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './core/components/Navbar';
import MovieDetails from './pages/MovieCatalog/components/MovieDetails';
import MovieCatalog from './pages/MovieCatalog';
import Home from './pages/Home';

const Routes = () => (
  <BrowserRouter>
  <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies" exact>
        <MovieCatalog />
      </Route>
      <Route path="/movies/:movieId">
        <MovieDetails />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes; 