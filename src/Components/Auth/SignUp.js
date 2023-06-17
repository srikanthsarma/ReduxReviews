import React, { useState } from 'react';
import './SignUp.scss';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../FirebaseConfig';


function SignUp() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navTo = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

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
      <form onSubmit={handleSignUp} className='SignUpPage'>
        <h1>Create Account</h1>
        <input
          type='email'
          placeholder='Email'
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          autoComplete='email'
          required
        ></input>
        <input
          type='password'
          placeholder='Password'
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          autoComplete='current-password'
          required
        ></input>
        <button type='submit'>SIGN UP</button>
      </form>
      <div>Have an account? <Link to='/'>LOG IN</Link></div>
    </div>
  )
}

export default SignUp