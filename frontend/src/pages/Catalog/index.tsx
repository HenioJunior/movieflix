import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { makeRequest } from '../../core/utils/request';
import MovieCard from './components/MovieCard'
import './styles.scss'

const Catalog = () => {
  useEffect(() => {
    const params = {
      page: 0,
      linesPerPage: 5
    }

    makeRequest({url: '/movies', params})
    .then(response => console.log(response));
  }, []);


  return (
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
  );
}

export default Catalog;