function defineReactive(data, key, value) {
  observer(value)
  let dep = new Dep()
  Object.defineProperty(data, key, {
    get: function() {
      if (Dep.target) {
        console.log('添加依赖')
        dep.addSub(Dep.target)
      }
      return value
    },
    set: function(newValue) {
      if (value !== newValue) {
        value = newValue
        dep.notify()
      }
    }
  })
}

function observer(data) {
  if (!data || typeof data !== 'object') {
    return
  }
  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key])
  })
}
