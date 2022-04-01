import React from 'react';
import Cart from '../Shop/Cart/Cart';

const Order = () => {
  const chosenItem = sessionStorage.getItem('selected');
  const items = JSON.parse(chosenItem);
  const deleteFromStorage = (pera) => {
    items.chosenItem = pera;
  }
  return (
    <div>
      <h2>order section</h2>
      <Cart items={items.chosenItem} empty={deleteFromStorage}></Cart>
    </div>
  );
};

export default Order;