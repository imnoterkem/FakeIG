import React, { useState } from 'react'
import {useHistory } from 'react-router-dom';
import { auth } from './firebase';
import ig from './ig.PNG'


const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const history=useHistory();

    const signup = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                history.push('/')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error)
            });

    }


    return (
        <>
            <div className='loginbox'>
                <div>
                    <div className='sbox'>
                        <img src={ig} alt='Instagram' />
                        <input placeholder='Phone number, username, or email' onChange={(e) => setEmail(e.target.value)} />
                        <input placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        <div className='button' onClick={() => signup()}>Log In</div>
                        <div className='line'>OR</div>
                        <div className='box'><img src='https://image.flaticon.com/icons/png/512/124/124010.png' alt='Facebook' />Log in with Facebook</div>
                        <a>Forgot password?</a>
                    </div>
                    <div className='nbox'>
                        <span>Don't have an account?</span><a href='/signup'>Sign up</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login