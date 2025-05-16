import React from "react";
import useFoods from "../hooks/useFoods";

const Foods = ({ addToCart }) => {
  const { foods, loading, error } = useFoods();

  if (loading) return <p>Loading foods...</p>;
  if (error) return <p>Error: {error}</p>;
  if (foods.length === 0) return <p>No foods found.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Our Dishes</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {foods.map((food) => (
          <div
            key={food.idMeal}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              width: "220px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={food.strMealThumb}
              alt={food.strMeal}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
            <h4>{food.strMeal}</h4>
            <p style={{ margin: "5px 0", fontSize: "0.9rem", color: "#555" }}>
              {food.strArea} • {food.strCategory}
            </p>
            <button
              onClick={() => addToCart && addToCart(food)}
              style={{
                marginTop: "8px",
                padding: "8px 12px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
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
