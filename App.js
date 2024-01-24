// App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  const checkout = () => {
    // This is where you would integrate with the backend to handle the checkout process
    fetch('http://localhost:5000/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cart }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        setCart([]);
        setTotal(0);
      });
  };

  return (
    <div className="App">
      <header>
        <h1>Simple E-commerce</h1>
      </header>
      <main>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </main>
      <aside>
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
          ))}
        </ul>
        <p>Total: ${total.toFixed(2)}</p>
        <button onClick={checkout}>Checkout</button>
      </aside>
    </div>
  );
}

export default App;
