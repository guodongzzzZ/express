var express = require('express')
var url = require('url');
var request = require('request')
var WXBizDataCrypt = require('./../utils/WXBizDataCrypt')

let appId = 'wxfa5e109cc962f788'
let appSecret = 'cee17010e63c57e3cb155701d0c6496f'

var router = express.Router()

/**
 * 获取微信unionId
 */
router.post('/getUnionId', function(req, res, next) {
  var parseObj = url.parse(req.url, true)
  request('https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + appSecret + '&js_code=' + parseObj.body.code + '&grant_type=authorization_code', function(error, response, body) {
    res.send(body)
  })
});

/**
 * 获取手机号
 */
router.post('/getPhoneNum', function(req, res, next) {
  request('https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + appSecret + '&js_code=' + req.body.code + '&grant_type=authorization_code', function(error, response, body) {
    var parseObj = JSON.parse(body)
    var pc = new WXBizDataCrypt(appId, parseObj.session_key)
    var data = pc.decryptData(req.body.encryptedData , req.body.iv)
    res.send(data)
  })
})

module.exports = router;