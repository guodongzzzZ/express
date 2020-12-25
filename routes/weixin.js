var express = require('express');
var url = require('url');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res, next) {
  var parseObj = url.parse(req.url, true);
  request('https://api.weixin.qq.com/sns/jscode2session?appid=wxfa5e109cc962f788&secret=cee17010e63c57e3cb155701d0c6496f&js_code=' + parseObj.query.code + '&grant_type=authorization_code', function(error, response, body) {
    res.send(body)
  })
});

module.exports = router;