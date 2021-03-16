import { useEffect, useState } from 'react';
import { makePrivateRequest } from 'core/utils/request';
import { Genre, MovieResponse } from 'core/types/types';
import Select from 'react-select'
import './styles.scss';
import { Link } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import Pagination from './components/Pagination';
import Navbar from 'core/components/Navbar';

const Catalog = () => {
  const [movies, setMovies] = useState<MovieResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingGenre, setIsLoadingGenre] = useState(false);
  const [genres, SetGenres] = useState<Genre[]>();
  const [activePage, setActivePage] = useState(0);
  const [genre, setGenre] = useState();

  useEffect(() => {
    setIsLoading(true);
    const params = {
      page: activePage,
      size: 8,
      genreId: genre
    }
    makePrivateRequest({ url: '/movies', params })
      .then(res => {
        setMovies(res.data);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [activePage, genre]);

  useEffect(() => {
    setIsLoadingGenre(true);
    makePrivateRequest({ url: '/genres' })
      .then(res => SetGenres(res.data.concat({ name: 'Todos', id: 0 })))
      .catch(err => console.log(err))
      .finally(() => setIsLoadingGenre(false));
  }, []);

  const handleGenre = (genre: any) => {
    setGenre(genre.id);
    setActivePage(0);
  }

  return (
    <>
    <Navbar />
      <div className="movies-container">
        <div className="movies-header">
          <Select
            options={genres}
            name="genres"
            classNamePrefix="movies-header-selected"
            isLoading={isLoadingGenre}
            getOptionLabel={(option: Genre) => option.name}
            getOptionValue={(option: Genre) => String(option.id)}
            inputId="genres"
            onChange={value => handleGenre(value)}
            theme={theme => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: 'rgba(255, 199, 0, 0.2)',
                primary: '#FFC700',
              }
            })}
          />
        </div>
        {isLoading ?
          <div className="d-flex justify-content-center">
            <div className="spinner-border btn-home-spinner" role="status">
              <span className="sr-only ">Loading...</span>
            </div>
          </div>
          :
          <>
            <div className="movies-list-content">
              {
                movies?.content.map(movie =>
                  <Link to={`/movies/${movie.id}`} key={movie.id}>
                    <MovieCard movie={movie} />
                  </Link>
                )
              }
            </div>
            {
              movies &&
              <Pagination
                activePage={activePage}
                totalPages={movies.totalPages}
                onChange={page => setActivePage(page)}
              />
            }
          </>
        }
      </div>
    </>
  );
}
export default Catalog;
