const Users = require('./users')

Users.sync().then(function() {
  console.log('Users is synced.')
})