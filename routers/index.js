const express = require('express');
const router = express.Router();
const db = require('../services/api');

router.get('/api/products', db.getProducts);
router.get('/api/products/:id', db.getProduct);
router.post('/api/products', db.createProduct);
router.put('/api/products/:id', db.editProduct);
router.delete('/api/products/:id', db.deleteProduct);

module.exports = router;
