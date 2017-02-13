var http = require('http')
var path = require('path')
var express = require('express')
var helmet = require('helmet')
var router = require('./router')

var app = express()
app.server = http.createServer(app)

// secure it
app.use(helmet())

// app.use('/fonts', express.static(path.join(__dirname, '../../public/fonts')))
app.use('/scripts', express.static(path.join(__dirname, '../../public/scripts')))
app.use('/styles', express.static(path.join(__dirname, '../../public/styles')))

router(app)

app.server.listen(process.env.PORT || 8080 , function() {
  if(!process.env.PORT) {
    var emoji = require('node-emoji').emoji
    var port = app.server.address().port
    console.log('Listening on ' + emoji.earth_americas + '  http://localhost:' + port)
  }
})
