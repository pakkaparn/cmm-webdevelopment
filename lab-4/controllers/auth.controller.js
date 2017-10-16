const Users = require('../models/users')

exports.index = function(req, res) {
  res.render('auth/main.twig')
}

exports.login = function(req, res) {
  const username = req.body.username
  const password = req.body.password

  Users.findOne({
    where: {
      username: username
    }
  }).then(function(user) {
    if(!user || !user.validPassword(password)) {
      res.redirect('/login')
    } else {
      req.session.user = user.dataValues
      res.redirect('/')
    }
  })
}

exports.logout = function(req, res) {
  if(req.session.user) {
    delete req.session.user
    res.redirect('/')
  } else {
    res.redirect('/login')
  }
}