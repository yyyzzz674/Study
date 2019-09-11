// 去掉字符串中的空格
function trimStr(str, type) {
  const regObj = {
    left: /^\s+/,
    middle: /(^\s+)(\S)|\s+(\S)/g,
    right: /\s+$/,
    both: /(^\s+)|(\s+$)/g,
    all: /\s+/g
  }
  const reg = type && regObj[type] ? regObj[type] : regObj.both
  const replaceStr = type === 'middle' ? (m, $1, $2, $3) => ($1 ? m : $3) : ''
  return str.replace(reg, replaceStr)
}
console.log(trimStr('  aa bb  c d d ee  ', 'middle'))
