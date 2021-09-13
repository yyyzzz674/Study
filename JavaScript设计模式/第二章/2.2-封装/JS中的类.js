/*
 * @Author: zhuo
 * @Date: 2021-09-13 18:40:51
 * @LastEditTime: 2021-09-13 19:44:48
 */

let Book = function (id, name, price) {
  // 私有属性
  let pages = 50

  // 私有方法
  function showPages() {
    console.log(pages)
  }

  // 特权方法
  this.getPages = function () {
    showPages()
    return pages
  }
  this.setPages = function (_pages) {
    pages = _pages
    showPages()
  }

  // 对象的共有属性
  this.id = id
  this.name = name
  this.price = price

  this.displayID = function () {
    console.log(id)
  }
}

// 公有属性
Book.prototype.isJsBook = false
// 公有方法
Book.prototype.displayName = function () {
  console.log(this.name)
}

// Book.prototype = {
//   isJsBook: false,
//   displayName: function () {}
// }

// 类静态公有属性（对象不能访问）
Book.isChinese = true

// 类静态公有方法（对象不能访问）
Book.resetTime = function () {
  console.log('new Time')
}

let book = new Book(1, 2, 3)
book.displayID()
book.displayName()
book.getPages()

let anotherBook = new Book(4, 5, 6)
anotherBook.displayID()
anotherBook.displayName()
anotherBook.getPages()
anotherBook.setPages(40)

book.getPages()

console.log(book.isJsBook) // false
console.log(book.isChinese) // undefined

console.log(Book.isChinese)
Book.resetTime()
