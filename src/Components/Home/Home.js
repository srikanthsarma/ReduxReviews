import React, { useEffect } from 'react';
import './Home.scss';
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch, useSelector } from 'react-redux';
import { asyncFetchMovies, asyncFetchShows, getSearchTerm} from '../../Features/Movies/MoviesSlice';


function Home() {
    const dispatch = useDispatch();
    const searchText = useSelector(getSearchTerm);


    useEffect(() => {
        dispatch(asyncFetchMovies(searchText));
        dispatch(asyncFetchShows(searchText));
    }, [dispatch, searchText])


    return (
        <div className='Home'>
            <MovieListing></MovieListing>
        </div>
    )
}

export default Home