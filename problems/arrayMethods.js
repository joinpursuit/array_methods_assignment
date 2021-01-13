/**
 * Takes in an array of numbers and returns the sum of all elements.
 * Must use forEach
 * @param {number[]} nums
 * @returns {number} Sum of all numbers
 */

const sumArray = (nums) => {
  let sum = 0; //we need to use sum because we need somewhere to start.
  nums.forEach((num) => {
    sum += num;
  });
  return sum;
};

// console.log(sumArray([1, 2, 3]))
/**
 * Takes in an array of numbers and returns the amount of zeros that occur in it.
 * @param {numbers[]} nums
 * @returns {number} Number of zeros
 * Must use forEach
 */

const zeroCount = (nums) => {
  let array = [];
  nums.forEach((num) => {
    if (num === 0) {
      array.push(num);
    }
  });
  return array.length;
};
// console.log(zeroCount([1, 2, 3]))
/**
 * Takes in an array of numbers and returns a new array where each
 * element has been incremented by 10.
 * Must use map.
 * @param {number[]} nums
 * @returns {number[]} Array with each previous number plus 10.
 */

const plusTen = (nums) => {
  let newArr = nums.map((num) => {
    return (num += 10);
  });
  return newArr;
};
// console.log(plusTen([1, 2, 3]))

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
  let newArr = items.map((item) => {
    if (typeof item === "string") {
      return item;
    } else {
      return "";
    }
  });
  return newArr;
};
// console.log(stringsOnly(["a", 123, "b", "c", { name: "cat" }]));
/**
 * Takes in an array and returns a new array with only the even elements.
 * Must use filter
 * @param {number[]} nums
 * @returns {number[]} Only even valued elements
 */

const onlyEvens = (nums) => {
  let evens = nums.filter((num) => {
    if (num % 2 === 0) {
      return true;
    }
  });
  return evens;
};
// console.log(onlyEvens([13, 0, 5, 0]))
/**
 * Takes in an array and returns a new array with only the elements
 *  that are numbers.
 * Must use filter
 * @param {Array} items
 * @returns {number[]} Only number items should remain.
 */

const numbersOnly = (items) => {
  let numbers = items.filter((item) => {
    if (typeof item === "number") {
      return true;
    }
  });
  return numbers;
};
// console.log(["cat", "dog"])

/**
 * Takes in an array and checks if all elements in the array are the same.
 * Must use every
 * @param {Array} items
 * @returns {boolean} Whether or not all elements are the same.
 */

// const isAllSame = (items) => items.every((item, i, arr)=> arr[0]=== item)
const isAllSame = (items) => {
  return items.every((item, i, arr) => arr[0] === item);
};

// const isAllSame = (items) => {
// let samesies = items.every((item, i, arr)=>{
//   if(arr[0] === item){ //items[0] does work as well
//     return true
//   }
// })
// return samesies
// console.log(isAllSame(["cat", "cat", "cat", "cat"]));
// console.log(isAllSame(["cat", "cat", "dog", "cat"]));
/**
 * Takes in an array and returns whether or not all elements in the array are odd.
 * @param {number[]} nums
 * @returns {boolean} All odd?
 */

const isAllOdd = (nums) => {
  return nums.every((num) => num % 2 === 1);
};

// let odd = nums.every((num)=>{
//   return (num%2===1)
// })
// return odd

/**
 * Takes in an array of numbers and a target.
 * Returns the number of times the target occurs in the array.
 * @param {number[]} nums
 * @param {number} target
 * @returns {number} Number of target occurrences
 */

const targetCount = (nums, target) => {
  let occ = 0;
  nums.forEach((el) => {
    if (el === target) {
      occ += 1;
    }
  });
  return occ;
};

/**
 * Takes in an array of elements and returns an Object that contains
 * the count of each element.
 * @param {Array} items
 * @returns {Object} A mapping of elements to their occurrence count.
 */

const counterObject = (items) => {
  let object = {};
  items.forEach((item) => {
    if (object[item]) {
      object[item]++;
    } else {
      object[item] = 1;
    }
  });
  return object;
};
// console.log(counterObject([1, 1, 2, 1, 3]))
/**
 * Takes in an array of numbers and returns a new array with each element doubled.
 * @param {number[]} nums
 * @returns {number[]} Each element has been doubled
 */

const doubled = (nums) => {
  return nums.map((elem) => elem * 2);
};

// console.log(doubled([1, 2, 3]))
/**
 * Takes in an array and returns whether every number is less than 20 even after
 * being tripled.
 * @param {number[]} nums
 * @returns {boolean} Each number times 3 less than 20 ?
 */

const tripledAndLessThan20 = (nums) => {
  return nums.every((elem) => elem < 20 && elem * 3 < 20);
};
// console.log(tripledAndLessThan20([1, 2, 4, 7]));
// console.log(tripledAndLessThan20([3, 4, 5]));
/**
 * Takes in a divisor and an array of numbers.
 * Return a new array of every element that can be evenly divided
 * by divisor.
 * @param {number} divisor
 * @param {number[]} nums
 * @returns {number[]} Numbers evenly divided by divisor.
 */

const divisibleBy = (divisor, nums) => {
  return nums.filter((num) => num % divisor === 0)
};
console.log(divisibleBy(3, [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]))
console.log(divisibleBy(5, [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]))
/**
 * Takes in an array and returns a new array where each element
 * has been multiplied by it's index.
 * Exp Input: [6,7,8,9]
 * Output: [0,7,16,27]
 * @param {number[]} nums
 * @returns {number[]} Numbers times their index
 */

const numberTimesIdx = (nums) => {
  let mult = nums.map((num, i)=> {return num *i })
  return mult 
};
// console.log(numberTimesIdx([6, 7, 8, 9]))
// console.log((numberTimesIdx([1, 2, 3])))
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
  return nums.every((num)=>(num > 0) && !(num % 10 === 0)&& (num % 2 == 0))}
  // let req = nums.every((num)=>(num/(-num) === -1) && !(num % 10 === 0
  // ))
//   let req = nums.every((num)=>(num > 0) && !(num % 10 === 0))
//   return req
// };
// console.log(arePositiveEvenAndNonZeroEnding([2, 4, 6, 8, 10]))// false 
// console.log(arePositiveEvenAndNonZeroEnding([2,4,6,8,12]))//true
// console.log(arePositiveEvenAndNonZeroEnding([2, 4, -6, 8, 12]))//false
/**
 * Takes in an array of elements.
 * Returns a new array containing all of the string elements, but now uppercase.
 * Exp Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
 * Output: ["CAT", "DOG", "BEAR"]
 * @param {Array} items
 * @returns {string[]} All strings uppercase.
 */

const stringsAndCaps = (items) => {
  let strung = items.map((item) => {
    return typeof item === "string" ? item.toUpperCase() : null;
  });
  // strung = strung.filter((item)=> {
  //   return  typeof(item) === 'string'
  //   return item !== null
  strung = strung.filter((item) => item);
  return strung;
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
