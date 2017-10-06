const Sequelize = require('sequelize')
const sequelize = require('../sequelize')
const Article = require('./article')

const ArticleCategory = sequelize.define('article_categories', {
  name: Sequelize.STRING,
  published: {
    type: Sequelize.BOOLEAN,
    defaultValue: 1
  }
}, {
  timestamps: true
})

module.exports = ArticleCategory