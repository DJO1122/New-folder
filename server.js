// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Mock product data
const products = [
  { id: 1, name: 'Product 1', price: 19.99 },
  { id: 2, name: 'Product 2', price: 29.99 },
  // Add more products here
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/checkout', (req, res) => {
  // Handle the checkout process (payment, order creation, etc.)
  // This is where you would integrate with a payment gateway
  res.json({ success: true, message: 'Order placed successfully' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
