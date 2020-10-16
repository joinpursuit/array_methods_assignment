// Revisit the main lab and solve every problem using only the reduce method.
// Don't worry about all the tests that tell you that you must use
// such and such method. Using reduce will still allow you to pass all the tests.

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
Array.prototype.myForEach = function (callback) {};

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

Array.prototype.myMap = function () {};

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

Array.prototype.myFilter = function () {};

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

Array.prototype.myEvery = function () {};

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

Array.prototype.myReduce = function () {};

/**
 * Write a `myJoin` function.
 * @method
 * @name Array#myJoin
 * @param {string} joiner - string to join elements
 * @returns {string}
 */

Array.prototype.myJoin = function () {};


/**
 * Write a `mySlice` function.
 * @method
 * @name Array#mySlice
 * @param {number} startIndex - starting index (inclusive)
 * @param {number} [startEndIndex] - ending index (exclusive) and defaults to end of array. 
 * @returns {Array}
 */

Array.prototype.mySlice = function () {};

