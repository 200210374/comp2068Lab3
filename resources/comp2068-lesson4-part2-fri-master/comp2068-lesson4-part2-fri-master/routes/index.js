var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Lesson 4',
    message: 'It is time for a break!'
  });
});

/* GET random number page */
router.get('/random', function(req, res, next) {
  // calculate a random number
  var someNumber = Math.random();

  // load the view and pass the title and number
  res.render('random', {
    title: 'Random Number',
    randomNumber: someNumber
  })
});

module.exports = router;
