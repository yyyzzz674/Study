/*
 * @Author: zhuo
 * @Date: 2021-09-28 13:08:24
 * @LastEditTime: 2021-09-28 13:17:14
 */
// 基于已经存在的模板对象克隆出新对象的模式
// 对模板引用类型的属性实质上进行了浅复制(引用类型属性共享)
// 可根据需求自行深复制

function prototypeExtend() {
  let F = function () {},
    args = arguments,
    i = 0,
    len = args.length
  for (; i < len; i++) {
    for (let j in args[i]) {
      F.prototype[j] = args[i][j]
    }
  }
  return new F()
}

let penguin = prototypeExtend(
  {
    speed: 20,
    swim: function () {
      console.log('游泳速度' + this.speed)
    }
  },
  {
    run: function (speed) {
      console.log('奔跑速度' + speed)
    }
  },
  {
    jump: function () {
      console.log('跳跃动作')
    }
  }
)

penguin.swim()
penguin.run(10)
penguin.jump()
