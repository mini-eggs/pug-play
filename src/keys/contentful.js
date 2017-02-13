if( process.env.SPACE && process.env.ACCESS_TOKEN ) {
  module.exports = {
    space: process.env.SPACE,
    accessToken: process.env.ACCESS_TOKEN
  }
}
else {
  module.exports = require('./contentful.dev.js')
}
