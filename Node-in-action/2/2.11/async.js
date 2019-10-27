const async = require('async')
async.series([
  callback => {
    setTimeout(() => {
      console.log('first')
      callback()
    }, 1000)
  },
  callback => {
    setTimeout(() => {
      console.log('second')
      callback()
    }, 1000)
  },
  callback => {
    setTimeout(() => {
      console.log('third')
      callback()
    }, 1000)
  }
])
