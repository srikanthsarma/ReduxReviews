import React, { useEffect } from 'react';
import './MovieDetails.scss';
import { icon_film, icon_thumbsup, icon_star } from '../../Common/icons';
import { useSelector } from 'react-redux';
import { getAllDetails, asyncFetchDetails, removeMovies } from '../../Features/Movies/MoviesSlice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

function MovieDetails() {
    const { imdbID } = useParams();
    const dispatch = useDispatch();
    const details = useSelector(getAllDetails);

    useEffect(() => {
        dispatch(asyncFetchDetails(imdbID));

        return (() => {
            dispatch(removeMovies());
        });
    }, [dispatch, imdbID]);


    let showDetails;
    showDetails = (details.Response === "True") ? (
        <div className='MovieDetails'>
            <div className='poster'>
            <img src={details.Poster} alt={details.Title} ></img>
            </div>
            <div className='textDetails'>
                <h1>{details.Title}</h1>
                <div className='ratings'>
                    <span>{icon_film} {details.Rated} </span>
                    <span>{icon_thumbsup} {details.imdbVotes} </span>
                    <span>{icon_star} {details.imdbRating} </span>
                </div>
                <h5>Released on <span>{details.Released}</span></h5>
                <p>{details.Plot}</p>
                <br />
                <p>Genres : {details.Genre}</p>
                <p>Runtime : {details.Runtime}</p>
                <p>Actors : {details.Actors} </p>
                <p>Language : {details.Language}</p>
                <p>Director : {details.Director}</p>
                <p>Writer : {details.Writer}</p>
                <p>Awards : {details.Awards} </p>
            </div>
        </div>
    )
        : (
            <h1 className='Loading'>LOADING...</h1>

        )

    return (
        <div className='movieDetailContainer' >
            {showDetails}
        </div>
    )
}

export default MovieDetails