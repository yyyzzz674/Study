const http = require('http')
const fork = require('child_process').fork

const server = http.createServer()
server.on('request', (req, res) => {
  if (req.url == '/computer') {
    const computer = fork('./process_computer.js')
    computer.send('开启一个新的子进程')
    computer.on('message', sum => {
      res.end(`sum is ${sum}`)
      computer.kill()
    })
    computer.on('close', (code, signal) => {
      console.log(`收到close事件，子进程收到信号${signal}而终止，退出码${code}`)
      computer.kill()
    })
  } else {
    res.end('ok')
  }
})
server.listen(3000, () => {
  console.log(`Server started at http://localhost:${3000}`)
})
