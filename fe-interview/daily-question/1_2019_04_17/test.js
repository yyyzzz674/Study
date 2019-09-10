// 递归数组长度为5元素随机数在2-32间不重复的值

// 第一种
let arr = new Array(5)
let num = randomNumber()
let i = 0
console.time('first')
randomArr(arr, num)
console.timeEnd('first')
console.log(arr)
function randomArr(arr, num) {
  if (arr.indexOf(num) < 0) {
    arr[i] = num
    i++
  } else {
    num = randomNumber()
  }
  if (i >= arr.length) {
    return
  } else {
    randomArr(arr, num)
  }
}
function randomNumber() {
  return Math.floor(Math.random() * 31 + 2)
}
console.log(`------------------------------------`)

// 第二种
let obj = { length: 0 }
arr = new Array(5)

function add_item() {
  if (obj.length > 4) return
  const item = Math.floor(Math.random() * 31 + 2)
  if (!obj[item]) {
    arr[obj.length] = item
    obj[item] = true
    obj.length++
  }
  add_item()
}
console.time('second')
add_item()
console.timeEnd('second')
console.log(arr)
console.log(`------------------------------------`)
