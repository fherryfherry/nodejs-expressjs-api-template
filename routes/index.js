var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  res.send("Welcome to Shop API v1");
});

module.exports = router;
