import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {cart.map((item) => (
            <div
              key={item.idMeal}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                width: "220px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
              />
              <h4>{item.strMeal}</h4>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>
                {item.strCategory} • {item.strArea}
              </p>
              <button
                onClick={() => removeFromCart(item.idMeal)}
                style={{
                  marginTop: "8px",
                  padding: "8px 12px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
