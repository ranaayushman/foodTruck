import React, { useState } from "react";
import "../styles/Cart.css";
import Checkout from "./Checkout";

const Cart = ({ cart, removeFromCart }) => {
  const [notification, setNotification] = useState("");

  const handleRemove = (idMeal, name) => {
    removeFromCart(idMeal);
    setNotification(`${name} removed from cart`);
    setTimeout(() => setNotification(""), 2000);
  };

  return (
    <div className="cart-container">
      {notification && <div className="notification">{notification}</div>}

      <h2 className="cart-title">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        <div className="cart-grid">
          {cart.map((item) => (
            <div key={item.idMeal} className="cart-item">
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="cart-image"
              />
              <h4>{item.strMeal}</h4>
              <p className="cart-meta">
                {item.strCategory} • {item.strArea}
              </p>
              {/* <button
                onClick={() => handleRemove(item.idMeal, item.strMeal)}
                className="cart-button"
              >
                Remove
              </button> */}
            </div>
          ))}
        </div>
      )}
      <Checkout />
    </div>
  );
};

export default Cart;
