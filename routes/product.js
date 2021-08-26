var express = require('express');
var router = express.Router();
const Product = require('../models/products.model');

router.get('/', async (req, res, next) => {
  const result = await Product.findAllLatest();
  res.json({status:1,message:"ok",data:result});
});


router.get('/detail/:id', async (req, res, next) => {
  const result = await Product.findById(req.params.id);
  res.json({status:1,message:"ok",data:result});
});


router.post('/create', async (req, res, next) => {
  await Product.create(req.body);
  res.json({status:1,message:"ok"});
});

router.post('/update', async (req, res, next) => {
  await Product.updateById(req.body.id, req.body);
  res.json({status:1,message:"ok"});
});

module.exports = router;
