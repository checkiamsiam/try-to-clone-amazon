import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/banner-image.jpg'
import './Banner.css'

const Banner = () => {

  return (
    <div className='banner-container'>
      <div className="left-title">
          <p className='sale'>Grand sale festival ongoing !!</p>
          <h1 className='banner-title'>New Collection For This Season</h1>
          <p>Discover all the new arrivals of ready-to-wear collection.</p>
          <button className='shop-btn'><Link className='shop-btn-link' to='/shop'>Shop Now</Link></button>
      </div>
      <div className="right-photo">
        <img className='banner-img' src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;