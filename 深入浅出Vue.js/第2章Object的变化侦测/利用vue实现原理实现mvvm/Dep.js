function Dep() {
  this.subs = []
}

Dep.prototype.addSub = function(sub) {
  this.subs.push(sub)
}

Dep.prototype.notify = function() {
  console.log('属性变化通知Watcher执行更新视图操作')
  this.subs.forEach(sub => {
    sub.update()
  })
}

Dep.target = null
