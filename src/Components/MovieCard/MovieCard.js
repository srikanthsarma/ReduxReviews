import React from 'react';
import './MovieCard.scss';
import { Link } from 'react-router-dom';

function MovieCard({ index, data }) {
    return (
        <div className='MovieCard'>
            <Link to={`/movie/${data.imdbID}`} >
                <img src={data.Poster} alt={data.Title}></img>
                <div className='CardTitle'>
                    <h4>{data.Title}</h4>
                    <p>{data.Year}</p>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard