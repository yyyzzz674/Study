// 关于闭包
// 闭包的好处
// 闭包可以隐藏变量以及防止变量被篡改和作用域的污染，从而实现封装
// 闭包的缺点
// 由于保留了作用域，会增加内存的开销，因此需要注意内存的使用，并且防止内存泄露的问题

function a() {
  let b = 1
  let c = 1
  return function() {
    let d = 3
    return b + c + d
  }
}
let e = a()
console.log(e())
