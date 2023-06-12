import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import axios from "axios";
 
export  const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading , setLoading]= useState(true)
    const googleProvider = new GoogleAuthProvider ();

    // signup or register 
   const signUp =(email , password)=>{
    setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
 }

 // login 
 const logIn =(email,password)=>{
    setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
 }

 
   // logOut 
const logOut =()=>{
    setLoading(true)
    return signOut(auth)
 }
 
 // google provider 
 const signWithGoogle =()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider )
 }
 
 const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
 }

    useEffect(()=>{
    const unSubscribed =onAuthStateChanged(auth, currentuser => {
          setUser(currentuser)
          console.log("state change" , currentuser);
          if(currentuser){
            axios.post('http://localhost:5000/jwt', {email: currentuser.email})
            .then(data =>{
                console.log(data.data.token)
                localStorage.setItem('access-token', data.data.token)
                setLoading(false);
            })
        }
        else{
            localStorage.removeItem('access-token')
        }
         

        })
        return ()=>{
          return unSubscribed()
        }
     } , [])
 
    const AuthInfo ={
        user ,
        loading ,
        signUp ,
        logIn ,
        logOut ,
        signWithGoogle ,
        updateUserProfile

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;