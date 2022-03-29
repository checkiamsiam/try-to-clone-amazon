import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({pro , click}) => {
  const { name, img, price , ratings ,stock} = pro;
  return (
    <div className='card-container'>
      <div className="image">
        <img className='zoom-img' src={img} alt="" />
      </div>
      <div className="details-primary">
        <h4>{name}</h4>
        <h5 className='price'>Price: <span className='tk'>$</span> {price}</h5>
      </div>
      <div className="details-secondary">
        <p>Rating: {ratings} stars</p>
        <p>Stokes: {stock} left</p>
      </div>
      <div onClick={click} className="add-btn">
        Add To Cart    <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    </div>
  );
};

export default Product;