setTimeout(() => {
  console.log('first')
  setTimeout(() => {
    console.log('second')
    setTimeout(() => {
      console.log('third')
    }, 100)
  }, 500)
}, 1000)
