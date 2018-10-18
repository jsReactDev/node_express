const express = require('express');
const router = express.Router();
const db = require('../services/api');

router.get('/api/products', db.getList);
router.get('/api/products/:id', db.getOne);
// router.post('/api/products', db.postList);
// router.put('/api/products/:id', db.putOne);
// router.delete('/api/products/:id', db.deleteOne);

module.exports = router;
