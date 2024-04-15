import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems }) => {
  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      <h2>cart</h2>
      
      {/* {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))} */}
    </div>
  );
};

export default Cart;
