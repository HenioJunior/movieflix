import React from 'react';
import { useParams } from 'react-router-dom';
import './styles.scss';

type ParamsType = {
  movieId:string;
}

const MovieDetails = () => {
  const { movieId } = useParams<ParamsType>();
  console.log(movieId);
  return (
    <div className="movie-details-container">
      <h1>Details</h1>
    </div>
  );
};

export default MovieDetails;