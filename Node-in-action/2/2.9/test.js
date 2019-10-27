function asyncFunction(callback) {
  setTimeout(callback, 200)
}
let color = 'blue'
asyncFunction(() => {
  console.log(`The color is ${color}`) // 当异步执行到这一步时,color变量的值已经改变
})
// 使用闭包的办法将color的值冻结
// ;(color => {
//   asyncFunction(() => {
//     console.log(`The color is ${color}`)
//   })
// })(color)
color = 'green'
