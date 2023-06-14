import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import app from '../firebase/firebase.config';
// import { set } from 'react-hook-form';
// import axios from 'axios';
import { getAuth } from "firebase/auth";
import axios from 'axios';
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
const googleProvider = new GoogleAuthProvider();

const createUser = (email, password) =>{
setLoading(true)
return createUserWithEmailAndPassword(auth,email,password)
}

 const signInUser = (email, password) =>{
setLoading(true)
 return signInWithEmailAndPassword(auth, email, password)
} 

const googleSignIn = () =>{
setLoading(true)
 return signInWithPopup(auth, googleProvider);
}

const updatePhoto = (name , photo) =>{
setLoading(true)
return updateProfile(auth.currentUser,{
displayName:name, photoURL:photo
})
}

const logOut = () =>{
setLoading(true)
return signOut(auth)
}


useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,currentUser=>{
setUser(currentUser)
// get and set token
if(currentUser){
axios.post(`https://fashion-design-server.vercel.app/jwt`,{email: currentUser.email})
.then(data=>{
console.log(data.data.token)
localStorage.setItem('access-token',data.data.token);
setLoading(false)
})
}
else{
localStorage.removeItem('access-token')
}
// setLoading(false)
})
return ()=>{

return unsubscribe()
}
},[])

const authInfo = {
user,
loading,
createUser,
signInUser,
googleSignIn,
updatePhoto,
logOut
}
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
{children}
</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;