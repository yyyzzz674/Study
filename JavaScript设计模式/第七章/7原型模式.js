/*
 * @Author: zhuo
 * @Date: 2021-09-28 12:55:49
 * @LastEditTime: 2021-09-28 13:07:05
 */
let LoopImages = function (imgArr, container) {
  this.imagesArray = imgArr
  this.container = container
}

LoopImages.prototype = {
  createImage: function () {
    console.log('LoopImages createImage function')
  },
  changeImage: function () {
    console.log('LoopImages changeImage function')
  }
}

let SlideLoopImg = function (imgArr, container) {
  LoopImages.call(this, imgArr, container)
}

SlideLoopImg.prototype = new LoopImages()

SlideLoopImg.prototype.changeImage = function () {
  console.log('SlideLoopImg changeImage function')
}

let FadeLoopImg = function (imgArr, container, arrow) {
  LoopImages.call(this, imgArr, container)
  this.arrow = arrow
}
FadeLoopImg.prototype = new LoopImages()
FadeLoopImg.prototype.changeImage = function () {
  console.log('FadeLoopImg changeImage function')
}

let fadeImg = new FadeLoopImg(['01', '02', '03'], 'slide', ['left', 'right'])
fadeImg.changeImage()
console.log(fadeImg.container)

// console.log(fadeImg.getImageLength()) //TypeError
// console.log(fadeImg.getContainer()) //TypeError

LoopImages.prototype.getImageLength = function () {
  return this.imagesArray.length
}
FadeLoopImg.prototype.getContainer = function () {
  return this.container
}

console.log(fadeImg.getImageLength())
console.log(fadeImg.getContainer())
