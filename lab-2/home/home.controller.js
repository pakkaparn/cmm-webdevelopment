const Sequelize = require('sequelize')
const Banner = require('../models/banner')
const Article = require('../models/article')

const Op = Sequelize.Op

exports.index = function(req, res) {

  let bannerPromise = new Promise(function(resolve, reject) {
    Banner.findAll({
      where: {
        activeAt: {
          [Op.lte]: Sequelize.fn('curdate')
        },
        expiredAt: {
          [Op.gte]: Sequelize.fn('curdate')
        },
        published: true
      },
      order: [
        ['highlight', 'DESC'],
        ['id', 'DESC']
      ]
    }).then(function(response) {
      resolve(response)
    })
  })

  let articlePromise = new Promise(function(resolve, reject) {
    Article.findAll({
      where: {
        activeAt: {
          [Op.lte]: Sequelize.fn('curdate')
        },
        contentAt: {
          [Op.lte]: Sequelize.fn('curdate')
        },
        published: true
      },
      order: [
        ['contentAt', 'DESC']
      ]
    }).then(function(response) {
      resolve(response)
    })
  })

  Promise.all([bannerPromise, articlePromise]).then(function(values) {
    res.render('home/main.twig', {
      banner: values[0],
      article: values[0]
    })
  })
}