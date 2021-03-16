import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Movie } from 'core/types/Movies';
import { makePrivateRequest } from 'core/utils/request';
import { Link } from 'react-router-dom';
import MovieDetailsLoaders from '../../components/Loaders/MovieDetailsLoader';
import MovieInfo from './components/MovieInfo';
import MovieCommentLoader from '../Loaders/MovieCommentLoader';
import Comment from './components/Comment';
import Avaliation from './components/Avaliation';
import './styles.scss';
import Navbar from 'core/components/Navbar';
import ButtonLogout from 'core/ButtonLogout';


type ParamsType = {
    movieId: string;
}

const MovieDetails = () => {
    const { movieId } = useParams<ParamsType>();
    const [movieResponse, setMovieResponse] = useState<Movie>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(response => {
                setMovieResponse(response.data);
            })
            .finally(() => setIsLoading(false));
    }, [movieId])

    return (
        <>
            <Navbar>
                <ButtonLogout />
            </Navbar>
            {isLoading ? <MovieDetailsLoaders /> : (
                <MovieInfo />
            )}
            {  isLoading ? <MovieCommentLoader /> : (
                <Comment id={movieId} />
            )}
            <div className="avaliations-container">
                {movieResponse?.reviews.map(review => (
                    <Avaliation
                        key={review.id}
                        textReview={review.text}
                        autorReview={review.userName}
                    />
                ))}
            </div>
        </>
    );
};

export default MovieDetails;