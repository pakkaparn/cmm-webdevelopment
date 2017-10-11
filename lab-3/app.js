const express = require('express')

const homeController = require('./home/home.controller')
const jQueryController = require('./jQuery/jQuery.controller')

const app = express()

app.get('/', homeController.index)
app.get('/jquery', jQueryController.index)

app.use('/assets', express.static(__dirname + '/static/assets', { maxAge: 86400000 }))

module.exports = app