import React from 'react';
import './MovieCard.scss';
import { Link } from 'react-router-dom';

function MovieCard({ index, data }) {
    return (
        <div className='MovieCard' >
            <Link to={`/movie/${data.imdbID}`} >
                <div className='poster'>
                    <img src={data.Poster} alt={data.Title}></img>
                </div>
                <div className='CardTitle'>
                    <h4>{data.Title}<span> ({data.Year})</span></h4>
                    
                </div>
            </Link>
        </div>
    )
}

export default MovieCard