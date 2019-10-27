const net = require('net')
const server = net.createServer(socket => {
  socket.once('data', data => {
    socket.write('first response')
  })
  socket.on('data', data => {
    socket.write(data + ' response')
  })
  socket.on('data', data => {
    socket.write(data + ' response123')
  })
})
server.listen(8888)
