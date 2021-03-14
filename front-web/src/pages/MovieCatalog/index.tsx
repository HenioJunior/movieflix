import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MovieResponse } from 'core/types/Movies';
import { makeRequest } from 'core/utils/request';
import MovieCard from './components/MovieCard'
import './styles.scss'
import MovieCardLoader from './components/Loaders/MovieCardLoader';

const MovieCatalog = () => {
  const [movieResponse, setMovieResponse] = useState<MovieResponse>();
  const [isLoading, setIsLoading] = useState(false);
  console.log(movieResponse);

  useEffect(() => {
    const params = {
      page: 0,
      linesPerPage: 10
    }

    setIsLoading(true);
    makeRequest({ url: '/movies', params })
      .then(response => setMovieResponse(response.data))
      .finally(() => { setIsLoading(false);})
  }, []);

  return (
    <div className="catalog-container">
      {isLoading ? <MovieCardLoader /> : (
        movieResponse?.content.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
             <MovieCard movie={movie} />
          </Link>
        ))
      )}
    </div>
  )

}

export default MovieCatalog;
