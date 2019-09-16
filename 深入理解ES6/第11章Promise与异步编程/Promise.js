let fs = require('fs')
function readFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, { encoding: 'utf-8' }, function(err, contents) {
      if (err) {
        reject(err)
        return
      }
      resolve(contents)
    })
  })
}
let promise = readFile('example.txt')
promise.then(
  contents => {
    console.log(contents)
  },
  err => {
    console.log(err.message)
  }
)
