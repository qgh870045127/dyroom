var dbs = {}
var db = require('../model/db.js')
var redis = require('redis')
var client = redis.createClient({
  auth_pass: '123456'
})
client.on('error', function(err) {
  console.log('Error :', err)
})

client.on('connect', function() {
  console.log('Redis连接成功.')
})

/**
 * 添加string类型的数据
 * @param key 键
 * @params value 值
 * @params expire (过期时间,单位秒;可为空，为空表示不过期)
 */
dbs.set = function(key, value, expire) {
  client.set(key, value, function(err, result) {
    if (err) {
      throw err
    }
    if (!isNaN(expire) && expire > 0) {
      client.expire(key, parseInt(expire))
    }
  })
}
/**
 * 查询string类型的数据
 * @param key 键
 * @param callBack(err,result)
 */
dbs.get = function(key, callback) {
  client.get(key, function(err, result) {
    if (err) {
      throw err
    }
    callback(result)
  })
}

/**
 * 查询是否存在
 * @param key 键
 * @param callBack(err,result)
 */
dbs.exists = function(key) {
  client.exists(key, function(err, result) {
    if (err) {
      throw err
    }
    return result
  })
}

/**
 * 获取缓存数据
 * @param obj.key 键
 * @param obj.sql 查询语句
 * @param obj.expire 缓存时间
 * @param obj.callBack(result) 回调
 */
dbs.select = function(obj) {
  if (dbs.exists(obj.key)) {
    dbs.get(obj.key, function(err, result) {
      obj.callBack(JSON.parse(result))
    })
  } else {
    db.query(obj.sql, function(err, rows) {
      obj.callBack(err, rows)
      dbs.set(obj.key, JSON.stringify(rows), obj.expire)
    })
  }
}

module.exports = dbs
