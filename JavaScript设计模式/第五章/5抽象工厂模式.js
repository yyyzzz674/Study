/*
 * @Author: zhuo
 * @Date: 2021-09-27 12:36:20
 * @LastEditTime: 2021-09-27 12:47:13
 */

// 抽象工厂方法
let VehicleFactory = function (subType, superType) {
  // 判断抽象工厂中是否有该抽象类
  if (typeof VehicleFactory[superType] === 'function') {
    // 缓存类
    function F() {}
    // 继承父类属性和方法
    F.prototype = new VehicleFactory[superType]()
    // 将子类constructor 指向子类
    subType.constructor = subType
    // 子类原型继承'父类'
    subType.prototype = new F()
  } else {
    throw new Error('未创建该抽象类')
  }
}

VehicleFactory.Car = function () {
  this.type = 'car'
}
VehicleFactory.Car.prototype = {
  getPrice: function () {
    return new Error('抽象方法不能调用')
  },
  getSpeed: function () {
    return new Error('抽象方法不能调用')
  }
}

VehicleFactory.Bus = function () {
  this.type = 'bus'
}
VehicleFactory.Bus.prototype = {
  getPrice: function () {
    return new Error('抽象方法不能调用')
  },
  getSpeed: function () {
    return new Error('抽象方法不能调用')
  }
}

VehicleFactory.Truck = function () {
  this.type = 'truck'
}
VehicleFactory.Truck.prototype = {
  getPrice: function () {
    return new Error('抽象方法不能调用')
  },
  getSpeed: function () {
    return new Error('抽象方法不能调用')
  }
}

let BMW = function (price, speed) {
  this.price = price
  this.speed = speed
}
VehicleFactory(BMW, 'Car')
BMW.prototype.getPrice = function () {
  return this.price
}
BMW.prototype.getSpeed = function () {
  return this.speed
}

let Lamborghini = function (price, speed) {
  this.price = price
  this.speed = speed
}
VehicleFactory(Lamborghini, 'Car')
Lamborghini.prototype.getPrice = function () {
  return this.price
}
Lamborghini.prototype.getSpeed = function () {
  return this.speed
}

let YUTONG = function (price, speed) {
  this.price = price
  this.speed = speed
}
VehicleFactory(YUTONG, 'Bus')
YUTONG.prototype.getPrice = function () {
  return this.price
}
YUTONG.prototype.getSpeed = function () {
  return this.speed
}

let BenzTruck = function (price, speed) {
  this.price = price
  this.speed = speed
}
VehicleFactory(BenzTruck, 'Truck')
BenzTruck.prototype.getPrice = function () {
  return this.price
}
BenzTruck.prototype.getSpeed = function () {
  return this.speed
}

let truck = new BenzTruck(100000, 1000)
console.log(truck.getPrice())
console.log(truck.getSpeed())
