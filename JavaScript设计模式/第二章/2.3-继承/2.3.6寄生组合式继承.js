/*
 * @Author: zhuo
 * @Date: 2021-09-22 13:13:05
 * @LastEditTime: 2021-09-22 13:25:20
 */

function inheritObject(o) {
  // 声明一个过渡函数对象
  function F() {}
  // 过渡对象的原型继承父对象
  F.prototype = o
  // 返回过度对象的一个实例，该实例的原型继承了父对象
  return new F()
}

/**
 * 寄生式继承 继承原型
 *
 * @param {*} subClass 子类
 * @param {*} superClass 父类
 */
function inheritPrototype(subClass, superClass) {
  // 复制一份父类的原型副本保存在变量中
  let p = inheritObject(superClass.prototype)
  // 修正因为重写子类原型导致子类constructor属性被修改
  p.constructor = subClass
  // 设置子类的原型
  subClass.prototype = p
}

// 定义父类
function SuperClass(name) {
  this.name = name
  this.books = ['1', '2', '3']
}
// 定义父类原型方法
SuperClass.prototype.getName = function () {
  console.log(this.name)
}
// 定义子类
function SubClass(name, time) {
  SuperClass.call(this, name)
  this.time = time
}
// 寄生式继承父类原型
inheritPrototype(SubClass, SuperClass)
SubClass.prototype.getTime = function () {
  console.log(this.time)
}

let instance1 = new SubClass('js book', 2014)
let instance2 = new SubClass('css book', 2013)

instance1.books.push('4')
console.log(instance1.books)
console.log(instance2.books)
instance1.getTime()
instance2.getTime()
