exports.index = function(req, res) {
  let content = {
    user: req.session.user
  }

  res.render('home/main.twig', content)
}