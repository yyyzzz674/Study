function run(taskDef) {
  let task = taskDef()
  let result = task.next()
  function step() {
    if (!result.done) {
      if (typeof result.value === 'function') {
        result.value(function(err, data) {
          if (err) {
            result = task.throw(err)
            return
          }
          result = task.next(data)
          step()
        })
      } else {
        result = task.next(result.value)
        step()
      }
    }
  }
  step()
}

let fs = require('fs')
function readFile(filename) {
  return function(callback) {
    fs.readFile(filename, callback)
  }
}

run(function*() {
  let contents = yield readFile('config.json')
  console.log(contents)
  console.log('Done')
})
