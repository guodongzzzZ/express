/**
 * mysql 配置文件
 */
let mysql = require('mysql')
module.exports = {
  config: {
    host     : 'localhost',
    user     : 'root',
    password : 'qwerty123456',
    database : 'mytest',
    port     : '3306'
  },

  sqlConnect: function(sql, sqlArr, callBack) {
    let pool = mysql.createPool(this.config)

    pool.getConnection((err, connect) => {
      if (err) {
        console.log('连接失败')
        return
      }
      console.log('数据库连接成功')
      // 事件驱动回调
      connect.query(sql, sqlArr, callBack)
      // 释放连接
      connect.release()
    }) 
  }
}