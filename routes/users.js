var express = require('express');
var user = require('./../controllers/userController')
var router = express.Router();

/* GET users listing. */
router.get('/user_list', user.getList)

module.exports = router;
