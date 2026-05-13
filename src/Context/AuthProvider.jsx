import React, { useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword,  onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import { auth } from '../Firebase/Friebase.config';
import { useState } from 'react';





const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true);

    const createUser =(email, password) =>{ 
        setLoading(true)
     return  createUserWithEmailAndPassword(auth, email, password)
    } 

    const  signInUser = (email, password)=>{ 
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
        
    }  
    
    const updateUser =(updateInfo)=>{
        return updateProfile(auth.currentUser, updateInfo)

    }

    const logOut = ()=>{
        return signOut(auth);

    }



    useEffect(()=>{
        const unsubscribe  =onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        }) 
        return () => {
            unsubscribe()
        }

    })

    const authInfo = {
        createUser,
        user,
        loading,
        signInUser,
        logOut,
        setUser,
        updateUser
        

    };
    return  <AuthContext value={authInfo}>
        {children}

       </AuthContext>
    
};

export default AuthProvider;