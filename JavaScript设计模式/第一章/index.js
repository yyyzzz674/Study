/*
 * @Author: zhuo
 * @Date: 2021-09-07 13:03:06
 * @LastEditTime: 2021-09-13 20:15:22
 */

// 1.1 避免创建全局变量
function checkName() {}
let checkEmail = function () {}

// 1.3 使用对象收编变量
// 创建函数
let CheckObject = {
  checkEmail: function () {}
}

CheckObject.checkName = function () {}

// 1.5 真假对象

CheckObject = function () {
  return {
    checkName: function () {},
    checkEmail: function () {
      console.log('1.5 CheckObject checkEmail')
    }
  }
}

let a = CheckObject()
console.log(a)
a.checkEmail()

console.log('--------------------------------------------------')

// 1.6 创建类

CheckObject = function () {
  this.checkName = function () {}
  this.checkEmail = function () {
    console.log('1.6 CheckObject checkEmail')
  }
}

a = new CheckObject()
console.log(a)
a.checkEmail()

console.log('--------------------------------------------------')

// 1.7 一个检测类

CheckObject = function () {}
CheckObject.prototype.checkName = function () {}
CheckObject.prototype.checkEmail = function () {
  console.log('1.7.1 CheckObject checkEmail')
}

a = new CheckObject()
console.log(a)
a.checkEmail()

CheckObject = function () {}
CheckObject.prototype = {
  checkName: function () {},
  checkEmail: function () {
    console.log('1.7.2 CheckObject checkEmail')
  }
}

a = new CheckObject()
console.log(a)
a.checkEmail()

console.log('--------------------------------------------------')

// 1.8 方法返回this

CheckObject = function () {}
CheckObject.prototype = {
  checkName: function () {
    console.log('1.8 CheckObject checkName')
    return this
  },
  checkEmail: function () {
    console.log('1.8 CheckObject checkEmail')
    return this
  }
}

a = new CheckObject()
a.checkEmail().checkName()

console.log('--------------------------------------------------')

// 1.9 函数原型
// 1.10 链式添加

Function.prototype.addMethod = function (name, fn) {
  this[name] = fn
  return this
}

a = new Function() // a=function(){}
a.addMethod('checkName', function () {
  console.log('1.9 CheckObject checkName')
  return this
}).addMethod('checkEmail', function () {
  console.log('1.9 CheckObject checkEmail')
  return this
})

a.checkEmail().checkName()

console.log('--------------------------------------------------')

// 1.11 类式调用
Function.prototype.addMethod = function (name, fn) {
  this.prototype[name] = fn
  return this
}

// 原型对象和new的区别
let Methods = new Function() // Methods=function(){}
Methods.addMethod('checkName', function () {
  console.log('1.11 CheckObject checkName')
  return this
}).addMethod('checkEmail', function () {
  console.log('1.11 CheckObject checkEmail')
  return this
})

a = new Methods()
a.checkEmail().checkName()
