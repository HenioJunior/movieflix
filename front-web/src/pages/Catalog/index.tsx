import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MovieResponse } from 'core/types/Movies';
import { makeRequest } from 'core/utils/request';
import MovieCard from './components/MovieCard'
import './styles.scss'
import MovieCardLoader from './components/Loaders/MovieCardLoader';
import Pagination from './components/Pagination';
import Navbar from 'core/components/Navbar';

const Catalog = () => {
  const [movieResponse, setMovieResponse] = useState<MovieResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const params = {
      page: activePage,
      linesPerPage: 10
    }

    setIsLoading(true);
    makeRequest({ url: '/movies', params })
      .then(response => setMovieResponse(response.data))
      .finally(() => { setIsLoading(false);})
  }, [activePage]);

  return (
    <>
    <Navbar />
    <div className="catalog-container">
      <div className="catalog-search card-base border-radius-10">

      </div>
      <div className="catalog-movies">
      {isLoading ? <MovieCardLoader /> : (
        movieResponse?.content.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
             <MovieCard movie={movie} />
          </Link>
        ))
      )}
      </div>
      {movieResponse && (
        <Pagination
          totalPages={movieResponse?.totalPages}
          activePage={activePage}
          onChange={page => setActivePage(page)}
          />
      )}   
    </div>
    </>
  )

}

export default Catalog;
