import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { app } from '../FIrebase/firebase.config';
import axios from 'axios';


export const AuthContext = createContext();

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

const UserContext = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuthProvider);
    }

    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubAuthProvider);
    }

    const resetEmail = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }
    // const resendVerificationEmail = (email) => {
    //     setLoading(true);
    //     return sendEmailVerification(auth,email);
    // }




    const logOut = () => {
        return signOut(auth);
    }

    //observe auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            console.log('auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
            //if user exist then issue a token
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log('token response', res.data);
                    })
            }
            else {
                axios.post('http://localhost:5000/logout', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    })
            }
        })

        return () => {
            unsubscribe();
        }

    }, [])


    // const user = {email: 'User-X'}
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading,
        signInWithGoogle,
        signInWithGithub,
        resetEmail,
        // resendVerificationEmail,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;