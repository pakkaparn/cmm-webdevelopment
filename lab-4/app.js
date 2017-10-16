const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const { twig } = require('twig')

require('./models')

const app = express()

app.set('view engine', 'twig')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())

const sessionSecret = {
  secret: process.env.SECERT || 'sessionsecret',
  resave: true,
  saveUninitialized: true
}

app.use(session(sessionSecret))

const homeController = require('./controllers/home.controller')
const authController = require('./controllers/auth.controller')

const authMiddleware = require('./middlewares/auth.middleware')

app.get('/', authMiddleware.isLogin, homeController.index)
app.get('/login', authMiddleware.isNotLogin, authController.index)
app.post('/login', authMiddleware.isNotLogin, authController.login)
app.get('/logout', authController.logout)

app.use('/assets', express.static(__dirname + '/static/assets', { maxAge: 86400000 }))

module.exports = app