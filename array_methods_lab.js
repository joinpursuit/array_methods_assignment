// 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.
let array = [1,2,3,4,5]
let plus10 = array.map(e => e + 10)
console.log(plus10)

// 2. Given an array, return a new array where every non-string element is converted to an empty string.
let array2 = ["a", 123, "b", "c", {name: "cat"}]
let allStrings = array2.map(e => {
  if(typeof(e) !== 'string') {
    return ''
  } else {
    return e
  }
}
)
console.log(allStrings)

// 3. Write a function that returns only the even elements in an array of numbers.
let onlyEven = array.filter(e => e % 2 === 0)
console.log(onlyEven)

// 4. Write a function that checks if all elements in the array are the same.\
let array3 = [3,3,3,3,3]
let areTheSame = array3.every((e,i) => {
  if (i === 0) {
    return true
  } else {
    return e === array3[i - 1]
  }
}
)
console.log(areTheSame)

// 5. Write a function that returns the sum of every element in an array.
sumAll = array.reduce((a,b) => a + b)
console.log(sumAll)

// 6. Write a function that finds largest number in an array.
let array4 = [1,2,6,3,4,5,7]
let largestNum = array4.reduce((a,b) => {
  if (a > b) {
    return a
  } else {
    return b
  }
}
)
console.log(largestNum)

// 7. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.
let countZeroes = (arr) => {
  let counter = 0
  arr.forEach(e => {
    if (e === 0) {
      counter++
    }
  }
  )
  return counter
}
console.log(countZeroes([1,0,0,2,0,3,0,0,0]))

// 8. Write a function that doubles every element in an array.
let doubleAnArray = (arr) => arr.map(e => e * 2)
console.log(doubleAnArray(array))

// 9. Write a function that finds the sum of every element in an array doubled
let doubleSum = (arr) => (arr.reduce((a,b) => a + b)) * 2
console.log(doubleSum(array))

// 10. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.  Return a new array of every element of arr that can be evenly divided by divisor.
let elementDivisibleBy = (divisor,arr) => arr.filter(e => e % divisor === 0)
console.log(elementDivisibleBy(5, [4,5,6,7,8,9,10,11,12,13,14,15]))

// 11. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by its index.
let numberTimesIdx = (arr) => arr.map((e,i) => e * i)
console.log(numberTimesIdx([6,7,8,9]))

// 12. Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.
let isItAllThat = (arr) => arr.every(e => e > 0 && e % 2 === 0 && e % 10 !== 0)
console.log(isItAllThat([2,4,6,8,12]))
console.log(isItAllThat([2,4,6,8,10]))

// 13. Write a function that returns the sum of all odd numbers in an Array
let sumOfOdds = (arr) => arr.filter(e => e % 2 !== 0).reduce((a,b) => a + b)
console.log(sumOfOdds([2,3,4,5]))
console.log(sumOfOdds(array))

// 14. Write a function that returns a new array containing all of the strings in the original array uppercased
let stringsUppercased = (arr) => arr.filter(e => typeof(e) === 'string').map(e => e.toUpperCase())
console.log(stringsUppercased([{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]))
