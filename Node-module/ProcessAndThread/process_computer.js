function sleep(millisecond) {
  return new Promise(resolve => setTimeout(resolve, millisecond))
}

function longComputation() {
  let sum = 0

  // console.info('计算开始')
  // console.time('计算耗时')
  // for (let i = 0; i < 1e10; i++) {
  //   sum += i
  // }
  // console.info('计算结束')
  // console.timeEnd('计算耗时')
  return sum
}

async function delay() {
  console.log('begin at' + new Date())
  await sleep(3000)
  console.log('end at' + new Date())
}
process.on('message', msg => {
  console.log(msg, 'process.pid', process.pid)
  // const sum = longComputation()
  // console.log(sum)
  delay().then(resolve => {
    process.send(0)
  })
})
