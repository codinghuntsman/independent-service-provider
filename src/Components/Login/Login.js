import React from 'react';
import './Login.css';
import useFirebase from '../../UseFirebase/UseFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div className='parent-div'>
            <form>
                <h2 className='title'>LOGIN</h2>
                <div className='input-field'>
                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Your password' required />
                </div>
                <div className='btn'>
                    <button>Login</button>
                    <button onClick={signInWithGoogle}>Login with google</button>
                </div>
            </form>
        </div>
    );
};

export default Login;