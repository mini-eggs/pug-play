var contentful = require('contentful')
var client = contentful.createClient(require('../keys/contentful.js'))

module.exports = function(cb) {
  client.getEntries().then(function(data) {

    var links = []
    var pages = []
    var posts = []
    var secondaryLink = []

    for(var e = 0; e < data.items.length; e++) {
      var item = data.items[e]
      var type = item.sys.contentType.sys.id
      switch(type) {
        case 'tabs':
          links.push(item.fields)
          break;
        case 'page':
          pages.push(item.fields)
          break;
        case 'blogPost':
          posts.push(item.fields)
          break;
        case 'about':
          secondaryLink = secondaryLink.concat(item.fields.links)
          break;
        default:
          break;
      }
    }

    // reordering
    links = links.concat(secondaryLink)

    var fixedLinks = []
    for(e = 0; e < links.length; e++) {
      var link = links[e]
      fixedLinks.push({
        name: link.name,
        href: typeof link.slug !== 'undefined' ? link.slug : link.url
      })
    }

    links = fixedLinks
    delete fixedLinks

    cb({
      links: links,
      pages: pages,
      posts: posts
    })
  })
}
