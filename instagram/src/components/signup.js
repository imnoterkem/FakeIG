import React, { useState } from 'react'
import ig from './ig.PNG'
import { auth, db } from './firebase'
import { useHistory } from 'react-router-dom';

const SignUp = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [username, setUsername] = useState()
    const [fullname, setFullName] = useState()
    const history = useHistory()

    const signup = () => {
        if (username && email && password && fullname) {
            auth.createUserWithEmailAndPassword(email, password)
                .then((user) => {
                })
                .catch((error) => {
                    console.log(error)
                });
        }
    }

    auth.onAuthStateChanged((user) => {
        if (user) {
            db.doc(`/Users/${user.uid}`).set({
                username: username,
                fullname: fullname
            }).then(() => {
                history.push('/')
            })
        } else {
            // No user is signed in.
        }
    });

    return (
        <>
            <div className='loginbox'>
                <div>
                    <div className='sbox'>
                        <img src={ig} alt='Instagram' />
                        <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                        <input placeholder='Full Name' onChange={(e) => setFullName(e.target.value)} />
                        <input placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
                        <input placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        <div className='button' onClick={() => signup()}>Sign up</div>
                    </div>
                    <div className='nbox'>
                        <span>Have an account?</span><a href='/signin'>Log in</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp