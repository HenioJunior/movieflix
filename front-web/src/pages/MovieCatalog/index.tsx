import React from 'react'
import { Link } from 'react-router-dom';
import MovieCard from './components/MovieCard'
import './styles.scss'

const MovieCatalog = () => (
  <div className="catalog-container">
    <Link to="/movies/1"><MovieCard /></Link>
    <Link to="/movies/2"><MovieCard /></Link>
    <Link to="/movies/3"><MovieCard /></Link>
    <Link to="/movies/4"><MovieCard /></Link>
    <Link to="/movies/5"><MovieCard /></Link>
    <Link to="/movies/6"><MovieCard /></Link>
    <Link to="/movies/7"><MovieCard /></Link>
    <Link to="/movies/8"><MovieCard /></Link>
    <Link to="/movies/9"><MovieCard /></Link>
  </div>
)

export default MovieCatalog;