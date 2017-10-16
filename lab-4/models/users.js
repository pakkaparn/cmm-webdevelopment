const Sequelize = require('sequelize')
const bcrypt = require('bcrypt')
const sequelize = require('./sequelize')

const Users = sequelize.define('users', {
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  password: Sequelize.STRING,
  name: Sequelize.STRING,
  email: Sequelize.STRING
}, {
  timestamps: true,
  hooks: {
    beforeCreate: function(user) {
      const salt = bcrypt.genSaltSync()
      user.password = bcrypt.hashSync(user.password, salt)
    }
  }
})

Users.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = Users