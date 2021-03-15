import React from 'react';
import './styles.scss';
import MovieInfo from './components/MovieInfo';
import Comment from './components/Comment';
import Review from './components/Review';
import { useParams } from 'react-router';

type ParamsType = {
  movieId: string;
}

const MovieDetails = () => {
  const { movieId } = useParams<ParamsType>();

  return (
    <div>
      <div className="movie-details-container">
        <MovieInfo />
      </div>
      <div>
        <Comment  id={movieId}/>
      </div>
      <div>
        <Review />
      </div>
    </div>
  );
};

export default MovieDetails;