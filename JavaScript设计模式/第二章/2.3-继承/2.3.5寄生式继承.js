/*
 * @Author: zhuo
 * @Date: 2021-09-22 12:53:49
 * @LastEditTime: 2021-09-28 13:12:10
 */
function inheritObject(o) {
  // 声明一个过渡函数对象
  function F() {}
  // 过渡对象的原型继承父对象
  F.prototype = o
  // 返回过度对象的一个实例，该实例的原型继承了父对象
  return new F()
}

let book = {
  name: '1',
  alikeBook: ['2', '3']
}

function createBook(obj) {
  let o = inheritObject(obj)
  o.getName = function () {
    console.log(this.name)
  }
  return o
}

let newBook = createBook(book)
newBook.getName()
newBook.alikeBook.push('newBook')
console.log(book.alikeBook)
