var express = require('express')
var morgan = require('morgan')

var app = express()

const port = process.env.PORT || 5001

app.use(morgan('combined'))
app.use('/static', express.static('public'))

app.get('/', function (req, res) {
  res.status(200).send('Hello, I am header')
})

app.listen(port, function () {
  console.log('Server listening on port ' + port + '!')
})
