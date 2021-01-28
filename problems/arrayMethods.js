/**
 * Takes in an array of numbers and returns the sum of all elements.
 * Must use forEach
 * @param {number[]} nums
 * @returns {number} Sum of all numbers
 */

const sumArray = (nums) => {
  let sum = 0
  nums.forEach((num) => {
    sum = sum + num
  })
  return sum
};

console.log(sumArray([13, 2, 5, 5]))

  // let sum = 0
  // nums.forEach((num) => {
  //   sum = sum + num
  // })
  // return sum

/**
 * Takes in an array of numbers and returns the amount of zeros that occur in it.
 * @param {numbers[]} nums
 * @returns {number} Number of zeros
 * Must use forEach
 */

const zeroCount = (nums) => {
  let zeros = 0
  nums.forEach((num) => {
    if (num === 0) {
      zeros += 1
    }
  })
  return zeros
};

console.log(zeroCount([13, 0, 5, 0]))

/**
 * Takes in an array of numbers and returns a new array where each
 * element has been incremented by 10.
 * Must use map.
 * @param {number[]} nums
 * @returns {number[]} Array with each previous number plus 10.
 */

const plusTen = (nums) => {
  let addTen = nums.map((num) => {
    return num + 10
  })
  return addTen
};

console.log(plusTen([13, 0, 5, 0]))

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
  let newArray = items.map((item) => {
    if (typeof item === "string") {
      return item
    }
    else {
      return ""
    }
  })
  return newArray
};

console.log(stringsOnly(["a", 123, "b", "c", {name: "cat"}]))

/**
 * Takes in an array and returns a new array with only the even elements.
 * Must use filter
 * @param {number[]} nums
 * @returns {number[]} Only even valued elements
 */

const onlyEvens = (nums) => {
  // let evenNumber = nums.filter(num =>
  //   num % 2 === 0
  // )
  // return evenNumber
  let evenNumber = nums.filter((num) => {
    if (num % 2 === 0) {
      return true
    }
  })
  return evenNumber
};

console.log(onlyEvens([1, 2, 3, 4, 5]))

/**
 * Takes in an array and returns a new array with only the elements
 *  that are numbers.
 * Must use filter
 * @param {Array} items
 * @returns {number[]} Only number items should remain.
 */

const numbersOnly = (items) => {
  let onlyNumbers = items.filter((item) => {
    if (typeof item === "number") {
      return true
    }
  })
  return onlyNumbers
};

console.log(numbersOnly(["cat", "dog"]))
console.log(numbersOnly([1, 2, 3]))

/**
 * Takes in an array and checks if all elements in the array are the same.
 * Must use every
 * @param {Array} items
 * @returns {boolean} Whether or not all elements are the same.
 */

const isAllSame = (items) => {
  let same = items.every((item) => {
    if (items[0] === item) {
      return true
    }
  })
  return same
};

console.log(isAllSame(["cat", "cat", "cat", "cat"]))
console.log(isAllSame([1, 2, 3]))
console.log(isAllSame(["cat", "dog"]))
console.log(isAllSame([1, 1, 1]))




/**
 * Takes in an array and returns whether or not all elements in the array are odd.
 * @param {number[]} nums
 * @returns {boolean} All odd?
 */

const isAllOdd = (nums) => {
  let odds = nums.every((num) => {
    if (num % 2 === 0) {
      return false
    }
    else {
      return true
    }
  })
  return odds
};

console.log(isAllOdd([1, 3, 5, 7]))
console.log(isAllOdd([0, 1, 3, 2]))

/**
 * Takes in an array of numbers and a target.
 * Returns the number of times the target occurs in the array.
 * @param {number[]} nums
 * @param {number} target
 * @returns {number} Number of target occurrences
 */

const targetCount = (nums, target) => {
  let targetNumbers = 0
  nums.forEach((num) => {
    if (target === num) {
      targetNumbers++
    }
  })
  return targetNumbers
};

console.log(targetCount([13, 0, 5, 5, 0], 0))
console.log(targetCount([], [2]))

