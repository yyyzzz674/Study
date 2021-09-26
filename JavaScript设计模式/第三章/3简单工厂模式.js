/*
 * @Author: zhuo
 * @Date: 2021-09-26 12:41:29
 * @LastEditTime: 2021-09-26 12:47:14
 */

function createBook(name, time, type) {
  let o = new Object()
  o.name = name
  o.time = time
  o.type = type
  o.getName = function () {
    console.log(this.name)
  }
  return o
}

let book1 = createBook('js', 2014, 'js')
let book2 = createBook('css', 2013, 'css')
book1.getName()
book2.getName()

console.log('------------------------------------------------')

function createPop(type, text) {
  let o = new Object()
  o.content = text
  o.show = function () {
    console.log(this.content)
  }
  if (type === 'alert') {
    console.log('alert')
  }
  if (type === 'prompt') {
    console.log('prompt')
  }
  return o
}

let alert = createPop('alert', 'this is a alert')
