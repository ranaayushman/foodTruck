import { useState, useEffect } from "react";

const useFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
        if (!res.ok) {
          throw new Error("Failed to fetch foods");
        }
        const data = await res.json();
        setFoods(data.meals || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  return { foods, loading, error };
};

export default useFoods;
