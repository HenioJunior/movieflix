import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import MovieCard from './components/MovieCard';

import './styles.scss'

const Catalog = () => {

 useEffect(() => {
  fetch('http://localhost:3000/movies')
  .then(response => response.json())
  .then(response => console.log(response))
 }, [])

  return (
    <div className="catalog-container">
     <Link to="/movies/1"><MovieCard /></Link>
     <Link to="/movies/1"><MovieCard /></Link>
     <Link to="/movies/1"><MovieCard /></Link>
     <Link to="/movies/1"><MovieCard /></Link>
     <Link to="/movies/1"><MovieCard /></Link>
     
       
    </div>
  );
}

export default Catalog;