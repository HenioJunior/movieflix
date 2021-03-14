import React from 'react';
import './styles.scss';
import MovieInfo from './components/MovieInfo';
import Comment from './components/Comment';
import Review from './components/Review';

const MovieDetails = () => {

  return (
    <div>
      <div>
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