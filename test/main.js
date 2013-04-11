var assert   = require('assert')
  , funUtils = require('../index')

describe('utilities', function () {
  describe('isArrayLike', function () {
    it('should return true if given arguments', function () {
      assert(funUtils.isArrayLike(arguments))
    })

    it('should return false if given non-array-like object', function () {
      assert(!funUtils.isArrayLike({}))
    })

    it('should return true if given an array', function () {
      assert(funUtils.isArrayLike([]))
    })
  })

  describe('isObject', function () {
    it('should return true if given an object', function () {
      assert(funUtils.isObject({}))
    })

    it('should return false if given an array', function () {
      assert(!funUtils.isObject([]))
    })

    it('should return false if given a primitive', function () {
      assert(!funUtils.isObject(1))
    })
  })

  describe('slice', function () {
    it('should return new array from existing array', function () {
      var arr = [1, 2, 3]
      assert.notEqual(funUtils.slice(arr), arr)
    })

    it('should return subset of array', function () {
      assert.deepEqual(funUtils.slice([1, 2, 3], 2), [1, 2, 3].slice(2))
    })
  })

  describe('toArray', function () {
    it('should return array from arguments object', function () {
      assert(funUtils.toArray(arguments).push)
    })

    it('should return array from non-array', function () {
      assert.deepEqual(funUtils.toArray(1), [1])
    })

    it('should return array from multiple arguments', function () {
      assert.deepEqual(funUtils.toArray(arguments, 1, 2, 3), [[], 1, 2, 3])
    })
  })
})

