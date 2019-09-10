let twoSum = function(array, target) {
  let map = {}
  for (let index = 0; index < array.length; index++) {
    let elem = array[index]
    if (map[elem] !== undefined) {
      return [map[elem], index]
    } else {
      map[target - elem] = index
    }
  }
}

console.log(twoSum([1, 2, 3, 4, 5, 6], 8))
