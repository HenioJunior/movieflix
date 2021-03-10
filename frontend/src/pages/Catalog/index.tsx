import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MovieResponse } from '../../core/types/Movies';
import { makeRequest } from '../../core/utils/request';
import MovieCard from './components/MovieCard'
import './styles.scss'

const Catalog = () => {

  const[movieResponse, setMovieResponse] = useState<MovieResponse>();
  
  console.log(movieResponse);

  useEffect(() => {
    const params = {
      page: 0,
      linesPerPage: 5
    }

    makeRequest({url: '/movies', params})
    .then(response => setMovieResponse(response.data));
  }, []);


  return (
    <div className="catalog-container">
     {movieResponse?.content.map(movie =>(
        <Link to="/movies/9" key={movie.id}>
          <MovieCard />
        </Link>
      ))}
    </div>
  );
}

export default Catalog;