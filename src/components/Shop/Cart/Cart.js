import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight , faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = ({items , empty}) => {
  let total = 0;
  let shipping = 0;
 for(const item of items){
  total = total + item.price;
  shipping = shipping + item.shipping;
 }
 let tax = parseInt(total * 0.05);
 let grandTotal = total + shipping + tax ;


  return (
    <div className='cart-full-component'>
      <div className="cart-body">
        <h2 className='heading-of-cart'>Shopping Cart</h2>
        <div className="selected-item">
          <p>Selected Items : {items.length}</p>
          <p>Total Price : $ {total}</p>
          <p>Shipping Charge : $ {shipping}</p>
          <p>Tax : $ {tax}</p>
          <h4>Grand Total : $ {grandTotal}</h4>
          <button className='btn-success'>Preview <FontAwesomeIcon icon={faArrowRight} /></button> <br />
          <button onClick={()=> empty([])} className='btn-danger'>Clear Cart   <FontAwesomeIcon icon={faTrash} /></button>
        </div>
      </div>
    </div>
  );
};

export default Cart;