import React from 'react';
import './styles.scss';
import MovieInfo from './components/MovieInfo';
import Comment from './components/Comment';
import Review from './components/Review';

const MovieDetails = () => {

  return (
    <div>
      <div className="movie-details-container">
        <MovieInfo />
      </div>
      <div>
        <Comment />
      </div>
      <div>
        <Review />
      </div>
    </div>
  );
};

export default MovieDetails;