const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.sendFile('/views/index.html', { root: '.' })
})

module.exports = router
