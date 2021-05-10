/*
 * @Author: zhuo
 * @Date: 2020-11-09 21:25:50
 * @LastEditTime: 2020-11-23 19:49:19
 */

// -----------------并行开始--------------------------

// const getA = new Promise((resolve, reject) => {
//   setTimeout(function() {
//     resolve(2)
//   }, 1000)
// }).then(result => result)

// const getB = new Promise((resolve, reject) => {
//   setTimeout(function() {
//     resolve(3)
//   }, 1000)
// }).then(result => result)

// Promise.all([getA, getB])
//   .then(data => {
//     console.log(data)
//   })
//   .catch(e => console.log(e))

// ---------------- 顺序开始---------------------------

const getA = function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(2)
    }, 1000)
  })
}

const getB = function () {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(3)
    }, 1000)
  })
}
function addAB(a, b) {
  console.log(a + b)
  return a + b
}

// ---------------- 连续使用then链式操作---------------

// function getResult() {
//   const obj = { c: 1 }
//   Promise.resolve()
//     .then(() => getA())
//     .then(a => {
//       console.log(a)
//       obj.a = a
//       console.log(obj)
//     })
//     .then(() => getB())
//     .then(b => {
//       console.log(b)
//       obj.b = b
//     })
//     .then(() => addAB(obj.a, obj.b) + 1)
//     .then(data => console.log(data))
//     .then(data => console.log(data)) // undefined
//     .catch(e => console.log(e))
// }

// ---------------- 使用promise构建队列 ---------------

// function getResult() {
//   var res = []
//   function queue(arr) {
//     let sequence = Promise.resolve()
//     arr.forEach(function(item) {
//       sequence = sequence.then(item).then(data => {
//         res.push(data)
//         return res
//       })
//     })
//     return sequence
//   }

//   queue([getA, getB])
//     .then(data => {
//       return addAB(data[0], data[1])
//     })
//     .then(data => console.log(data))
//     .catch(e => console.log(e))
// }

// ---------------- 使用promise构建队列 ---------------

// function getResult() {
//   async function queue(arr) {
//     const res = []
//     for (const fn of arr) {
//       const data = await fn()
//       res.push(data)
//     }
//     return await res
//   }

//   queue([getA, getB])
//     .then(data => addAB(data[0], data[1]))
//     .then(data => console.log(data))
// }

/**
 *
 *
 */
function getResult() {
  const obj = []
  Promise.resolve()
    .then(() => getA().then(value => obj.push(value)))
    .then(() => getB().then(value => obj.push(value)))
    .then(Promise.resolve(obj).then(addAB(obj[0], obj[1])))
    .then(() => console.log(obj))
}

getResult()
