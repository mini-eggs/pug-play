// enabled header events
require('./headerTransitions')

// fade in images
var backgroundImage = require('background-image-fade-in')
backgroundImage('.featured__image', 1000, { 
   backgroundPosition: 'center center',
   backgroundSize: 'cover'
 }, { 
   backgroundColor: 'rgba(0,0,0,0.3)' 
 })

