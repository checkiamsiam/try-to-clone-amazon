import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
  return (
    <div className='header'>
      <div className="title"> <img src={logo} alt="" /></div>
      <div className="nav">
        <nav>
          <a href="/home">Home</a>
          <a href="/order">Order</a>
          <a href="/review">Order Review</a>
          <a href="/inventory">Manage Inventory</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;