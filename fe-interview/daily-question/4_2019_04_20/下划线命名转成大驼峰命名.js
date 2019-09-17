let str = 'c_ed_gh_ijk'
function toCamel(str) {
  console.log(str.match(/(_)(\w)/g))
  str = str.replace(/_(\w)/g, (match, $1) => {
    console.log(match)
    return `${$1.toUpperCase()}`
  })
  return str
}
console.log(toCamel(str))
