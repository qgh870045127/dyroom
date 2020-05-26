const { Router } = require('express')
var router = Router()

const { httpGetMovies } = require('./getMovies')
const { httpPostVideoUrl } = require('./getVideoUrl')

// GET请求
const httpGetRoutes = {
  ...httpGetMovies
}

Object.keys(httpGetRoutes).forEach(key => {
  router.get(key, httpGetRoutes[key])
})

// POST请求
const httpPostRoutes = {
  ...httpPostVideoUrl
}

Object.keys(httpPostRoutes).forEach(key => {
  router.get(key, httpPostRoutes[key])
})

module.exports = router
