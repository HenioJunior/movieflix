import React from 'react';
import { ReactComponent as MovieImage } from '../../../../core/assets/images/movie-image.svg';
import './styles.scss';

const MovieCard = () => (
  <div className="card-base border-radius-10 movie-card">
    <div className="movie-image">
      <MovieImage />
    </div>

    <div className="movie-info">
      <h6 className="movie-name">
        O Retorno do Rei
      </h6>
      <span className="movie-year">
        2003
      </span>
      <div className="movie-subtitle">
        O olho do inimigo está se movendo
      </div>
    </div>

  </div>


);

export default MovieCard;