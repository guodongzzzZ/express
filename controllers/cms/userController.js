let dbConfig = require('./../../utils/dbconfig')
var url = require('url');
/**
 * 获取用户列表
 */
var login = (req, res) => {
  console.log(req.query)
  let sql = `select * from cms_users where user_login = "${req.query.username}"`
  let sqlArr = []
  let callBack = (err, data) => {
    if (err) {
      console.log('连接出错')
    } else {
      if (data[0] && req.query.password == data[0].user_password) {
        send(res, 0, {
          status: true
        }, '正常')
      } else {
        send(res, 0, {
          status: false
        }, '账号或密码错误')
      }
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callBack)
}

function send(res, code, data, message) {
  res.send({
    code,
    data,
    message: message ? message : ''
  })
}

module.exports = {
  login
}