import React, { useState } from 'react';
import './SignUp.scss';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../FirebaseConfig';
import { addUserName } from '../../Features/Movies/MoviesSlice';
import { useDispatch } from 'react-redux';


function SignUp() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navTo = useNavigate();
  const dispatch =useDispatch();

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(addUserName(userName));
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then(() => {
          navTo('/')
      })
      .catch((error) => {
        alert(error);
      });

  }

  return (
    <div className='SignUpPageContainer' >
      <h1><span>Create</span> Account</h1>
      <form onSubmit={handleSignUp} className='SignUpPage'>
        <input
          type='text'
          placeholder='Enter Your Name'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          autoComplete='Name'
          required
        ></input>
        <input
          type='email'
          placeholder='Enter Your Email'
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          autoComplete='email'
          required
        ></input>
        <input
          type='password'
          placeholder='Enter Your Password'
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          autoComplete='current-password'
          required
        ></input>
        <button type='submit'>SIGN UP</button>
      </form>
      <div className='signin'>Have an account? <Link className='signin link' to='/'>LOG IN</Link></div>
    </div>
  )
}

export default SignUp