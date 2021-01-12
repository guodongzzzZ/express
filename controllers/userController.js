let dbConfig = require('./../utils/dbconfig')

/**
 * 获取用户列表
 */
var getList = (req, res) => {
  let sql = 'select * from user'
  let sqlArr = []
  let callBack = (err, data) => {
    if (err) {
      console.log('连接出错')
    } else {
      res.send({
        'list': data
      })
    }
  }
  dbConfig.sqlConnect(sql, sqlArr, callBack)
}

module.exports = {
  getList
}