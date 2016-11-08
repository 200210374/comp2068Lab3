var express = require('express');
var router = express.Router();

/* GET HOME PAGE */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Lesson 6',
    message: 'CRUD with MongoDB - Part 2'
  });
});

module.exports = router;
