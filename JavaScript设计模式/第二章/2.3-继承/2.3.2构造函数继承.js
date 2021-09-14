/*
 * @Author: zhuo
 * @Date: 2021-09-14 22:01:22
 * @LastEditTime: 2021-09-14 22:14:47
 */

// 构造函数继承

function SuperClass(id) {
  this.books = ['1', '2']
  this.id = id
}
SuperClass.prototype.showBooks = function () {
  console.log(this.books)
}

function SubClass(id) {
  SuperClass.call(this, id)
}

let instance1 = new SubClass(10)
let instance2 = new SubClass(11)

instance1.books.push('3')
console.log(instance1.books)
console.log(instance1.id)
console.log(instance2.books)
console.log(instance2.id)

// instance1.showBooks() // TypeError
console.log(instance1.prototype) // undefined
console.log(SubClass.prototype)

// 构造继承缺点
// 没有涉及原型prototype,无法继承父类的原型方法
// 要想被子类继承就必须放在构造函数，这样创建出来的每个实例都会单独拥有一份而不能共用，违背了代码复用的原则
