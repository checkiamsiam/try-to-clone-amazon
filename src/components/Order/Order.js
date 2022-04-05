import { useEffect, useState } from 'react';
import Choosen from '../Choosen/Choosen';
import Cart from '../Shop/Cart/Cart';
import './Order.css'

const Order = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const chosenItem = localStorage.getItem('selected');
    setItems(JSON.parse(chosenItem))
  }, [])
  const deleteFromStorage = (pera) => {
    const blankPage = '[]';
    localStorage.setItem('selected', blankPage);
  }
  return (
    <div>
      <div className="order-container">
        <div className="items">
          {items.map(item => <Choosen key={item.id} data={item}></Choosen>)}
        </div>
        <Cart items={items} empty={deleteFromStorage}></Cart>
      </div>
    </div>
  );
};

export default Order;