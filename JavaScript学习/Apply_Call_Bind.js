/*
 * 学习Apply、Call、Bind的用法
 * @Author: zhuo
 * @Date: 2020-07-16 19:06:54
 * @LastEditTime: 2020-07-16 20:18:42
 */

/*--------------------------------bind-------------------------------------------------*/
// bind() 方法允许我们明确指定对象方法中的 this 指向
/*--------------------------------example1---------------------------*/
// 全局变量 data
// var cars = {
//   data: [
//     { name: 'Samantha', age: 12 },
//     { name: 'Alexis', age: 14 }
//   ]
// }
// var user = {
//   // 局部变量 data
//   data: [
//     { name: 'T. Woods', age: 37 },
//     { name: 'P. Mickelson', age: 43 }
//   ],
//   showData: function () {
//     var randomNum = ((Math.random() * 2) | 0) + 1 - 1 // random number between 0 and 1
//     console.log(this.data[randomNum].name + ' ' + this.data[randomNum].age)
//   }
// }

// //
// var showDataVar = user.showData.bind(cars)

// showDataVar() // Samantha 12 (来自全局变量数组而非局部变量数组)​

/*--------------------------------example2---------------------------*/

// function greet(gender, age, name) {
//   // if a male, use Mr., else use Ms.​
//   var salutation = gender === 'male' ? 'Mr. ' : 'Ms. '

//   if (age > 25) {
//     return 'Hello, ' + salutation + name + '.'
//   } else {
//     return 'Hey, ' + name + '.'
//   }
// }

// // 在 greet 函数中我们可以传递 null, 因为函数中并未使用到 this 关键字
// var greetAnAdultMale = greet.bind(null, 'male', 45)
// console.log(greetAnAdultMale('John Hartlove')) // "Hello, Mr. John Hartlove."​

// var greetAYoungster = greet.bind(null, '', 16)
// console.log(greetAYoungster('Alex')) // "Hey, Alex."​
// console.log(greetAYoungster('Emma Waterloo')) // "Hey, Emma Waterloo."​

/*--------------------------------bind-------------------------------------------------*/

/*--------------------------------apply-------------------------------------------------*/
// 作为 JavaScript 中最常用的两个函数方法, apply 和 call 允许我们借用函数以及在函数调用中指定 this 指向.
// 除此外, apply 函数允许我们在执行函数时传入一个参数数组, 以此使函数在执行可变参数的函数时可以将每个参数单独的传入函数并得到处理.

/*--------------------------------example3---------------------------*/
// // 全局变量​
// var avgScore = 'global avgScore'
// // 全局函数
// function avg(arrayOfScores) {
//   // 分数相加并返回结果
//   var sumOfScores = arrayOfScores.reduce(function (prev, cur, index, array) {
//     return prev + cur
//   })
//   // 这里的 "this" 会被绑定到全局对象上, 除非使用 Call 或者 Apply 明确指定 this 的指向
//   this.avgScore = sumOfScores / arrayOfScores.length
// }
// var gameController = {
//   scores: [20, 34, 55, 46, 77],
//   avgScore: null
// }
// // 调用 avg 函数, this 指向 global 对象​
// avg(gameController.scores)
// // 证明 avgScore 已经被设置为 global 对象的属性​
// console.log(global.avgScore) // 46.4​
// console.log(gameController.avgScore) // null​

// // 重置全局变量
// avgScore = 'global avgScore'
// // 使用 call() 方法明确将 "this" 绑定到 gameController 对象​
// avg.call(gameController, gameController.scores)
// console.log(avgScore) // 全局变量 avgScore 的值​
// console.log(gameController.avgScore) // 46.4

/*--------------------------------example4---------------------------*/

// 定义一个方法
// var clientData = {
//   id: 094545,
//   fullName: 'Not Set',
//   // clientData 对象中的一个方法
//   setUserName: function (firstName, lastName) {
//     this.fullName = firstName + ' ' + lastName
//   }
// }

// function getUserInput(firstName, lastName, callback, callbackObj) {
//   // 使用 apply 方法将 "this" 绑定到 callbackObj 对象
//   callback.apply(callbackObj, [firstName, lastName])
// }

// getUserInput('Barack', 'Obama', clientData.setUserName, clientData)
// console.log(clientData.fullName) // Barack Obama​

/*--------------------------------call-------------------------------------------------*/

/*--------------------------------example5---------------------------*/
// function doSomething() {
//   var args = Array.prototype.slice.call(arguments)
//   console.log(args)
// }
// doSomething('Water', 'Salt', 'Glue') // ["Water", "Salt", "Glue"]​

/*--------------------------------example6---------------------------*/

// var gameController = {
//   scores: [20, 34, 55, 46, 77],
//   avgScore: null,
//   players: [
//     { name: 'Tommy', playerID: 987, age: 23 },
//     { name: 'Pau', playerID: 87, age: 33 }
//   ]
// }
// var appController = {
//   scores: [900, 845, 809, 950],
//   avgScore: null,
//   avg: function () {
//     var sumOfScores = this.scores.reduce(function (prev, cur, index, array) {
//       return prev + cur
//     })
//     this.avgScore = sumOfScores / this.scores.length
//   }
// }
// // Note that we are using the apply() method, so the 2nd argument has to be an array​
// appController.avg.apply(gameController)
// console.log(gameController.avgScore) // 46.4​
// // appController.avgScore is still null; it was not updated, only gameController.avgScore was updated​
// console.log(appController.avgScore) // null​

// appController.maxNum = function () {
//   this.avgScore = Math.max.apply(null, this.scores)
// }
// appController.maxNum.apply(gameController, gameController.scores)
// console.log(gameController.avgScore) // 77​
// console.log(appController.avgScore) // null​

/*--------------------------------example7---------------------------*/
var students = [
  'Peter Alexander',
  'Michael Woodruff',
  'Judy Archer',
  'Malcolm Khan'
]
// 不定义参数, 因为我们可以传递任意多个参数进入该函数​
function welcomeStudents() {
  var args = Array.prototype.slice.call(arguments)
  var lastItem = args.pop()
  console.log('Welcome ' + args.join(', ') + ', and ' + lastItem + '.')
}
welcomeStudents.apply(null, students)
// Welcome Peter Alexander, Michael Woodruff, Judy Archer, and Malcolm Khan.

// 三个函数存在的区别, 用一句话来说的话就是: bind是返回对应函数, 便于稍后调用; apply, call则是立即调用.
// 除此外, 在 ES6 的箭头函数下, call 和 apply 的失效, 对于箭头函数来说:
// 函数体内的 this 对象, 就是定义时所在的对象, 而不是使用时所在的对象;
// 不可以当作构造函数, 也就是说不可以使用 new 命令, 否则会抛出一个错误;
// 不可以使用 arguments 对象, 该对象在函数体内不存在. 如果要用, 可以用 Rest 参数代替;
// 不可以使用 yield 命令, 因此箭头函数不能用作 Generator 函数;
