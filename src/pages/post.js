var pug = require('pug')
var getEntries = require('../data/contentful')

function findPost(request, response, posts) {
  var find = request.originalUrl.replace('/post/', '')
  var post = false
  for(var e = 0; e < posts.length; e++) {
    var apost = posts[e]
    if(apost.slug === decodeURI( find ) ) {
      post = apost
    }
  }
  if(!post) response.send('404')
  return { item: post }
}

module.exports = function(request, response) {
  getEntries(function(data) {
    var header = pug.compileFile('./src/templates/header.pug')( Object.assign({}, data, { current: 'blog' }) )
    var post = pug.compileFile('./src/templates/post.pug')(findPost(request, response, data.posts))
    var content = header + post
    var html = pug.compileFile('./src/templates/html.pug')({ title: 'Evan Jones', content: content })
    response.send(html)
  })
}