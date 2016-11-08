var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/players', function(req, res, next) {
  res.render('players', { title: 'players' });
});

module.exports = router;
