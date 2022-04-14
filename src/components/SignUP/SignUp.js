import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  


  if (loading) {
    return (<div className='full-container'>
      <div className="form">
        <form className='form-box'>
          <i>loading......</i>
        </form>
      </div>
    </div>)
  };


  const handleEmailPasswordSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password)
    
  }
  const handleGoogleSignup = () => {
    signInWithGoogle()
  }

 

  return (
    <div className='full-container'>
      <div className="form">
        <form className='form-box' onSubmit={handleEmailPasswordSignup} >
          <h1 className='login-title'>Sign Up</h1>
          <div className="form-group">
            <label className='label' htmlFor="email">Email:</label> <br />
            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="" required/>
          </div>
          <div className="form-group">
            <label className='label' htmlFor="password">Password:</label> <br />
            <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="" required/>
          </div>
          <div className="form-group">
            <label className='label' htmlFor="password">Re-Type Password:</label> <br />
            <input onChange={(e) => setRePassword(e.target.value)} type="password" name="password" id="" required />
          </div>
          <input className='login-btn' type="submit" value="Sign Up" />
          <p className='ask-to-signup'>Already have account? <br /><Link className='go-to-signup' to='/login'>Log in</Link></p>
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
              Sign Up With Google
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;