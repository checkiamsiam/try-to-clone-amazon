import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import Product from './Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('fake-data.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);


  const [chosenItem, setChosenItem] = useState([]);
  const handleEvent = (item) => {
    // if (chosenItem.indexOf(item) !== -1) {
    //   return;
    // } else {
      setChosenItem([...chosenItem, item]);
    // }
  }
  
  return (
    <div className='shop-container'>
      <div className="product">
        {products.map(product => <Product key={product.id} pro={product} click={() => handleEvent(product)}></Product>)}
      </div>
      <div className="cart">
        <Cart items={chosenItem} empty={setChosenItem}></Cart>
      </div>
    </div>
  );
};

export default Shop;