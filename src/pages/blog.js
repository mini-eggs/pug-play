var pug = require('pug')
var getEntries = require('../data/contentful')

module.exports = function(request, response) {
  getEntries(function(data) {
    var header = pug.compileFile('./src/templates/header.pug')( Object.assign({}, data, { current: 'blog' }) )
    var posts = pug.compileFile('./src/templates/blog.pug')(data)
    var content = header + posts
    var html = pug.compileFile('./src/templates/html.pug')({ title: 'Evan Jones', content: content })
    response.send(html)
  })
}