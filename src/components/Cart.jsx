import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                width: "200px",
              }}
            >
              <img
                src={`https://spoonacular.com/recipeImages/${item.id}-312x231.jpg`}
                alt={item.title}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <h4>{item.title}</h4>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
