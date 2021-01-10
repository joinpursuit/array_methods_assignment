// Revisit the main lab and solve every problem using only the reduce method.
// Don't worry about all the tests that tell you that you must use
// such and such method. Using reduce will still allow you to pass all the tests.

/**
 * Takes in an array and returns the largest number.
 * @param {number[]} nums - array of numbers
 * @returns {number} Largest number in the array
 */

function largestNum(nums) {
    return nums.reduce((max, currentNum) => max > currentNum ? max : currentNum)
}

/**
 * Takes in an array and returns the sum of all the odd numbers.
 * @param {number[]} nums - array of numbers
 * @returns {number} Sum of all odd numbers.
 */

function oddSum(nums) {
    return nums.reduce((accum, num) => accum += num % 2 === 1 ? num : 0, 0)
}

/**
 * Write a `transpose`. This function should transpose a matrix.
 * @param {Array[]}
 * @returns {Array[]}
 */
// Exp Input:
//  let mtx = [
//             [1, 2],
//             [3, 4],
//             [5, 6]
//           ]

// transpose(mtx);

// Exp Output:
// // => [
//         [1, 3, 5],
//         [2, 4, 6]
//        ]

 function transpose(matrix) {
    // https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript
     return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
 };


module.exports = { largestNum, oddSum, transpose };

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
Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i)
    }
};

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

Array.prototype.myMap = function (callback) {
    let newArr = []
    this.myForEach((elem, i) => {
        newArr.push(callback(elem, i))
    })
    return newArr
};

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

Array.prototype.myFilter = function (callback) {
    let filteredArr = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i)) {
            filteredArr.push(this[i])
        }
    }
    return filteredArr
};

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

Array.prototype.myEvery = function (callback) {
    let allSatisfy = true
    this.myForEach((elem, i) => {
        if (!callback(elem, i)) {
            allSatisfy = false
        }
    })
    return allSatisfy
};

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

Array.prototype.myReduce = function (callback, initialValue = undefined) {
    let solution = initialValue === undefined ? this[0] : initialValue
    for (let i = initialValue === undefined ? 1: 0; i < this.length; i++) {
        solution = callback(solution, this[i], i)
    }
    return solution
};

/**
 * Write a `myJoin` function.
 * @method
 * @name Array#myJoin
 * @param {string} joiner - string to join elements
 * @returns {string}
 */

Array.prototype.myJoin = function (joiner) {    
    let str = ""
    for (let i = 0; i < this.length - 1; i++) {
        str += this[i]
        str += joiner === undefined ? "," : joiner
    }
    str += this[this.length - 1]
    return str
};

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

Array.prototype.mySlice = function (startIndex, startEndIndex) {
    const end = startEndIndex === undefined ? this.length : startEndIndex
    let arr = []
    for (let i = startIndex; i < Math.min(end, this.length); i++) {
        arr.push(this[i])
    }
    return arr
};


/**
 *Write a `myFlatten`. 
 This should take a multi-dimensional array and return it as one array.
 * @method
 * @name Array#myFlatten
 * @returns {Array}
 * Exp Input: [1, 2, [3, 4, 5, [6, 7, 8]]]
 * Exp Output: [1, 2, 3, 4, 5, 6, 7, 8]
 */

Array.prototype.myFlatten = function () {
    // https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays
    return this.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? toFlatten.myFlatten() : toFlatten);
      }, []);
};
