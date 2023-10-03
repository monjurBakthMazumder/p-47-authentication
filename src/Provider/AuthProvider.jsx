import React, { createContext, useEffect, useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GithubAuthProvider, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../config/firebaseConfig';


export const AuthContext = createContext(null);


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)


    //google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    //github login
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }

    // create user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // signIn user
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Reset Password
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // to sign out user
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    // send email verification 
    const sendEmailVerification = () => {
        sendEmailVerification(user)
    }
    // using observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
            console.log(user);
       });
        return () => {
            unSubscribe()
        }
    }, [])
    const authentication = {
        googleLogin,
        createUser,
        signIn,
        logOut,
        user,
        loading,
        resetPassword,
        githubLogin,
        handleUpdateProfile
    }
    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;