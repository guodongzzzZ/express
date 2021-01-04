var express = require('express');
var user = require('./../controllers/userController')
var router = express.Router();

/* GET users listing. */
router.get('/user_list', function(req, res, next) {
  var sql = 'SELECT * FROM user'
  connection.query(sql, function(err, data) {
    res.send(data);
  })
  
})

module.exports = router;
