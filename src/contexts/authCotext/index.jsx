import { onAuthStateChanged } from "firebase/auth"
import {auth,initializeUser}  from "../../firebase/firebase"
const AuthContext =React.createContext()
import { useEffect } from "react"


import React from 'react'

export function AuthProvider({children}){
    const [currentUser,setCurrentUser]= useState(null)
    const [userLoggedIn,setuserLoggedIn]= useState(false)
    const [loading,setLoading]= useState(true)
    useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,intializeUser)
    return unsubscribe
},[])
async function initializeUsers(user){
    if(user){
        setCurrentUser(...user)
        setuserLoggedIn(true)
         
    }else{
        setCurrentUser(null)
        setuserLoggedIn(false)
    }
    setLoading(false)
}
const value ={
    currentUser,userLoggedIn,loading
}
return(
    <AuthContext.Provider value={value}>

        {!loading &&children}
    </AuthContext.Provider>
)
}
