function convert(str) {
  let reg = /([a-z]*)([A-Z]*)/g
  return str.replace(reg, (m, s1, s2) => {
    console.log({ m, s1, s2 })
    return `${s1.toUpperCase()}${s2.toLowerCase()}`
  })
}
console.log(convert('AbCdef4546YuilM'))
