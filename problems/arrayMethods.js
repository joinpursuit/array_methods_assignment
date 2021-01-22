/**
 * Takes in an array of numbers and returns the sum of all elements.
 * Must use forEach
 * @param {number[]} nums
 * @returns {number} Sum of all numbers
 */

const sumArray = (nums) => {
  let sum =0
  nums.forEach((num) =>{
    sum += num
  })
  return sum
};
console.log(sumArray([1,2,1,1]))
/**
 * Takes in an array of numbers and returns the amount of zeros that occur in it.
 * @param {numbers[]} nums
 * @returns {number} Number of zeros
 * Must use forEach
 */

const zeroCount = (nums) => {
  let num = 0
  nums.forEach((el)=>{
  if(el === 0){
    // each iteration checks for element of indext
    num++;
  }
  
  })
  return num;
};

/**
 * Takes in an array of numbers and returns a new array where each
 * element has been incremented by 10.
 * Must use map.
 * @param {number[]} nums
 * @returns {number[]} Array with each previous number plus 10.
 */

const plusTen = (nums) => {
  return nums.map(num=> num+10)
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
  let arr = items.map((el)=>{
    if(typeof el === 'string'){
      return el
    }else{
      return ''
    }
  })
return arr
};
console.log(stringsOnly(["a", 123, "b", "c", {name: "cat"}]))
//Process.exit(0)
/**
 * Takes in an array and returns a new array with only the even elements.
 * Must use filter
 * @param {number[]} nums
 * @returns {number[]} Only even valued elements
 */

const onlyEvens = (nums) => {
  return nums.filter(num => num % 2 === 0)
};

/**
 * Takes in an array and returns a new array with only the elements
 *  that are numbers.
 * Must use filter
 * @param {Array} items
 * @returns {number[]} Only number items should remain.
 */

const numbersOnly = (items) => {


  return items.filter((el)=> typeof el === "number")
};

/**
 * Takes in an array and checks if all elements in the array are the same.
 * Must use every
 * @param {Array} items
 * @returns {boolean} Whether or not all elements are the same.
 */

const isAllSame = (items) => {
  let arr= items.every((el)=>{
    return el === items[0]
    
});
return arr
}
console.log(isAllSame([0,0,1]))
/**
 * Takes in an array and returns whether or not all elements in the array are odd.
 * @param {number[]} nums
 * @returns {boolean} All odd?
 */

const isAllOdd = (nums) => {
  let arr = nums.every((el)=>{
    return el % 2 === 1
   
  })
return arr
  
};

/**
 * Takes in an array of numbers and a target.
 * Returns the number of times the target occurs in the array.
 * @param {number[]} nums
 * @param {number} target
 * @returns {number} Number of target occurrences
 */

const targetCount = (nums, target) => {
  let count =0
  nums.forEach((el)=>{
    if( el === target)
    count++
  })
return count
}
/**
 * Takes in an array of elements and returns an Object that contains
 * the count of each element.
 * @param {Array} items
 * @returns {Object} A mapping of elements to their occurrence count.
 */

const counterObject = (items) => {
  let newObj={}
  items.forEach((el)=>{
    if(newObj[el]){

      newObj[el]+=1
    
  }else{

    newObj[el]=1
  }
})
return newObj

};

/**
 * Takes in an array of numbers and returns a new array with each element doubled.
 * @param {number[]} nums
 * @returns {number[]} Each element has been doubled
 */

const doubled = (nums) => {
  let arr = nums.map((el)=> {
    return el *2
  })
  return arr
};

/**
 * Takes in an array and returns whether every number is less than 20 even after
 * being tripled.
 * @param {number[]} nums
 * @returns {boolean} Each number times 3 less than 20 ?
 */

const tripledAndLessThan20 = (nums) => {
  let arr = nums.every((el) =>{
    return el * 3 < 20
    
  })
  return arr
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
   let newArr = nums.filter((el)=>{
    return el % divisor === 0
  })
  return newArr
};
console.log(divisibleBy(3, [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]))
/**
 * Takes in an array and returns a new array where each element
 * has been multiplied by it's index.
 * Exp Input: [6,7,8,9]
 * Output: [0,7,16,27]
 * @param {number[]} nums
 * @returns {number[]} Numbers times their index
 */

const numberTimesIdx = (nums) => {
  let arr = nums.map((el , i) =>{
    return el *i
  })
  return arr
};
console.log(numberTimesIdx([6, 7, 8, 9]))

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
  let array = nums.every((num) => {
    if (num % 10 !== 0 && num % 2 === 0 && num > 0) {
      return true;
    }
  });
  return array;
};
//console.log(arePositiveEvenAndNonZeroEnding([2, 4, 6, 8, 10]))

/**
 * Takes in an array of elements.
 * Returns a new array containing all of the string elements, but now uppercase.
 * Exp Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
 * Output: ["CAT", "DOG", "BEAR"]
 * @param {Array} items
 * @returns {string[]} All strings uppercase.
 */

const stringsAndCaps = (items) => {
  let newArr =[]
  let uppercase = items.map((i)=>{
    if(typeof i === "string"){
  newArr.push(i.toUpperCase())
  return
    }
  })
return newArr
};
//console.logstringsAndCaps([{}, 1, "cat", 3, ["hi"], { name: "dog" }, "dog", "bear"])

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
