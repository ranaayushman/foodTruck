import React, { useState } from "react";
import useFoods from "../hooks/useFoods";
import "../styles/Foods.css";

const Foods = ({ addToCart }) => {
  const { foods, loading, error } = useFoods();
  const [notification, setNotification] = useState("");

  const handleAddToCart = (food) => {
    if (addToCart) {
      addToCart(food);
      setNotification(`${food.strMeal} added to cart`);

      // Clear the notification after 2 seconds
      setTimeout(() => setNotification(""), 2000);
    }
  };

  if (loading) return <p>Loading foods...</p>;
  if (error) return <p>Error: {error}</p>;
  if (foods.length === 0) return <p>No foods found.</p>;

  return (
    <div className="foods-container">
      {notification && <div className="notification">{notification}</div>}

      <h2 className="foods-title">Our Dishes</h2>
      <div className="foods-grid">
        {foods.map((food) => (
          <div key={food.idMeal} className="food-card">
            <img
              src={food.strMealThumb}
              alt={food.strMeal}
              className="food-image"
            />
            <h4>{food.strMeal}</h4>
            <p className="food-meta">
              {food.strArea} • {food.strCategory}
            </p>
            <button
              onClick={() => handleAddToCart(food)}
              className="food-button"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
