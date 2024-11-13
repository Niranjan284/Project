import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [cartMessage, setCartMessage] = useState('');
  
  // Get username from state if available
  const username = location.state?.username || 'Guest';

  const products = [
    { id: 1, name: 'Watch', price: 20000, image: 'https://image.stern.de/32869272/t/4o/v5/w1440/r1.7778/-/rolex-deepsea-challenge-m126067-0001-2210jva-001.jpg' },
    { id: 2, name: 'Frame', price: 2500, image: 'https://tse1.mm.bing.net/th?id=OIP.2zet2Mn_k1Er45p4D0RWfAHaE5&pid=Api&P=0&h=180' },
    { id: 3, name: 'Personalised Gift', price: 3500, image: 'https://media2.s-nbcnews.com/j/newscms/2016_19/1085201/recipebox_674a5c9fe3abc9a3e81a0e673f59e461.fit-760w.jpg' },
    { id: 4, name: 'Boquet', price: 1500, image: 'https://wallup.net/wp-content/uploads/2019/10/629050-flowers-roses-red-bouquet-love-basket-marriage-engagement-romantice-life-happy-emotions-spring-2.jpg' }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    setCartMessage(`"${product.name}" has been added to the cart for Rs.${product.price}`);
  };

  const goToCart = () => {
    navigate('/cart', { state: { cartItems: cart } });
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Login</Link></li>
          <li><Link to="/">Signup</Link></li>
        </ul>
      </nav>

      <div className="home-header">
        <h1>Welcome, {username}!</h1>
        <p>Pick your Favorite Gift...</p>
      </div>

      {cartMessage && (
        <div className="cart-message">
          <p>{cartMessage}</p>
          <button onClick={goToCart}>Go to Cart</button>
        </div>
      )}

      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="products">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>Rs.{product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
