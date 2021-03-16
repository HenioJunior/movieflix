import { Movie } from "core/types/types";
import './styles.scss';

type Props = {
  movie: Movie;
}

const MovieCardDetails = ({ movie }: Props) => {
  
  return (
    <div className="movie-details">
            <div className="movie-details-image-content">
                <img
                    src={movie.imgUrl}
                    alt={movie.title}
                    className="movie-details-image"
                />
            </div>
            <div className="movie-details-info">
                <h1 className="movie-details-title">{movie.title}</h1>
                <h3 className="movie-details-year">{movie.year}</h3>
                <h3 className="movie-details-subtitle">{movie.subTitle}</h3>
                <p className="movie-details-synopsis">{movie.synopsis}</p>
            </div>
        </div>
  );
}

  export default MovieCardDetails;