import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <div className="cart-container"><h3>Your cart is empty</h3></div>;
  }

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h3>Your Cart</h3>
      <ul className="cart-list">
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h4>{item.title}</h4>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
              <button className="btn btn-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <h4>Total: ${totalPrice.toFixed(2)}</h4>
      </div>
      <button className="btn btn-clear" onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
