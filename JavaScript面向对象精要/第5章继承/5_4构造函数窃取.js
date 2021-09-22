/*
 * @Author: zhuo
 * @Date: 2021-09-22 13:03:59
 * @LastEditTime: 2021-09-22 13:09:55
 */
// 调用父类的构造函数
function Rectangle(length, width) {
  this.length = length
  this.width = width
}
Rectangle.prototype.getArea = function () {
  return this.length * this.width
}
Rectangle.prototype.toString = function () {
  return '[Rectangle' + this.length + 'x' + this.width + ']'
}
function Square(size) {
  Rectangle.call(this, size, size)
}
Square.prototype = new Rectangle()

Square.prototype.constructor = Square
// Square.prototype = Object.create(Rectangle.prototype, {
//   constructor: {
//     value: Square,
//     enumerable: true,
//     configutable: true,
//     writable: true
//   }
// })

Square.prototype.toString = function () {
  return '[Square' + this.length + 'x' + this.width + ']'
}

var square = new Square(6)
console.log(square.length)
console.log(square.width)
console.log(square.getArea())

console.log(typeof square)
console.log(square instanceof Square)
console.log(Square.prototype.constructor)
