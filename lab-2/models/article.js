const Sequelize = require('sequelize')
const sequelize = require('../sequelize')
const Contributor = require('./contributor')
const ArticleCategory = require('./articleCategory')

const Article = sequelize.define('articles', {
  categoryId: Sequelize.INTEGER,
  title: Sequelize.STRING,
  detail: Sequelize.TEXT,
  image: Sequelize.STRING,
  published: {
    type: Sequelize.BOOLEAN,
    defaultValue: 1
  },
  contributorId: Sequelize.INTEGER,
  activeAt: Sequelize.DATEONLY,
  contentAt: Sequelize.DATEONLY
}, {
  timestamps: true
})

module.exports = Article