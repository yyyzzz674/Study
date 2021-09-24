/*
 * @Author: zhuo
 * @Date: 2021-09-24 08:34:26
 * @LastEditTime: 2021-09-24 08:38:56
 */

// 以传入的参数做判断以实现多种调用方式
function Add() {
  function zero() {
    return 10
  }
  function one(num) {
    return 10 + num
  }
  function two(num1, num2) {
    return num1 + num2
  }

  this.add = function () {
    let arg = arguments
    let len = arg.length
    switch (len) {
      case 0:
        return zero()
      case 1:
        return one(arg[0])
      case 2:
        return two(arg[0], arg[1])
    }
  }
}

let a = new Add()
console.log(a.add())
console.log(a.add(5))
console.log(a.add(6, 7))
