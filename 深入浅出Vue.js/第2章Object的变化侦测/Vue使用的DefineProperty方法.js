// function defineReactive(data, key, val) {
//   Object.defineProperty(data, key, {
//     enumberable: true,
//     configurable: true,
//     get: function() {
//       return val
//     },
//     set: function(newVal) {
//       if (val === newVal) {
//         return
//       }
//       val = newVal
//     }
//   })
// }

let a = { _count: 0 }
Object.defineProperty(a, 'count', {
  configurable: true,
  enumberable: true,
  get: function() {
    return this._count + 1
  },
  set: function(newValue) {
    if (this._count !== newValue) {
      console.log(`Last value is ${this._count}`)
      this._count = newValue
      console.log(`New value is ${this._count}`)
    }
  }
})
console.log((a.count = 2)) // 2
console.log(a.count)
