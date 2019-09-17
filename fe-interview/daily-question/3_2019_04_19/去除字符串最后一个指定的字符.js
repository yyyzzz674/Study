/**
 *
 *
 * @param {*} string '字符串'
 * @param {*} delItem '要删除的字符'
 */
function delLastItem(string, delItem) {
  let arr = string.split('')
  arr.map((item, index) => {
    if (delItem === item) {
      arr.splice(index, 1)
    }
  })
  console.log(136, arr.join(''))
}

delLastItem('12323sdaas2', 'a') //输出 '12323sdas2'
