import React, { useState } from 'react';

const Shiping = () => {
  const [name , setName] = useState('');
  const [address , setAddress] = useState('');
  const [phone , setPhone] = useState('');
  const [email, setEmail] = useState('');

  const data = {name , address , phone , email};
  return (
      <div className="form">
        <form className='form-box' >
          <h1 className='login-title'>Shipping Information...</h1>
          <div className="form-group">
            <label className='label' htmlFor="name">Name:</label> <br />
            <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="" required />
          </div>
          <div className="form-group">
            <label className='label' htmlFor="email">Email:</label> <br />
            <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="" required />
          </div>
          <div className="form-group">
            <label className='label' htmlFor="adresss">Address</label> <br />
            <input onChange={(e) => setAddress(e.target.value)} type="text" name="adresss" id="" required/>
          </div>
          <div className="form-group">
            <label className='label' htmlFor="phone">Phone Number:</label> <br />
            <input onChange={(e) => setPhone(e.target.value)} type="text" name="Phone" id="" required/>
          </div>
          <input className='login-btn' type="submit" value="Add Shipping" />
        </form>
      
    </div>
  );
};

export default Shiping;