var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var session = require('express-session')
var router = require('./router')

var app = express()

app.engine('html', require('express-art-template'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))
app.set('views', path.join(__dirname, './views/'))

app.use(session({
  secret: 'hr',
  resave: false,
  saveUninitialized: false 
}))
app.use(router)

app.listen(500, function () {
  console.log('running...')
})
