const app = require('./app')

const port = process.env.PORT || 8000

app.listen(port, err => {
  console.log('Server is running on port ' + port)
})