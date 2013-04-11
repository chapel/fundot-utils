# Fundot Utilities
Utilities for the functional library [Fundot](https://github.com/chapel/fundot)

[![build status](https://secure.travis-ci.org/chapel/fundot-utils.png)](http://travis-ci.org/chapel/fundot-utils)

# Example

``` js
var utils = require('fundot-utils')

console.log(utils.isArrayLike({}))
console.log(utils.isObject([]))
console.log(utils.slice([1, 2, 3], 2))
console.log(utils.toArray(1))
```

```
$ node example/utils.js
false
false
[ 3 ]
[ 1 ]
```

# Methods

``` js
var utils = require('fundot-utils')
```

## utils.isArrayLike(arg)

Checks if the given argument is an array like object. If the argument contains a length property that's type is a number, it will return true.

## utils.isObject(object)

Checks if the given argument is a true object. If the argument is a true object then it returns true.

## utils.slice(array, number)

Uses [Array.prototype.slice](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/slice) directly.

## utils.toArray(arguments)

Creates an array from given arguments and returns it.

# Install

With [npm](https://npmjs.org) do:

```
npm install fundot-utils
```

# License

MIT
