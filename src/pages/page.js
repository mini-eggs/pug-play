var pug = require('pug')
var getEntries = require('../data/contentful')

function findPage(request, response, pages) {
  var find = request.originalUrl.replace('/page/', '')
  var page = false
  for(var e = 0; e < pages.length; e++) {
    var aPage = pages[e]
    if(aPage.slug === decodeURI( find ) ) {
      page = aPage
    }
  }
  if(!page) response.send('404')
  return { item: page }
}

module.exports = function(request, response) {
  getEntries(function(data) {
    var currentSlug = request.originalUrl.replace('/post/', '')
    var header = pug.compileFile('./src/templates/header.pug')( Object.assign({}, data, { current: currentSlug }) )
    var page = pug.compileFile('./src/templates/page.pug')(findPage(request, response, data.pages))
    var content = header + page
    var html = pug.compileFile('./src/templates/html.pug')({ title: 'Evan Jones', content: content })
    response.send(html)
  })
}