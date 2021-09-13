/*
 * @Author: zhuo
 * @Date: 2021-09-13 19:47:55
 * @LastEditTime: 2021-09-13 20:44:00
 */

// ---------------------  写法一  -----------------------------

// 利用闭包实验类的静态变量
let Book = (function () {
  // 静态私有变量
  let bookNum = 0
  // 静态私有方法
  function checkBook(name) {}
  // 返回构造函数
  return function (newId, newName, newPrice) {
    // 私有变量
    let id, name, price
    // 私有方法
    function checkID(id) {}
    // 特权方法
    this.getID = function () {}
    this.setID = function () {}
    this.getName = function () {}
    this.setName = function () {}
    this.getPrice = function () {}
    this.setPrice = function () {}
    // 公有属性
    this.id = newId
    this.name = newName
    this.price = newPrice
    // 公有方法
    this.copy = function () {}

    bookNum++
    if (bookNum > 100) {
      throw new Error('我们仅出版100本书')
    }

    // 构造器
    this.setID(id)
    this.setName(name)
    this.setPrice(price)
  }
})()

Book.prototype = {
  isJsBook: false,
  display: function () {}
}

let book1 = new Book('123', '456', '789')
console.log(book1.isJsBook)
console.log(book1.id)
console.log(book1.name)
console.log(book1.price)

let book2 = Book('1', '4', '7')
console.log(id)
console.log(name)
console.log(price)

console.log('--------------------------------------------------')

// ---------------------  写法二  -----------------------------

// 利用闭包实验类的静态变量
let _Book = (function () {
  // 静态私有变量
  let bookNum = 0
  // 静态私有方法
  function checkBook(name) {}
  // 创建类
  function _book(newId, newName, newPrice) {
    // 私有变量
    let id, name, price
    // 私有方法
    function checkID() {}
    // 特权方法
    this.getName = function () {}
    this.setName = function () {}
    this.getPrice = function () {}
    this.setPrice = function () {}
    // 公有属性
    this.id = newId
    // 公有方法
    this.copy = function () {}

    bookNum++
    if (bookNum > 100) {
      throw new Error('我们仅出版100本书')
    }

    // 构造器
    this.setName(name)
    this.setPrice(price)
  }
  // 构建原型
  _book.prototype = {
    isJsBook: false,
    display: function () {}
  }
  // 返回类
  return _book
})()

let _book = new _Book()
console.log(_book.isJsBook)

console.log('--------------------------------------------------')

let Book1 = function (title, time, type) {
  this.title = title
  this.time = time
  this.type = type
}

// let book1 = Book1('JavaScript', '2014', 'js')
// console.log(book1) // undefined
// console.log(title) // JavaScript
// console.log(time) // 2014
// console.log(type) // js

// console.log(book1.title) // 报错
// console.log(book1.time) // 报错
// console.log(book1.type) // 报错

let book11 = new Book1('JavaScript', '2014', 'js')
console.log(book11)

// console.log(title) // 报错 title is not defined
// console.log(time) // 报错 time is not defined
// console.log(type) // 报错 type is not defined

console.log(book11.title) // JavaScript
console.log(book11.time) // 2014
console.log(book11.type) // js

console.log('--------------------------------------------------')

let Book2 = function (title, time, type) {
  if (this instanceof Book2) {
    this.title = title
    this.time = time
    this.type = type
  } else {
    return new Book2(title, time, type)
  }
}

let book21 = Book2('JavaScript', '2014', 'js')
console.log(book21) // Book2 { title: 'JavaScript', time: '2014', type: 'js' }
console.log(book21.title) // JavaScript
console.log(book21.time) // 2014
console.log(book21.type) // js
