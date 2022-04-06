import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart/Cart';
import Product from './Product/Product';
import './Shop.css';

const Shop = () => {
  const addToLocal = dataInObject => localStorage.setItem('selected' , dataInObject);

  const [products, setProducts] = useState([]);
  const [chosenItem, setChosenItem] = useState([]);
  useEffect(() => {
    fetch('fake-data.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  useEffect(()=>{
    const objectChosen = chosenItem;
    const chosenStringify = JSON.stringify(objectChosen);
    addToLocal(chosenStringify);
   },[chosenItem]);
   
 
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
        <Cart items={chosenItem} empty={setChosenItem}>
          <Link className='order-link' to='/order'>Order Preview</Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;