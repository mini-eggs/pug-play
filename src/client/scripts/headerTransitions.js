var Rx = require('rxjs/Observable')
require('rxjs/add/operator/debounce')
require('rxjs/add/observable/fromEvent')
require('rxjs/add/observable/interval')

// create observables
var scrollObserver = Rx.Observable.fromEvent( window, 'scroll' )
var scrollObserverDebounced = scrollObserver.debounce(function() {
  return Rx.Observable.interval(500)
})

// get headers
var secondaryHeader = document.querySelector('header.scroll__header')

// get initial data
var defaultClass = secondaryHeader.className
var activeClass = defaultClass + ' ' + defaultClass + '__active'
var inactiveClass = defaultClass + ' ' + defaultClass + '__inactive'
var heightTick = 200

// subcribe to event(s)
scrollObserver.subscribe(scrollHandle)
scrollObserverDebounced.subscribe(scrollHandleDebounced)

// handle events
function scrollHandle(event) {
  if( 
    window.pageYOffset <= heightTick &&
    secondaryHeader.className === activeClass
  ) {
    secondaryHeader.className = inactiveClass
  }
}
function scrollHandleDebounced(event) {
  if( 
    !( window.pageYOffset <= heightTick ) &&
    secondaryHeader.className.indexOf( activeClass ) === -1 
  ) {
    secondaryHeader.className = activeClass
  }
}

// initial call in case user has refreshed and already scrolled down page
scrollHandleDebounced()
