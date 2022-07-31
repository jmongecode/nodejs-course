const express = require('express')

const router = express.Router()

router.get('/users', (req, res) => {
  res.sendFile('/views/user.html', { root: '.' })
})

router.post('/users', (req, res) => {
  const { email, username, password } = req.body
  console.log('newUser', JSON.stringify({ email, username, password }, null, 2))
  res.redirect('/')
})

module.exports = router
