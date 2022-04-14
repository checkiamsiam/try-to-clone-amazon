import React, { useState } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link, NavLink} from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
  const [open , setOpen] = useState(true);
  const [user] = useAuthState(auth);
  return (
    <div className='header'>
      <div className="title"> <Link to='/'><img  src={logo} alt="" /></Link></div>
      <div className="nav">
        <div onClick={()=> setOpen(!open)} className="ham-berger">
          {open ? <AiOutlineMenu/> :  <MdOutlineRestaurantMenu/>}
       
        </div>
        <nav className={`${open ? 'none' : 'block'}`}>
          <NavLink  className='nav-link' activeclassname="active" to="/">Home</NavLink>
          <NavLink className='nav-link' activeclassname="active" to="/shop">Shop</NavLink>
          <NavLink className='nav-link' activeclassname="active" to="/order">Order</NavLink>
          <NavLink className='nav-link' activeclassname="active" to="/inventory">Manage Inventory</NavLink>
          {!user ? <Link className='login' to="/login">Log In</Link> 
          :
          <Link className='login' to="/signout">Sign Out</Link>
          }
        </nav>
      </div>
    </div>
  );
};

export default Header;