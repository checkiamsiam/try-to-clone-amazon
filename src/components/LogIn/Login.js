import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import auth from '../../firebase.init';
import {  useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading
  ] = useSignInWithEmailAndPassword(auth);
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (loading) {
    return (<div className='full-container'>
      <div className="form">
        <form className='form-box'>
          <i>loading......</i>
        </form>
      </div>
    </div>)
  };

  const handleEmailPasswordSignin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
    .then(()=>{
      navigate(from);
    })
  }
  const handleGoogleSignup = () => {
    signInWithGoogle()
    .then(()=>{
      navigate(from);
    })
  }

  return (
    <div className='full-container'>
      <div className="form">
        <form className='form-box' onSubmit={handleEmailPasswordSignin}>
          <h1 className='login-title'>Login</h1>
          <div className="form-group">
            <label className='label' htmlFor="email">Email:</label> <br />
            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="" required/>
          </div>
          <div className="form-group">
            <label className='label' htmlFor="password">Password:</label> <br />
            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="" required/>
          </div>
          <input className='login-btn' type="submit" value="LogIn" />
          <p className='ask-to-signup'>Haven't any account? <br /><Link className='go-to-signup' to='/signup'>Create first</Link></p>
          <div className='difference-creator'>
            <div className='line d-item'></div>
            <p className='d-item'>or</p>
            <div className='line d-item'></div>
          </div>
        </form>
          <div>
            <button onClick={handleGoogleSignup} className="google-signin-btn">
              <img className='google-icon' src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="" />
              <div>
                Sign in With Google
              </div>
            </button>
          </div>
      </div>
    </div>
  );
};

export default Login;