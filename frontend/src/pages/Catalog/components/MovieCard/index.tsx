import React from 'react';
import { Movie } from '../../../../core/types/Movie';
import './styles.scss';

type Props = {
  movie: Movie;
}

const MovieCard = ({movie}: Props) => (
  <div className="card-base border-radius-10 movie-card">
    <div className="movie-image">
      <img src={movie.imgUrl} alt={movie.title} className="movie-card-image" />
    </div>
    
    <div className="movie-info">
      <h6 className="movie-name">
      {movie.title}
      </h6>
      <span className="movie-year">
        {movie.year}
      </span>
      <div className="movie-subtitle">
        {movie.subTitle}
      </div>
    </div>
  </div>
);

export default MovieCard;