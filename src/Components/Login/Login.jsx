import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../Firebase/Firebase.init';

const Login = () => {
    const [user,setUser]=useState({})
    const googleProvider = new GoogleAuthProvider();
    const auth=getAuth(app)
    const handlegoogleSignin=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const loginUser=result.user
            console.log(loginUser)

            setUser(loginUser)
        })
        .catch(error=>{
            console.log('error',error.message)
        })

    }
    return (
        <div>
            <h1>Login part</h1>
            <button onClick={handlegoogleSignin}>Sign in With Google</button>
            <h1>User Name:{user.displayName} </h1>
            <img src={user.photoURL} alt="" />
            <h1>User Name:{user.email} </h1>
        </div>
    );
};

export default Login;