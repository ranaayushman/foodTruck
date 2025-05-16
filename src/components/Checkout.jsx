import React from "react";
import "../styles/Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout-container">
      <h3 className="checkout-title">Checkout</h3>

      <form className="checkout-form">
        <div className="checkout-field">
          <label>Name</label>
          <input type="text" placeholder="John Doe" />
        </div>

        <div className="checkout-field">
          <label>Email</label>
          <input type="email" placeholder="john@example.com" />
        </div>

        <div className="checkout-field">
          <label>Delivery Address</label>
          <textarea
            rows="3"
            placeholder="123 Main St, City, Country"
          ></textarea>
        </div>

        <div className="checkout-field">
          <label>Payment Method</label>
          <select>
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>Cash on Delivery</option>
          </select>
        </div>

        <button type="submit" className="checkout-button" disabled>
          Proceed to Pay
        </button>
        <p className="checkout-note">(Checkout is currently disabled)</p>
      </form>
    </div>
  );
};

export default Checkout;
