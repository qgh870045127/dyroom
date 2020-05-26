const dbs = require('../../redis/index.js')
const url = require('url')

exports.httpGetMovies = {
  '/index/moviesList': (req, res, next) => {
    let params = url.parse(req.url, true)
    dbs.select({
      expire: 604800,
      key: params.path,
      sql: `SELECT * FROM movies_data LIMIT ${params.query.row}`,
      callBack: (err, result) => {
        res.json({
          result: result,
          status: err || true
        })
      }
    })
  }
}

exports.httpPostMovies = {}
