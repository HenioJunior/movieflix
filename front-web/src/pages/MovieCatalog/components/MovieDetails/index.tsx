import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from '../../../../core/types/Movies';
import { makeRequest } from '../../../../core/utils/request';
import './styles.scss';

type ParamsType = {
  movieId: string;
}


const MovieDetails = () => {
  const { movieId } = useParams<ParamsType>();
  const [movie, setMovie] = useState<Movie>();
  
  useEffect(() => {
    makeRequest({ url: `/movies/${movieId}` })
            .then(response => setMovie(response.data))
          }, [movieId]);
  
  return (
    <>
    <div className="movie-details-container">
    <img src={movie?.imgUrl} alt={movie?.title} className="movie-details-image" />
      <div>
        <h1 className="movie-details-title">{movie?.title}</h1>
        <span className="movie-description-year">{movie?.year}</span>
        <h3 className="movie-description-subtitle">{movie?.subTitle}</h3>
        <div className="movie-details-description">
          <p className="movie-description-text">
           {movie?.synopsis}
          </p>
        </div>
      </div>
    </div>
    <div className="comment-container">

    </div>
    <div className="avaliations-container">

    </div>
  </>
  );
};

export default MovieDetails;