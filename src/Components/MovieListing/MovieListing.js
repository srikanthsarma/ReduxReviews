import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../Features/Movies/MoviesSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';
import PageNotFound from '../PageNotfound/PageNotFound';

function MovieListing() {

    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);

    let renderMovies;
    renderMovies = (movies.Response === "True") ? (
        movies.Search.map((movie, index) =>
            (movie.Type === "movie") ? <MovieCard
                key={index}
                data={movie}
            ></MovieCard> : null
        )
    )
        : (
            <PageNotFound></PageNotFound>
        )

    let renderShows;
    renderShows = (shows.Response === "True") ? (

        shows.Search.map((show, index) =>
            <MovieCard
                key={index}
                data={show}
            ></MovieCard>
        )
    )
        : (
            <PageNotFound></PageNotFound>
        )



    return (
        <div className='HomeContainer'>
            <div className='MoviesContainer'>
                <h3>Movies</h3>
                <div className='CardContainer'>
                    {renderMovies}
                </div>
            </div>
            <div>
                <div className='ShowsContainer'>
                    <h3>Shows</h3>
                    <div className='CardContainer'>
                        {renderShows}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieListing