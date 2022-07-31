const express = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user')

const PORT = 3000

const app = express()
// Parse incoming request bodies in a middleware
app.use(bodyParser.urlencoded({ extended: false }))
// Serve static files
app.use(express.static('public'))

app.use('/admin', adminRoutes)

app.use(userRoutes)

app.get('/404', (req, res) => {
  res.sendFile('/public/images/page_not_found.png', { root: '.' })
})

app.use((req, res) => {
  res.sendFile('views/404.html', { root: '.' })
})

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
)
