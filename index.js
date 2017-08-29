var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var mongoose = require('mongoose')
var tacosController = require('./controllers/tacos_controller')
var app = express()

mongoose.connect('mongodb://yangtheng:asdfgh@ds161713.mlab.com:61713/mocha-test' || 'mongodb://localhost/taco-api')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.send('hello')
})

app.use('/tacos', tacosController)

var server = app.listen(process.env.PORT || 3000)
console.log('Server UP')

// we export the running server so we can use it in testing
module.exports = server