/**
 * Takes in an array of elements and returns an Object that contains
 * the count of each element.
 * @param {Array} items
 * @returns {Object} A mapping of elements to their occurrence count.
 */

const counterObject = (items) => {
  // take in a group of items (array)
  // we want to know how many of each item there are
  // create an empty object
  let newObject = {}
  // iterate through the array of items
  // we store these items and amounts in key/value pairs inside the object
  // first iteration stores each key into the object with a value of 0
  items.forEach((item) => {
    if (newObject[item] === undefined) {
      newObject[item] = 1
    } //{1:3, 2:1, 3:1}
    else {
      newObject[item] ++
    }
  })

  return newObject
};

console.log(counterObject([1, 1, 2, 1, 3]))

/**
 * Takes in an array of numbers and returns a new array with each element doubled.
 * @param {number[]} nums
 * @returns {number[]} Each element has been doubled
 */

const doubled = (nums) => {
  // function multiplyByTwo(num) {      //this block of code creates a seperate function that doubles the
  //   return num * 2                   //item plugged into the parameter. 
  // }                                  //The code then uses this function to plug into nums.map. This strategy
                                        //might be used to apply the double function to different maps?
  // let doubleNum = nums.map(multiplyByTwo)

  // return doubleNum

  let doubleNum = nums.map((num) => {   //this block of code creates one function with map, and applies
    return num * 2                      //the function to every item in nums
  })
  return doubleNum
};

console.log(doubled([1, 2, 3, 4, 5]))
/**
 * Takes in an array and returns whether every number is less than 20 even after
 * being tripled.
 * @param {number[]} nums
 * @returns {boolean} Each number times 3 less than 20 ?
 */

const tripledAndLessThan20 = (nums) => {
  let tripleLess20 = nums.every((num) => {
    return (num * 3) < 20
  })
  return tripleLess20
};

console.log(tripledAndLessThan20([1, 10, 5, 8, 6, 3, 19]))
console.log(tripledAndLessThan20([1, 5, 3, 6]))

/**
 * Takes in a divisor and an array of numbers.
 * Return a new array of every element that can be evenly divided
 * by divisor.
 * @param {number} divisor
 * @param {number[]} nums
 * @returns {number[]} Numbers evenly divided by divisor.
 */

const divisibleBy = (divisor, nums) => {
  let divide = nums.filter((num) => {
    return num % divisor === 0
  })
  return divide
};

console.log(divisibleBy(2, [1, 2, 3, 4, 5]))
console.log(divisibleBy(2, [2, 4, 6, 8, 10]))

/**
 * Takes in an array and returns a new array where each element
 * has been multiplied by it's index.
 * Exp Input: [6,7,8,9]
 * Output: [0,7,16,27]
 * @param {number[]} nums
 * @returns {number[]} Numbers times their index
 */

const numberTimesIdx = (nums) => {
  let index = 0;
  
  return nums.map((num) => num * index++)          // Is there another way of doing this? 
};                                                 // (besides traditional function definition)

console.log(numberTimesIdx([6,7,8,9]))

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
  return nums.every((num) => {
    return num % 10 !== 0 && num % 2 === 0 && num >= 0  // is there another way to determine if all positive
  })
  
};

console.log(arePositiveEvenAndNonZeroEnding([10]))
console.log(arePositiveEvenAndNonZeroEnding([2, 4, 6, 8]))
console.log(arePositiveEvenAndNonZeroEnding([2, 4, -6, 6, 8]))
console.log(arePositiveEvenAndNonZeroEnding([2, 4, 6, 8, 10]))

/**
 * Takes in an array of elements.
 * Returns a new array containing all of the string elements, but now uppercase.
 * Exp Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
 * Output: ["CAT", "DOG", "BEAR"]
 * @param {Array} items
 * @returns {string[]} All strings uppercase.
 */

const stringsAndCaps = (items) => {
  let newArr = items.filter((item) => {
    return typeof(item) === typeof("string")
  })
  let capsArr = newArr.map((item) => {
    return item.toUpperCase()
  })
  return capsArr
};

console.log(stringsAndCaps([{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]))

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
