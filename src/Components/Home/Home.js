import React, { useEffect } from 'react';
import './Home.scss';
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch, useSelector } from 'react-redux';
import { asyncFetchMovies, asyncFetchShows, getSearchTerm, getUserName } from '../../Features/Movies/MoviesSlice';


function Home() {
    const dispatch = useDispatch();
    const searchText = useSelector(getSearchTerm);
    const userName = useSelector(getUserName);


    // const userName = useSelector(getUserName) || "srikanth";


    useEffect(() => {
        dispatch(asyncFetchMovies(searchText));
        dispatch(asyncFetchShows(searchText));
    }, [dispatch, searchText])


    return (
        <div className='Home'>
            <div className='welcome'>
                {
                    (userName) ? <h3>Welcome <span>{userName}!</span></h3> : null
                }
                <p>Here are some search results for <span>{searchText}</span></p>
            </div>
            <MovieListing></MovieListing>
        </div>
    )
}

export default Home