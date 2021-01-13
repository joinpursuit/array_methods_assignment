/**
 * Takes in an array of numbers and returns the sum of all elements.
 * Must use forEach
 * @param {number[]} nums
 * @returns {number} Sum of all numbers
 */

const sumArray = (nums) => {
  return nums.reduce((sum, n) => sum + n, 0)
  // let sum = 0
  // nums.forEach(n => sum += n)
  // return sum
};

/**
 * Takes in an array of numbers and returns the amount of zeros that occur in it.
 * @param {numbers[]} nums
 * @returns {number} Number of zeros
 * Must use forEach
 */

const zeroCount = (nums) => {
  return nums.reduce((count, n) => n === 0 ? ++count : count, 0)
  // let count = 0
  // nums.forEach(n => {
  //   if(n === 0){
  //     count++
  //   }
  // })
  // return count
};

/**
 * Takes in an array of numbers and returns a new array where each
 * element has been incremented by 10.
 * Must use map.
 * @param {number[]} nums
 * @returns {number[]} Array with each previous number plus 10.
 */

const plusTen = (nums) => {
  return nums.reduce((arr, n) => {
    arr.push(n + 10)
    return arr
  }, [])
  // return nums.map(n => n + 10)
};

/**
 * Takes in an array and returns a new array where every non-string
 * element is converted to an empty string.
 * Must use map.
 * Exp Input: ["a", 123, "b", "c", {name: "cat"}]
 * Output: ["a", "", "b", "c", ""]
 * @param {Array} items
 * @returns {string[]} All strings remain, all non strings are now empty strings.
 */

const stringsOnly = (items) => {
  return items.reduce((arr, i) => {
    if(typeof i === "string"){
      arr.push(i)
    } else {
      arr.push("")
    }
    return arr
  }, [])
  // return items.map(i => {
  //   if(typeof i === "string"){
  //     return i
  //   } else {
  //     return ""
  //   }
  // })
};

/**
 * Takes in an array and returns a new array with only the even elements.
 * Must use filter
 * @param {number[]} nums
 * @returns {number[]} Only even valued elements
 */

const onlyEvens = (nums) => {
  return nums.reduce((arr, n) => {
    if(n % 2 === 0){
      arr.push(n)
    }
    return arr
  }, [])
  // return nums.filter(n => n % 2 === 0)
};

/**
 * Takes in an array and returns a new array with only the elements
 *  that are numbers.
 * Must use filter
 * @param {Array} items
 * @returns {number[]} Only number items should remain.
 */

const numbersOnly = (items) => {
  return items.reduce((arr, i) => {
    if(typeof i === "number"){
      arr.push(i)
    }
    return arr
  }, [])
  // return items.filter(n => typeof n === "number")
};

/**
 * Takes in an array and checks if all elements in the array are the same.
 * Must use every
 * @param {Array} items
 * @returns {boolean} Whether or not all elements are the same.
 */

const isAllSame = (items) => {
  return items.reduce((same, i) => same && i === items[0], true)
  // return items.every(i => i === items[0])
};

/**
 * Takes in an array and returns whether or not all elements in the array are odd.
 * @param {number[]} nums
 * @returns {boolean} All odd?
 */

const isAllOdd = (nums) => {
  return nums.reduce((odd, n) => odd && n % 2 === 1, true)
  // return nums.every(n => n % 2 === 1)
};

/**
 * Takes in an array of numbers and a target.
 * Returns the number of times the target occurs in the array.
 * @param {number[]} nums
 * @param {number} target
 * @returns {number} Number of target occurrences
 */

const targetCount = (nums, target) => {
  return nums.reduce((count, n) => n === target ? ++count : count, 0)
  // let count = 0
  // nums.forEach(n => {
  //   if(n === target){
  //     count++
  //   }
  // })
  // return count
};

/**
 * Takes in an array of elements and returns an Object that contains
 * the count of each element.
 * @param {Array} items
 * @returns {Object} A mapping of elements to their occurrence count.
 */

const counterObject = (items) => {
  return items.reduce((newObj, i) => {
    if(newObj.hasOwnProperty(i)){
      newObj[i]++
    } else {
      newObj[i] = 1
    }
    return newObj
  }, {})
  // let newObj = {}
  // items.forEach(i => {
  //   if(newObj.hasOwnProperty(i)){
  //     newObj[i]++
  //   } else {
  //     newObj[i] = 1
  //   }
  // })
  // return newObj
};

/**
 * Takes in an array of numbers and returns a new array with each element doubled.
 * @param {number[]} nums
 * @returns {number[]} Each element has been doubled
 */

const doubled = (nums) => {
  return nums.reduce((arr, n) => {
    arr.push(n * 2)
    return arr
  }, [])
  // return nums.map(n => n * 2)
};

/**
 * Takes in an array and returns whether every number is less than 20 even after
 * being tripled.
 * @param {number[]} nums
 * @returns {boolean} Each number times 3 less than 20 ?
 */

const tripledAndLessThan20 = (nums) => {
  return nums.reduce((less, n) => less && n * 3 < 20, true)
  // return nums.every(n => n * 3 < 20)
};

/**
 * Takes in a divisor and an array of numbers.
 * Return a new array of every element that can be evenly divided
 * by divisor.
 * @param {number} divisor
 * @param {number[]} nums
 * @returns {number[]} Numbers evenly divided by divisor.
 */

const divisibleBy = (divisor, nums) => {
  return nums.reduce((arr, n) => {
    if(n % divisor === 0){
      arr.push(n)
    }
    return arr
  }, [])
  // return nums.filter(n => n % divisor === 0)
};

/**
 * Takes in an array and returns a new array where each element
 * has been multiplied by it's index.
 * Exp Input: [6,7,8,9]
 * Output: [0,7,16,27]
 * @param {number[]} nums
 * @returns {number[]} Numbers times their index
 */

const numberTimesIdx = (nums) => {
  return nums.reduce((arr, n, i) => {
    arr.push(n * i)
    return arr
  }, [])
  // return nums.map((n, i) => n * i)
};

/**
 * Takes in an array of numbers and returns whether or not every value
 * in the array is a positive even number that doesn't end it 0.
 * Exp Input: [2,4,6,8,12]
 * Output: true
 *
 * Exp Input: [2,4,6,8,10]
 * Output: false
 *
 * @param {number[]} nums
 * @returns {boolean} Are all numbers positive, even, and not ending in 0.
 */

const arePositiveEvenAndNonZeroEnding = (nums) => {
  return nums.reduce((check, n) => check && n > 0 && n % 2 === 0 && n % 10 !== 0, true)
  // return nums.every(n => n > 0 && n % 2 === 0 && n % 10 !== 0)
};

/**
 * Takes in an array of elements.
 * Returns a new array containing all of the string elements, but now uppercase.
 * Exp Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
 * Output: ["CAT", "DOG", "BEAR"]
 * @param {Array} items
 * @returns {string[]} All strings uppercase.
 */

const stringsAndCaps = (items) => {
  return items.reduce((strArr, i) => {
    if(typeof i === "string"){
      strArr.push(i.toUpperCase())
    }
    return strArr
  }, [])
  // return items.filter(i => typeof i === "string").map(i => i.toUpperCase())
};

module.exports = {
  sumArray,
  zeroCount,
  plusTen,
  stringsOnly,
  onlyEvens,
  numbersOnly,
  isAllSame,
  isAllOdd,
  targetCount,
  counterObject,
  doubled,
  tripledAndLessThan20,
  divisibleBy,
  numberTimesIdx,
  arePositiveEvenAndNonZeroEnding,
  stringsAndCaps,
};
