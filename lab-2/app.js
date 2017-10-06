const express = require('express')
const { twig } = require('twig')

require('./models')

const homeController = require('./home/home.controller')

const app = express()

app.set('view engine', 'twig')

app.get('/', homeController.index)

app.use('/assets', express.static(__dirname + '/static/assets', { maxAge: 86400000 }))

module.exports = app