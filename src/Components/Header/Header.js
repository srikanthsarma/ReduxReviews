import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Header.scss';
import user from '../../Images/user.png';
import { Link, useNavigate } from 'react-router-dom';
import { icon_search } from '../../Common/icons';
import { asyncFetchMovies, asyncFetchShows, setSearchTerm } from '../../Features/Movies/MoviesSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth'


function Header() {

    const [userAuth, setuserAuth] = useState(null)
    const [searchText, setsearchText] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(setSearchTerm(searchText));
        dispatch(asyncFetchMovies(searchText));
        dispatch(asyncFetchShows(searchText));
        navigate('/Home')
        setsearchText('');
    }
    const userSignOut = () => {
        signOut(auth).then(() => {
            navigate('/Home')
        })
            .catch((error) => {
                console.error(error);
            })
    }

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            setuserAuth(user)
        })
        return () => {
            listen();
        }
    }, [userAuth]);

    let headerContents =
        (userAuth) ? < div className='headerContents'>
            <div className='SearchBar'>
                <form className='SearchForm' onSubmit={handleSearch}>
                    <input
                        className='SearchInput'
                        type='text'
                        placeholder='Search'
                        value={searchText}
                        onChange={e => setsearchText(e.target.value)}
                        required
                    ></input>
                    <button type='submit' className='SearchIcon'>{icon_search}</button>
                </form>
            </div>
            <div className='user'>
                <img src={user} alt='user' />
                <button onClick={userSignOut}>Sign Out</button>
            </div>
        </div >
            : null



    return (
        <div className='Header'>
            <Link to={'/Home'} className='Logo'>
                LOGO
            </Link>
            {headerContents}
        </div>
    )
}

export default Header   