/**
 * Takes in an array of numbers and returns the sum of all elements.
 * Must use forEach
 * @param {number[]} nums
 * @returns {number} Sum of all numbers
 */

const sumArray = (nums) => {
  let sum = 0;
  nums.forEach((i) => {
    sum = sum + i;
  });
  return sum;
};

/**
 * Takes in an array of numbers and returns the amount of zeros that occur in it.
 * @param {numbers[]} nums
 * @returns {number} Number of zeros
 * Must use forEach
 */

const zeroCount = (nums) => {
  let zeroes = 0;
  nums.forEach((i) => {
    if (i === 0) {
      zeroes++;
    }
  });
  return zeroes;
};

/**
 * Takes in an array of numbers and returns a new array where each
 * element has been incremented by 10.
 * Must use map.
 * @param {number[]} nums
 * @returns {number[]} Array with each previous number plus 10.
 */

const plusTen = (nums) => {
  let catcher = nums.map((num) => {
    return num + 10;
  });
  return catcher;
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
  let item = items.map((i) => {
    if (typeof i === "string") {
      return i;
    } else {
      return "";
    }
  });
  return item;
};

/**
 * Takes in an array and returns a new array with only the even elements.
 * Must use filter
 * @param {number[]} nums
 * @returns {number[]} Only even valued elements
 */

const onlyEvens = (nums) => {
  let even = nums.filter((num) => {
    if (num % 2 === 0) {
      return true;
    }
  });
  return even;
};

/**
 * Takes in an array and returns a new array with only the elements
 *  that are numbers.
 * Must use filter
 * @param {Array} items
 * @returns {number[]} Only number items should remain.
 */

const numbersOnly = (items) => {
  let onlyNumbers = items.filter((num) => {
    if (typeof num === "number") {
      return true;
    }
  });
  return onlyNumbers;
};

/**
 * Takes in an array and checks if all elements in the array are the same.
 * Must use every
 * @param {Array} items
 * @returns {boolean} Whether or not all elements are the same.
 */

const isAllSame = (items) => {
  // let checker = items[0]
  let allSame = items.every((same) => {
    if (items[0] === same) {
      return true;
    }
  });
  return allSame;
};

/**
 * Takes in an array and returns whether or not all elements in the array are odd.
 * @param {number[]} nums
 * @returns {boolean} All odd?
 */

const isAllOdd = (nums) => {
  let allOdd = nums.every((num) => {
    if (num % 2 === 1) {
      return true;
    }
  });
  return allOdd;
};

/**
 * Takes in an array of numbers and a target.
 * Returns the number of times the target occurs in the array.
 * @param {number[]} nums
 * @param {number} target
 * @returns {number} Number of target occurrences
 */

const targetCount = (nums, target) => {
  let totalTarget = 0;
  let newArr = nums.forEach((num) => {
    if (num === target) {
      totalTarget++;
    }
  });
  return totalTarget;
};

/**
 * Takes in an array of elements and returns an Object that contains
 * the count of each element.
 * @param {Array} items
 * @returns {Object} A mapping of elements to their occurrence count.
 */

const counterObject = (items) => {
  let i = 0;
  let newObj = {}
  let objCounter = items.forEach((key) => {
    return newObj[key] = (newObj[key] || 0) + 1
      
  })
  return newObj
};

/**
 * Takes in an array of numbers and returns a new array with each element doubled.
 * @param {number[]} nums
 * @returns {number[]} Each element has been doubled
 */

const doubled = (nums) => {
  let doubleNums = nums.map((num) => {
    return num * 2;
  });
  return doubleNums;
};

/**
 * Takes in an array and returns whether every number is less than 20 even after
 * being tripled.
 * @param {number[]} nums
 * @returns {boolean} Each number times 3 less than 20 ?
 */

const tripledAndLessThan20 = (nums) => {
  let lessThan20 = nums.every((num) => {
    return num * 3 < 20;
  });
  return lessThan20;
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
  let newArr = nums.filter((num) => {
    if (num % divisor === 0) {
      return true;
    }
  });
  return newArr;
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
  let newArr = [];
  let i = 0;
  let newHold = nums.map((num) => {
    newArr[i] = num * i;
    i++;
    return;
  });
  return newArr;
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
  let positiveEven = nums.every((num) => {
    if (num % 10 !== 0 && num % 2 === 0 && num > 0) {
      return true;
    }
  });
  return positiveEven;
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
  let newArr = [];
  let upperCase = items.map((i) => {
    if (typeof i === "string") {
      newArr.push(i.toUpperCase());
      return;
    }
  });
  return newArr;
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
