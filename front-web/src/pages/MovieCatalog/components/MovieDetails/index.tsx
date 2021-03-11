import React from 'react';
import { useParams } from 'react-router-dom';
import { ReactComponent as MovieImage } from '../../../../core/assets/images/movie-image.svg';
import './styles.scss';

type ParamsType = {
  movieId: string;
}

const MovieDetails = () => {
  const { movieId } = useParams<ParamsType>();
  console.log(movieId);
  return (
    <>
    <div className="movie-details-container">
      <MovieImage className="movie-details-image" />
      <div>
        <h1 className="movie-details-title">O retorno do rei</h1>
        <span className="movie-description-year">2003</span>
        <h3 className="movie-description-subtitle">O olho do inimigo esta se movendo</h3>
        <div className="movie-details-description">
          <p className="movie-description-text">
            O confronto final entre as forças do bem e do mal que lutam pelo controle
            do futuro da Terra Média se aproxima. Sauron planeja um grande ataque a Minas Tirith,
            capital de Gondor, o que faz com que Gandalf e Pippin partam para o local na intenção de ajudar
            a resistência. Um exército é reunido por Theoden em Rohan, em mais uma tentativa de deter as forças
            de Sauron. Enquanto isso, Frodo, Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o anel.
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