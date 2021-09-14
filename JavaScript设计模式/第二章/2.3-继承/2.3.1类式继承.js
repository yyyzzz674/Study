/*
 * @Author: zhuo
 * @Date: 2021-09-14 21:34:05
 * @LastEditTime: 2021-09-14 22:10:38
 */

// 类式继承

// 声明父类
function SuperClass() {
  this.superValue = true
}

// 为父类添加共有方法
SuperClass.prototype.getSuperValue = function () {
  return this.superValue
}

// 声明子类
function SubClass() {
  this.subValue = false
}

// 继承父类
SubClass.prototype = new SuperClass()

// 为子类添加共有方法
SubClass.prototype.getSupValue = function () {
  return this.subValue
}

let instance = new SubClass()
console.log(instance.getSuperValue())
console.log(instance.getSupValue())

console.log(instance instanceof SuperClass)
console.log(instance instanceof SubClass)

console.log(SubClass instanceof SuperClass) // false
console.log(SubClass.prototype instanceof SuperClass)
console.log(SubClass.prototype)

console.log(instance instanceof Object)

console.log('--------------------------------------------------')

// 类式继承缺点
// 1、子类通过其原型prototype对父类实例化，继承了父类。父类中共有属性若为引用类型，会在子类中被所有实例共用

function SuperClass1() {
  this.books = ['1', '2']
}

function SubClass1() {}

SubClass1.prototype = new SuperClass1()

let instance1 = new SubClass1()
let instance2 = new SubClass1()
console.log(instance2.books)
instance1.books.push('3')
console.log(instance2.books)

//2、子类实现的继承是靠其原型prototype对父类的实例化实现的，在创建父类的时，无法向父类传递参数，无法对父类构造函数内的属性进行初始化
