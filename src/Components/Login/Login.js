import React from 'react';
import './Login.css';
import useFirebase from '../../UseFirebase/UseFirebase';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import app from './../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const auth = getAuth(app);
    const { signInWithGoogle } = useFirebase();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // -------redirect navigation part---------------
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || "/";
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            });
    }
    // -----------------------------------------------

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleFormSubmit = (e) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
            })
        e.preventDefault();
    }
    return (
        <div className='parent-div'>
            <form>
                <h2 className='title'>LOGIN</h2>
                <div className='input-field'>
                    <input onBlur={handleEmail} type="email" placeholder='Your email' required />
                    <input onBlur={handlePassword} type="password" placeholder='Your password' required />
                </div>
                <div className='btn'>
                    <button onClick={handleFormSubmit}>Login</button>
                    <button onClick={handleSignInWithGoogle}>continue with google</button>
                </div>
            </form>
        </div>
    );
};

export default Login;