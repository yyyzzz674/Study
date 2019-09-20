function debounce(handler, delay) {
  delay = delay || 300
  var timer = null

  return function() {
    var _self = this,
      _args = arguments

    clearTimeout(timer)
    timer = setTimeout(function() {
      handler.apply(_self, _args)
    }, delay)
  }
}
