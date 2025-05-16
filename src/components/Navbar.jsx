import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">YDC</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/foods">Menu</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        {/* <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
