import React from "react";
import useFoods from "./hooks/useFoods";

const Foods = () => {
  const { foods, loading, error } = useFoods();

  if (loading) return <p>Loading foods...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Our Dishes</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {foods.map((food) => (
          <div key={food.idMeal} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
            <img src={food.strMealThumb} alt={food.strMeal} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
            <h4>{food.strMeal}</h4>
            <p>{food.strArea} - {food.strCategory}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
