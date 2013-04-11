var utils = require('fundot-utils')

console.log(utils.isArrayLike({}))
console.log(utils.isObject([]))
console.log(utils.slice([1, 2, 3], 2))
console.log(utils.toArray(1))
