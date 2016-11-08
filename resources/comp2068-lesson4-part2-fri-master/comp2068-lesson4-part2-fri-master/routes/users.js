var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');

  // load a users view instead
  var userList = ['Harsh', 'Prashant', 'Mahesh', 'Jacob', 'Wolfgar'];

  res.render('users', { title: 'User List',
    users: userList
  });
});

module.exports = router;
