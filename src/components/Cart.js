import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";
import "./Cart.css";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  if (cartItems.length === 0) {
    return <p>Your cart is empty</p>;
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div className="cart-item-details">
            <p>{item.title}</p>
            <p>${item.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
          <button onClick={() => handleRemoveFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
