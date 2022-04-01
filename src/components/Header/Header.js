import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className="title"> <Link to='/'><img  src={logo} alt="" /></Link></div>
      <div className="nav">
        <nav>
          <Link className='nav-link' to="/">Home</Link>
          <Link className='nav-link' to="/shop">Shop</Link>
          <Link className='nav-link' to="/order">Order</Link>
          <Link className='nav-link' to="/inventory">Manage Inventory</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;