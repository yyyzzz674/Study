var querystring = require('querystring')
var fs = require('fs')
var formidable = require('formidable')
var path = require('path')
function start(request, response) {
  console.log('Request handle "start" was called')
  var body =
    '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" ' +
    'content="text/html; charset=UTF-8" />' +
    '</head>' +
    '<body>' +
    '<form action="/upload" enctype="multipart/form-data" ' +
    'method="post">' +
    '<input type="file" name="upload">' +
    '<input type="submit" value="Upload file" />' +
    '</form>' +
    '</body>' +
    '</html>'
  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.write(body)
  response.end()
}
function upload(request, response) {
  console.log('Request handle "upload" was called')
  var form = new formidable.IncomingForm()
  form.uploadDir = path.join(__dirname, '/tmp')
  form.parse(request, function(error, fields, files) {
    if (error) throw error
    console.log('parsing done')
    var oldpath = files.upload.path
    var newpath = path.join(path.dirname(oldpath), 'test.png')
    fs.renameSync(oldpath, newpath)
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.write('receiced image:<br/>')
    response.write("<img src='/show'/>")
    response.end()
  })
}
function show(request, response) {
  console.log('Request handle "upload" was called')
  // 读取本地的图片文件
  fs.readFile('./tmp/test.png', 'binary', function(error, file) {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/plain' })
      response.write(error + '\n')
      response.end()
    } else {
      response.writeHead(200, { 'Content-Type': 'image/png' })
      response.write(file, 'binary')
      response.end()
    }
  })
}
exports.start = start
exports.upload = upload
exports.show = show
