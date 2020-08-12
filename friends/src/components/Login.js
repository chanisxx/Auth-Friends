import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {
    console.log('props',props)
    const [credentials, setCredentials] = useState(
        {username:'', password: ''}
    );
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
   
    const handleChanges = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    };

    const loginSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            axiosWithAuth()
            .post('/login', credentials)
            .then(res => {
                console.log('login success! res:', res);
                localStorage.setItem('authToken', res.data.payload);
                props.history.push('/protected');
                setIsLoading(false);
                setError(false);
            })
            .catch(err => {
                console.error('login failure! err:', err.message);
                localStorage.removeItem('authToken');
                setIsLoading(false);
                setError(true);
            })
        }, 2250)
    };

    return (
        <div>
           
             <div className='login-form'>
                <h1 className='header'>
                    Sign in
                </h1>
                <form onSubmit={loginSubmit} className='input-cont log'>
                    <label htmlFor='username'>Username</label>
                    <input
                    name='username'
                    type='text'
                    value={credentials.username}
                    onChange={handleChanges}
                    className='input'
                    />
    
                    <label htmlFor='password'>Password</label>
                    <input
                    name='password'
                    type='password'
                    value={credentials.password}
                    onChange={handleChanges}
                    className='input'
                    />
                      {isLoading ? 
                      <button className='btn'>LOADING <i class="fas fa-spinner fa-pulse"></i></button>
                      :<button className='btn'>SIGN IN</button>}
                      {error ? <p className='error-login'>Wrong credentials, Try again.</p> : null}
                </form>
            </div>
            
        </div>
    );
};

export default Login;