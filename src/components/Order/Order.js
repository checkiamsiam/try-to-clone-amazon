import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Choosen from '../Choosen/Choosen';
import Cart from '../Shop/Cart/Cart';
import './Order.css'

const Order = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const chosenItem = localStorage.getItem('selected');
    setItems(JSON.parse(chosenItem))
  }, []);
  
  const handleDetete = product => {
    const rest = items.filter(pd => pd.id !== product.id);
    setItems(rest);
  };

  const deleteFromStorage = () => {
    setItems([]);
  };
  return (
    <div>
      <div className="order-container">
        <div className="items">
          {items.map(item => <Choosen key={item.id} event={handleDetete} data={item}></Choosen>)}
        </div>
        <Cart items={items} empty={deleteFromStorage}>
          <Link to='/shipping'>Proceed Checkout</Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;