/*
 * @Author: zhuo
 * @Date: 2021-05-10 22:44:35
 * @LastEditTime: 2021-05-10 23:10:40
 */

// 1、判断变量名不为空并执行相关操作
// const a = 123
// a && console.log(a)

// 2、判断对象类型->是否为Object
// 2.1
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
// function isObject(obj) {
//   return obj !== null && typeof obj === 'object'
// }
// let a = new Object({ a: 1 }) // 相当于 a={}
// console.log(isObject(a))
// 2.2
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
// function isPlainObject(obj) {
//   return Object.prototype.toString.call(obj) === '[object Object]'
// }
// const reg = /.12/
// console.log(isPlainObject(reg))
// let o = Object.create(null)
// console.log(o, isPlainObject(o))
// o = Object.create(Object.create(null))
// console.log(o, isPlainObject(o))

// 3、判断对象类型->是否为Array
/**
 * 判断是否为对象,可直接用Array.isArray
 */
function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}
let a = []
console.log(isArray(a), Array.isArray(a))
