import React, { useState } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link} from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const Header = () => {
  const [open , setOpen] = useState(true);
  return (
    <div className='header'>
      <div className="title"> <Link to='/'><img  src={logo} alt="" /></Link></div>
      <div className="nav">
        <div onClick={()=> setOpen(!open)} className="ham-berger">
          {open ? <AiOutlineMenu/> :  <MdOutlineRestaurantMenu/>}
       
        </div>
        <nav className={`${open ? 'none' : 'block'}`}>
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