function myIndex() {
  var index = 1

  function foo() {
    return index++
  }

  foo.clear = function() {
    index = 1
  }
  return foo
}

var foo = myIndex()
a = foo()
console.log(a === 1)
b = foo()
console.log(b === 2)
