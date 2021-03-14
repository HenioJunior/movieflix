import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'core/types/Movies';
import { makeRequest } from 'core/utils/request';
import './styles.scss';

type ParamsType = {
  movieId: string;
}


const MovieInfo = () => {
  const { movieId } = useParams<ParamsType>();
  const [movie, setMovie] = useState<Movie>();
   
  useEffect(() => {
    makeRequest({ url: `/movies/${movieId}` })
            .then(response => setMovie(response.data))
    }, [movieId]);
  
  return (
    <>
    <div className="movie-info-container">
    <img src={movie?.imgUrl} alt={movie?.title} className="movie-info-image" />
      <div>
        <h1 className="movie-info-title">{movie?.title}</h1>
        <span className="movie-info-year">{movie?.year}</span>
        <h3 className="movie-info-subtitle">{movie?.subTitle}</h3>
        <div className="movie-info-description">
          <p className="movie-info-text">
           {movie?.synopsis}
          </p>
        </div>
      </div>
    </div>
  </>
  );
};

export default MovieInfo;