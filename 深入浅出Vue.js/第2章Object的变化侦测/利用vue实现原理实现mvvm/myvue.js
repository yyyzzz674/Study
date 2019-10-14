function myvue(options) {
  this.$options = options
  this.$data = options.data
  this.$el = document.querySelector(options.el)
  Object.keys(this.$data).forEach(key => {
    this.proxyData(key)
  })
  this.init()
}
myvue.prototype.init = function() {
  observer(this.$data)
  new Compile(this)
}
myvue.prototype.proxyData = function(key) {
  Object.defineProperty(this, key, {
    get: function() {
      return this.$data[key]
    },
    set: function(value) {
      this.$data[key] = value
    }
  })
}
