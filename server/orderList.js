const express = require('express')
const router = express.Router()

router.get('/orderList', (req, res) => {
  res.status(200).json({
    data:[{ price: '$999' }, { price: '$1155' }]
  })
})

// Export the server middleware
export default {
  path: '/order',
  handler: router
}
