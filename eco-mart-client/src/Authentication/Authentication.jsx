import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";



export const AuthContext=createContext(null)

const Authentication = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login=( email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleUser=()=>{
        return signInWithPopup(auth, googleProvider)
    }
    // ovserver
    useEffect(()=>{
        const unsubcribe=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser);
        });return ()=>{
            return unsubcribe()
        }
    },[])

    // logout 
    const logOut=()=>{
        return signOut(auth)
    }

    const userInfo={user,loading,createUser,googleUser,logOut,login}
  return (
    <AuthContext.Provider value={userInfo}>
       {children}
    </AuthContext.Provider>
  );
};

export default Authentication;