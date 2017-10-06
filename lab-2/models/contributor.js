const Sequelize = require('sequelize')
const sequelize = require('../sequelize')
const Article = require('./article')

const Contributor = sequelize.define('contributors', {
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  signature: Sequelize.TEXT,
  image: Sequelize.STRING,
  published: {
    type: Sequelize.BOOLEAN,
    defaultValue: 1
  }
}, {
  timestamps: true
})

module.exports = Contributor