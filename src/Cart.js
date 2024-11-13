import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const location = useLocation();  // Get the cart items passed from Home
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(location.state?.cartItems || []);  // Use the passed cart items

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  // Function to handle checkout and redirect to Buy page
  const handleCheckout = () => {
    // Redirect to the Buy page and pass cart items if needed
    navigate('/buy', { state: { cartItems } });
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty....<Link to="/home">Click here to shop...</Link>.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>Rs.{item.price}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-actions">
            {/* Clicking this button will navigate to the Buy page */}
            <button onClick={handleCheckout}>Checkout</button>
            {/* Optional link to Buy page */}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
