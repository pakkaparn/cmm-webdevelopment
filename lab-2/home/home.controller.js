exports.index = function(req, res) {
  let highlight = {
    id: 1,
    image: '/',
    url: '//google.com'
  }

  res.json({
    highlight
  })
}