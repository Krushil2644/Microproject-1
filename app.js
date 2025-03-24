const express = require('express');
const app = express();
const path = require('path');
const products = require('./data/products.json');

app.use(express.static(path.join(__dirname, 'public')));

// Route to fetch JSON data
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Serve HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
