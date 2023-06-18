import React, { useState } from 'react';
import './SignIn.scss';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../FirebaseConfig';


function SignIn() {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navTo = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then(() => {
        navTo('/Home');
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <div className='SignInPageContainer' >
        <h1><span>LOG</span>IN</h1>
      <form onSubmit={handleSignIn} className='SignInPage'>
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
        <button type='submit'>LOGIN</button>
      </form>
      <div className='signup'>Don't have an account? <Link className='signup link' to='/signup'>SIGN UP</Link></div>
    </div>
  )
}

export default SignIn