function mixin(receiver, supplier) {
  Object.keys(supplier).forEach(function(key) {
    console.log(key)
    receiver[key] = supplier[key]
  })
  return receiver
}

let person = {
  name: 'yz',
  gender: {
    type: 'male'
  }
}

let person1 = {}
console.log({ person1 })
mixin(person1, person)
console.log({ person1 })
person['gender']['type'] = 'female'
console.log({ person1 })
