require('dotenv').config();
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  res.send("Welcome to " + process.env.APP_NAME);
});

module.exports = router;
