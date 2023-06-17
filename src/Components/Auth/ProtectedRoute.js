import React, {useState, useEffect} from 'react';
import SignIn from './SignIn';
import Home from '../Home/Home';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../FirebaseConfig';



function ProtectedRoute() {
   const [userAuth, setuserAuth] = useState(null)
   useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
         setuserAuth(user)
      })

      return () => {
         listen();
      }
   }, [userAuth])
 if (!userAuth) {
    return <SignIn></SignIn>
 }
 else {
    return <Home></Home>
 }
}

export default ProtectedRoute