const Sequelize = require('sequelize')
const sequelize = require('../sequelize')

const Banner = sequelize.define('banners', {
  title: Sequelize.STRING,
  image: Sequelize.STRING,
  url: Sequelize.STRING,
  published: {
    type: Sequelize.BOOLEAN,
    defaultValue: 1
  },
  highlight: {
    type: Sequelize.BOOLEAN,
    defaultValue: 0
  },
  activeAt: Sequelize.DATEONLY,
  expiredAt: Sequelize.DATEONLY
}, {
  timestamps: true
})

module.exports = Banner