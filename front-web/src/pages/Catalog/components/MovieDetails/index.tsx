import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './styles.scss';
import { Movie } from 'core/types/types';
import { makePrivateRequest } from 'core/utils/request';
import Navbar from 'core/components/Navbar';
import ButtonLogout from 'core/ButtonLogout';
import { getSessionData, isMember } from 'core/utils/auth';
import history from 'core/utils/history';
import { toast } from 'react-toastify';
import MovieCardDetails from './components/MovieCardDetails/';
import ReviewCard from './components/ReviewCard';
import { useForm } from 'react-hook-form';
import MovieDetailsLoaders from '../Loaders/MovieDetailsLoader';

type ParamsType = {
    movieId: string;
}

type FormState = {
    text: string;
    user: {
        id: number;
    };
    movieId: number;
}

const MovieDetails = () => {
    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, errors } = useForm<FormState>();

    const getMovie = useCallback(() => {
        setIsLoading(true);
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(res => setMovie(res.data))
            .finally(() => setIsLoading(false));
    }, [movieId])

    useEffect(() => {
        getMovie();
    }, [getMovie]);

    const onSubmit = (data: FormState) => {
        const dataUser = getSessionData();
        data = { ...data, user: { id: dataUser.userId }, movieId: Number(movieId) }
        makePrivateRequest({ method: 'POST', url: '/reviews', data: data })
            .then(() => {
                history.push(`/movies/${movieId}`);
                toast.warning('Review salvo com sucesso!');
                getMovie();
            })
            .catch(() => toast.error('Erro ao salvar o review!'));
    }

    return (
        <>
            <Navbar>
                <ButtonLogout />
            </Navbar>
            <div className="movie-details-container">

                <div className="movie-details-content">
                    {isLoading ?
                        <MovieDetailsLoaders />
                        :
                        movie &&
                        <>
                            <MovieCardDetails movie={movie} />
                            <form
                                className="movie-details-save-review-content"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <textarea
                                    className="form-control movie-details-save-review-input"
                                    rows={3}
                                    placeholder="Deixe sua avaliação aqui"
                                    name="text"
                                    ref={register({ required: true, validate: (value) => { return !!value.trim() } })}
                                />
                                {errors.text && <div className="invalid-input d-block">Campo inválido</div>}
                                <button
                                    className="movie-details-save-review-btn btn btn-primary"
                                    disabled={!isMember()}
                                >
                                    <h3 className="movie-details-save-review-btn-text">SALVAR AVALIAÇÂO</h3>
                                </button>
                            </form>
                            <div className="movie-details-reviews-list-content">
                                {movie?.reviews?.map(review => <ReviewCard review={review} key={review.id} />)}
                            </div>
                        </>
                    }
                </div>

            </div>
        </>
    );
};

export default MovieDetails;