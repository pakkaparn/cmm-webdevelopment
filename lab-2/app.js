const express = require('express')
const app = express()

const homeController = require('./home/home.controller')

app.get('/', homeController.index)

app.use('/assets', express.static(__dirname + '/static', { maxAge: 86400000 }))

app.listen(3000, function() {
  console.log('Server is running on port 3000')
})