exports.isArrayLike = function isArrayLike(value) {
  return value && typeof value.length === 'number'
}

exports.isObject = function isObject(value) {
  try {
    return Object.getPrototypeOf(value) === Object.prototype
  } catch (_e) {
    return false
  }
}

exports.slice = function slice(array, num) {
  return Array.prototype.slice.call(array, num)
}

exports.toArray = function toArray(value) {
  if (arguments.length === 1) {
    return exports.isArrayLike(value) ? exports.slice(value) : [value]
  }

  var array = []

  for (var i = 0; i < arguments.length; i+=1) {
    var arg = arguments[i]
    array.push(
      exports.isArrayLike(arg) ?
      exports.slice(arg) :
      arg
    )
  }

  return array
}
