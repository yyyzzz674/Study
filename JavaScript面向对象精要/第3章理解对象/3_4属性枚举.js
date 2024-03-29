/*
 * @Author: zhuo
 * @Date: 2021-09-07 12:33:51
 * @LastEditTime: 2021-09-07 12:36:34
 */

// 所有添加的属性默认都是可枚举的
var object = {
  name: "yz",
  sayName: function() {
    console.log(this.name)
  }
}

// 使用for-in循环遍历原型属性和自有属性
var property
for (property in object) {
  console.log("Name:" + property)
  console.log("Value:" + object[property])
}

// 使用Object.keys()返回自有属性
var propertys = Object.keys(object)
var i, len
for (i = 0, len = propertys.length; i < len; i++) {
  console.log("Name:" + propertys[i])
  console.log("Value:" + object[propertys[i]])
}

// 使用propertyIsEnumerable()方法检查一个属性是否为可枚举的
console.log("name" in object) // true
console.log(object.propertyIsEnumerable("name")) // true
console.log("length" in propertys) // true
console.log(propertys['length'])
console.log(propertys.propertyIsEnumerable("length")) // false
