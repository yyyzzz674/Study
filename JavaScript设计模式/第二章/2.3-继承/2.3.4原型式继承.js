/*
 * @Author: zhuo
 * @Date: 2021-09-14 22:20:07
 * @LastEditTime: 2021-09-22 12:56:08
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

let newBook = inheritObject(book)
newBook.name = 'ajax book'
newBook.alikeBook.push('newBook')

let anotherBook = inheritObject(book)
anotherBook.name = 'flash book'
anotherBook.alikeBook.push('anotherBook')

console.log(newBook.name)
console.log(newBook.alikeBook)

console.log(anotherBook.name)
console.log(anotherBook.alikeBook)

console.log(book.name)
console.log(book.alikeBook)

// 与类式继承一致，父类对象book中的值类型的属性被复制，
// 引用类型的属性被共用
