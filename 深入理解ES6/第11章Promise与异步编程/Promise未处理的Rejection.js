let rejected
let possiblyUnhandledRejections = new Map() // 追踪未处理Rejection
process.on('unhandledRejection', (reason, promise) => {
  console.log(reason.message)
  console.log(rejected === promise)
  possiblyUnhandledRejections.set(promise, reason)
})
process.on('rejectionHandled', promise => {
  console.log(rejected === promise)
  possiblyUnhandledRejections.delete(promise)
})
setInterval(() => {
  possiblyUnhandledRejections.forEach((reason, promise) => {
    console.log(reason.message ? reason.message : reason)
    handleRejection(promise, reason) // 处理未处理的Rejection
  })
  possiblyUnhandledRejections.clear()
}, 60000)
rejected = Promise.reject(new Error('Explosion'))
setTimeout(() => {
  rejected.catch(value => {
    console.log(value.message)
  })
}, 1000)
