/*
 * @Author: zhuo
 * @Date: 2021-09-27 12:49:08
 * @LastEditTime: 2021-09-27 13:03:46
 */

let Human = function (param) {
  this.skill = (param && param.skill) || '保密'
  this.hobby = (param && param.hobby) || '保密'
}
Human.prototype = {
  getSkill: function () {
    return this.skill
  },
  getHobby: function () {
    return this.hobby
  }
}

let Named = function (name) {
  let that = this
  ;(function (name, that) {
    that.wholeName = name
    if (name.indexOf(' ') > -1) {
      that.FirstName = name.slice(0, name.indexOf(' '))
      that.secondName = name.slice(name.indexOf(' '))
    }
  })(name, that)
}

let Work = function (work) {
  let that = this
  ;(function (work, that) {
    switch (work) {
      case 'code':
        that.work = '工程师'
        that.workDescript = '工程师描述'
        break
      case 'UI':
      case 'UE':
        that.work = '设计师'
        that.workDescript = '设计师描述'
        break
      case 'teach':
        that.work = '教师'
        that.workDescript = '教师描述'
        break
      default:
        that.work = work
        that.workDescript = '无相关描述'
    }
  })(work, that)
}

Work.prototype.changeWork = function (work) {
  this.work = work
}
Work.prototype.changeDescript = function (sentence) {
  this.workDescript = sentence
}

let Person = function (name, work) {
  let _person = new Human()
  _person.name = new Named(name)
  _person.work = new Work(work)
  return _person
}

let person = new Person('xiao ming', 'code')
console.log(person.skill)
console.log(person.name.FirstName)
console.log(person.work.work)
console.log(person.work.workDescript)

person.work.changeDescript('更改职位描述')
console.log(person.work.workDescript)
