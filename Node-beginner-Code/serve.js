var http = require('http')
var url = require('url')
function start(route, handle) {
  function OnRequest(request, response) {
    var postData = ''

    var pathname = url.parse(request.url).pathname
    console.log('Request for ' + pathname + ' received.')

    route(handle, pathname, request, response)
  }

  http.createServer(OnRequest).listen(8888)
  console.log('Server has Started')
}

exports.start = start

// module.exports = start
