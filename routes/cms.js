var express = require('express');
var user = require('./../controllers/cms/userController')
var router = express.Router();

// user
router.post('/user/login', user.login)

module.exports = router;
