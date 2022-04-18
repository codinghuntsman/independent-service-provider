import React from 'react';
import './Login.css';
import useFirebase from '../../UseFirebase/UseFirebase';
import { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import app from './../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    // ------------------^^^^^^^^---------------------

    //---------------email verification part-----------------
    const VerifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                toast('Send verification email');
            })
    }
    //---------------^^^^^^^^^^-------------------------------

    //---------------Email reset part------------------------
    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast('send email')
            })
            .catch((error) => {
                const Error = error.message;
                console.log(Error);
            })
    }
    //----------------^^^^^^^^^^^---------------------------
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
                VerifyEmail();
            })
            .catch((error) => {
                const errorCode = error.code;
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
                    <button onClick={handlePasswordReset}>Forget password?</button>
                    <button onClick={handleSignInWithGoogle}>continue with google</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;