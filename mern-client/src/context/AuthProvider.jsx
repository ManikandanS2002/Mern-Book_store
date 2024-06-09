import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, 
  getAuth, onAuthStateChanged, signInWithEmailAndPassword, 
  signInWithPopup, signOut, updateCurrentUser } from "firebase/auth";
import app from '../Firebase/firebase.config';

const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
      setLoading(true)
      return signInWithPopup(auth,googleProvider)
    }

    const login = (email,password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
      return signOut(auth)
    }  
    
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log(currentUser);
        setUser(currentUser)
        setLoading(false)
      });
      return () => {
        return unSubscribe();
      }
    },[])
    const authInfo = {
      user,
      createUser,
      loginWithGoogle,
      loading,
      login,
      logOut
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export {AuthProvider} 
export default AuthContext