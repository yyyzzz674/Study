/*
 * @Author: zhuo
 * @Date: 2021-09-24 08:25:19
 * @LastEditTime: 2021-09-24 08:34:02
 */
// 在JavaScript中继承是依赖于原型prototype链
// 实现的,理论上不能继承多个父类

// 继承单对象属性的extend方法
// 浅复制,只能复制值类型的属性,对于引用类型的属性浅复制
let extend = function (target, source) {
  for (let property in source) {
    target[property] = source[property]
  }
  return target
}

// 多继承 属性复制
// 将传入的多个对象的属性复制到源对象中
// 实现对多个对象的属性的继承
let mix = function () {
  let i = 1,
    len = arguments.length,
    target = arguments[0],
    arg
  for (; i < len; i++) {
    arg = arguments[i]
    for (let prototype in arg) {
      target[property] = arg[property]
    }
  }
  return target
}
