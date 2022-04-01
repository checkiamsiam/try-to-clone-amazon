import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import Product from './Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [chosenItem, setChosenItem] = useState([]);
  useEffect(() => {
    fetch('fake-data.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [chosenItem]);


 
  const handleEvent = (item) => {
    // if (chosenItem.indexOf(item) !== -1) {
    //   return;
    // } else {
      const objectChosen = {chosenItem};
      const chosenStringify = JSON.stringify(objectChosen);
      sessionStorage.setItem('selected' , chosenStringify)
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