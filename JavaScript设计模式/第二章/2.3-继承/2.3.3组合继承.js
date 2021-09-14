/*
 * @Author: zhuo
 * @Date: 2021-09-14 22:10:28
 * @LastEditTime: 2021-09-14 22:19:33
 */

// 组合继承

function SuperClass(name) {
  this.name = name
  this.books = ['1', '2', '3']
}
SuperClass.prototype.getName = function () {
  console.log(this.name)
}

function SubClass(name, time) {
  SuperClass.call(this, name)
  this.time = time
}

SubClass.prototype = new SuperClass()
SubClass.prototype.getTime = function () {
  console.log(this.time)
}

let instance1 = new SubClass('js', 2014)
instance1.books.push('设计模式')
console.log(instance1.books) //[ '1', '2', '3', '设计模式' ]
instance1.getName()
instance1.getTime()

let instance2 = new SubClass('css', 2013)
console.log(instance2.books) //[ '1', '2', '3' ]
instance2.getName()
instance2.getTime()
