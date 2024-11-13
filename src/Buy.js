// Buy.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const Buy = () => {
  const location = useLocation();
  const item = location.state?.item;  // Get the item details passed from Cart.js

  return (
    <div>
      <h1>Your Product has been successfully purchased!</h1>
      {item ? (
        <div>
          <h2>Product: {item.name}</h2>
          <p>Price: Rs.{item.price}</p>
        </div>
      ) : (
        <p>No item details available.</p>
      )}
      <Link to="/home">Contiue to home page..</Link>
    </div>
  );
};

export default Buy;
