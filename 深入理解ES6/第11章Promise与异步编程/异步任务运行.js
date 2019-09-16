function run(taskDef) {
  let task = taskDef()
  let result = task.next()
  ;(function step() {
    if (!result.done) {
      let promise = Promise.resolve(result.value)
      promise
        .then(value => {
          result = task.next(value)
          step()
        })
        .catch(error => {
          result = task.throw(error)
          step()
        })
    }
  })()
}

let fs = require('fs')
function readFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, { encoding: 'utf-8' }, (err, contents) => {
      if (err) {
        reject(err)
      } else {
        resolve(contents)
      }
    })
  })
}

run(function*() {
  let contents = yield readFile('config.json')
  console.log(contents)
  console.log('Done')
})
