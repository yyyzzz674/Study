/*
 * @Author: zhuo
 * @Date: 2021-09-26 12:49:07
 * @LastEditTime: 2021-09-26 12:53:26
 */

let Demo = function () {
  if (!(this instanceof Demo)) {
    return new Demo()
  }
}
Demo.prototype = {
  show: function () {
    console.log('成功获取')
  }
}
console.log(Demo.prototype)

let d = Demo()
d.show()
