import React from 'react';
import { useNavigate } from 'react-router-dom';
import './signout.css';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Signout = () => {
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth)
    .then(() => {
      navigate('/login')
    })
  }

  return (
    <div className='signout-container'>
      <h1>Do you want to sign out of this?</h1>
      <button onClick={()=> navigate('/')} className='login'>NO , Return home</button>
      <button onClick={handleSignout} className='login sign-out-btn'>Yes , Sign out</button>
    </div>
  );
};

export default Signout;