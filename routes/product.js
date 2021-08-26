var express = require('express');
var router = express.Router();
const Product = require('../models/products.model');

/* GET home page. */
router.get('/', async (req, res, next) => {
  const result = await Product.findAllLatest();
  res.json(result);
});


router.get('/detail/:id', async (req, res, next) => {
  const result = await Product.findById(req.params.id);
  res.json(result);
});


router.get('/create', async (req, res, next) => {
  const result = await Product.findById(req.params.id);
  res.json(result);
});

router.get('/update', async (req, res, next) => {
  const result = await Product.findById(req.params.id);
  res.json(result);
});

module.exports = router;
