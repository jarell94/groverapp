const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Add a product
router.post('/add', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send('Product added');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
