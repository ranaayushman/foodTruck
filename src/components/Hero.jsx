import React from "react";
import "../styles/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to FoodieHub</h1>
        <p>Delicious meals delivered to your doorstep.</p>
        <Link to="/foods" className="hero-btn">
          Explore Our Menu
        </Link>
      </div>
    </section>
  );
};

export default Hero;
