// Revisit the main lab and solve every problem using only the reduce method.
// Don't worry about all the tests that tell you that you must use
// such and such method. Using reduce will still allow you to pass all the tests.

/**
 * Takes in an array and returns the largest number.
 * @param {number[]} nums - array of numbers
 * @returns {number} Largest number in the array
 */

function largestNum (nums) {
  console.log(nums.sort((a, b) => b - a))
  return nums[0]
}

/**
 * Takes in an array and returns the sum of all the odd numbers.
 * @param {number[]} nums - array of numbers
 * @returns {number} Sum of all odd numbers.
 */

function oddSum (nums) {
  let sum = 0
  let newarray = nums.filter(num => num % 2 !== 0)

  newarray.forEach(num => {
    sum += num
  })
  return sum
}

/**
 * Write a `transpose`. This function should transpose a matrix.
 * @param {Array[]}
 * @returns {Array[]}
 */
// Exp Input:
//  let mtx = [     //elem      j    
//                  [1, 2],     0        
//                  [3, 4],     1   
//                  [5, 6]      2
//           ]

// transpose(mtx);

// Exp Output:
// // => [i 0, 1, 2  
//         [1, 3, 5],
//         [2, 4, 6]
//        ]

function transpose () {

}

module.exports = { largestNum, oddSum, transpose }

// You can write your own Array methods!

// ```js
// Array.prototype.sayHi = function() {
//   return "Hi"
// }
// ```
// Now every array that you write has a `sayHi` method that you can call.

// ```js
// let myArr = [1,2,3]
// myArr.sayHi() //returns "Hi"
// ```

// A couple of things to be aware of:
// 1. You must write the anonymous function in ES5 syntax.
// 2. To refer to the array that the method is being called on use the keyword `this`
//      This means that `this[0]` evaluates to the first element of the array
// 3. You can pass anything as an argument to a method (including another function often called a callback)

/**
 *  Using Array.prototype add a new method `myForEach`
 * that mimics the behavior of the built in `forEach`.
 * Remember forEach iterates through an array and calls
 * the passed in function with every element in the array as well as the index
 * as the second argument.
 * @callback cb
 * @param {*} element - value of array element
 * @param {number} index - index of array element
 *
 *
 * @method
 * @name Array#myForEach
 * @param {cb} callback - function to be called with each element
 * @returns {undefined}
 */
Array.prototype.myForEach = function (callback) {}

/**
 * Use your `myForEach` to add `myMap` to the Array prototype.
 *  `myMap` should behave the same as regular `map`.
 * @callback cb
 * @param {*} element - value of array element
 * @param {number} index - index of array element
 * @returns {*} This callback function could return anything.
 *
 * @method
 * @name Array#myMap
 * @param {cb} callback - function to be called with each element and index.
 * @returns {Array}
 */

Array.prototype.myMap = function () {}

/**
 * Write a `myFilter` that behaves the same as `filter`.
 * @callback cb
 * @param {*} element - value of array element
 * @param {number} index - index of array element
 * @returns {*} This callback function could return anything.
 *
 * @method
 * @name Array#myFilter
 * @param {cb} callback - function to be called with each element and index.
 * @returns {Array}
 */

Array.prototype.myFilter = function () {}

/**
 * Write a `myEvery` that behaves the same as `every`.
 * @callback cb
 * @param {*} element - value of array element
 * @param {number} index - index of array element
 * @returns {*} This callback function could return anything.
 *
 * @method
 * @name Array#myEvery
 * @param {cb} callback - function to be called with each element and index.
 * @returns {boolean}
 */

Array.prototype.myEvery = function () {}

/**
 * Write a `myReduce`.
 * It should use the first element in the array as the
 * initialValue if none is given.
 * @callback cb
 * @param {*} accumulator - The value returned from the last iteration.
 * @param {*} element - value of array element
 * @param {number} index - index of array element
 * @returns {*} This callback function could return anything.
 *
 * @method
 * @name Array#myReduce
 * @param {cb} callback - function to be called with each element and index.
 * @param {*} [initialValue] - optional argument to start as accumulator.
 * Otherwise defaults to first element in the array.
 * @returns {*}
 */

Array.prototype.myReduce = function (callback, initialValue = undefined) {}

/**
 * Write a `myJoin` function.
 * @method
 * @name Array#myJoin
 * @param {string} joiner - string to join elements
 * @returns {string}
 */

Array.prototype.myJoin = function () {}

/**
 * Write a `mySlice` function.
 * @method
 * @name Array#mySlice
 * @param {number} startIndex - starting index (inclusive)
 * @param {number} [startEndIndex] - ending index (exclusive) and defaults to end of array.
 * @returns {Array}
 *
 * Extra bonus add the negative input ability.
 */

Array.prototype.mySlice = function () {}

/**
 *Write a `myFlatten`. 
 This should take a multi-dimensional array and return it as one array.
 * @method
 * @name Array#myFlatten
 * @returns {Array}
 * Exp Input: [1, 2, [3, 4, 5, [6, 7, 8]]]
 * Exp Output: [1, 2, 3, 4, 5, 6, 7, 8]
 */

Array.prototype.myFlatten = function () {}
