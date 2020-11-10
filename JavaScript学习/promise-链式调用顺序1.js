new Promise(resolve => {
  resolve()
})
  .then(() => {
    console.log('log: 外部第一个then')
    Promise.resolve()
      .then(() => {
        console.log('log: 内部第一个then')
      })
      .then(() => {
        console.log('log: 内部第二个then-1')
      })
      .then(() => {
        console.log('log: 内部第二个then-2')
      })
      .then(() => '外1')
  })
  .then(value => {
    console.log(value + 'log: 外部第二个then')
    Promise.resolve()
      .then(() => {
        console.log('log: 内部第三个then-1')
      })
      .then(() => {
        console.log('log: 内部第三个then-2')
      })
      .then(() => {
        console.log('log: 内部第四个then')
      })
  })
  .then(value => {
    console.log(value + 'log: 外部第三个then')
    Promise.resolve()
      .then(() => {
        console.log('log: 内部第五个then')
        return Promise.resolve()
      })
      .then(() => {
        console.log('log: 内部第六个then')
      })
  })
