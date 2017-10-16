exports.isLogin = function(req, res, next) {
  if(req.session.user) next()
  else res.redirect('/login')
}

exports.isNotLogin = function(req, res, next) {
  if(!req.session.user) next()
  else res.redirect('/')
}