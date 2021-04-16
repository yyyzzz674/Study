/*
 * @Author: zhuo
 * @Date: 2020-11-10 09:05:50
 * @LastEditTime: 2021-04-14 13:26:32
 */
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max) + 1
  return Math.floor(Math.random() * (max - min)) + min //不含最大值，含最小值
}

// function getPromiseArray(n) {
//   const array = []
//   for (let i = 0; i < n; i++) {
//     const promise = (i =>
//       new Promise((resolve, reject) => {
//         console.log(`promise${i}`)
//         setTimeout(() => {
//           const randow = Math.round(Math.random())
//           if (randow === 0) {
//             reject(`promise${i} reject`)
//           } else {
//             resolve(`promise${i} resolve`)
//           }
//         }, 2000)
//       }).then(
//         value => {
//           return value
//         },
//         error => {
//           return error
//         }
//       ))(i)
//     array.push(promise)
//   }
//   return array
// }

// const array = getPromiseArray(3)

// async function fn() {
//   console.log('现在开始执行array0')
//   const result0 = await array[0]
//   if (result0 === 'promise0 reject') {
//     return '0error'
//   }
//   console.log('现在开始执行array1')
//   const result1 = await array[1]
//   if (result1 === 'promise1 reject') {
//     return '1error'
//   }
//   console.log('现在开始执行array2')
//   const result2 = await array[2]
//   if (result2 === 'promise2 reject') {
//     return '2error'
//   }
// }

// Promise.resolve()
//   .then(fn)
//   .then(value => {
//     console.log(value)
//   })

let promise1 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randow = Math.round(Math.random())
      if (randow === 0) {
        reject(`promise11 reject`)
      } else {
        resolve(`promise11 resolve`)
      }
    }, 2000)
  }).then(
    value => {
      console.log(value)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const randow = Math.round(Math.random())
          if (randow === 0) {
            reject(`promise12 reject`)
          } else {
            resolve(`promise12 resolve`)
          }
        }, 2000)
      }).then(
        value => {
          console.log(value)
          return value
        },
        error => {
          console.log(error)
          return error
        }
      )
    },
    error => {
      console.log(error)
      return error
    }
  )
}

async function fn() {
  const result = await promise1()
  console.log(result)
}

fn()
