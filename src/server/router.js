var fs = require('fs')
var page = require('../pages/page')
var post = require('../pages/post')
var blog = require('../pages/blog')

module.exports = function(app) {

  app.get('/', function(request, response) {
    response.redirect('/page/home')
  })

  app.get('/page/:page', function(request, response) {
    page(request, response)
  })

  app.get('/blog', function(request, response) {
    blog(request, response)
  })

  app.get('/post/:post', function(request, response) {
    post(request, response)
  })

  app.get('*', function(request, response) {
    response.redirect('/page/home')
  })

}