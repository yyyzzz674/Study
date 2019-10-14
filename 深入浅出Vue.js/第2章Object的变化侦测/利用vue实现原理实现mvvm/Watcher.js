function Watcher(vm, prop, callback) {
  this.vm = vm
  this.prop = prop
  this.callback = callback
  this.value = this.get()
}
Watcher.prototype = {
  get: function() {
    Dep.target = this
    const value = this.vm.$data[this.prop]
    Dep.target = null
    return value
  },
  update: function() {
    const value = this.vm.$data[this.prop]
    const oldValue = this.value
    if (value !== oldValue) {
      this.value = value
      this.callback(value)
    }
  }
}
