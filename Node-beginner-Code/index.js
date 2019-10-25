var server = require('./serve')
var router = require('./router')
var requestHandles = require('./requestHandles')
var handle = {}
handle['/'] = requestHandles.start
handle['/start'] = requestHandles.start
handle['/upload'] = requestHandles.upload
handle['/show'] = requestHandles.show
server.start(router.route, handle)
