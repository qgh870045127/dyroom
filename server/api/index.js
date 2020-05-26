const { Router } = require('express')

const router = Router()

const routes = require('./router')

router.use(routes)

module.exports = router
