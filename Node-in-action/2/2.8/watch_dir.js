const path = require('path')
const fs = require('fs')
const Watcher = require('./Watcher')
const watchDir = path.join(__dirname, 'watch')
const processedDir = path.join(__dirname, 'done')
const watcher = new Watcher(watchDir, processedDir)

watcher.on('process', file => {
  console.log(watcher.watchDir)
  const watchFile = `${watchDir}/${file}`
  const processedFile = `${processedDir}/${file.toLowerCase()}`
  fs.rename(watchFile, processedFile, err => {
    if (err) throw err
  })
})
watcher.start()
