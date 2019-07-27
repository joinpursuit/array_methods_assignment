console.log('Number 1: ')
// 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.
// Input: [1,2,3,4,5]
// Output: [11,12,13,14,15]
array1 = [1,2,3,4,5]
// const increase10 = (element) => {
//   return element + 10
// }
// let increaseArray10 = array1.map(increase10)
// console.log(increaseArray10)
console.log(array1.map(function(elem) {
  return  elem + 10
}))
console.log(array1.map((elem) => {return elem + 10}))

console.log('Number 2: ')
// 2. Given an array, return a new array where every non-string element is converted to an empty string.
// Input: ["a", 123, "b", "c", {name: "cat"}]
// Output: ["a", "", "b", "c", ""]
let array2 = ["a", 123, "b", "c", {name: "cat"}]
// const checkType = (element) => {
//   if(typeof element === 'string') {
//     return element
//   }
// }
// let filterStrings = array2.filter(checkType)
// console.log(filterStrings)
console.log(array2.filter(function(elem){
  return typeof elem === 'string'
}))
console.log(array2.filter((elem) => {return typeof elem === 'string'}))

console.log('Number 3: ')
// 3. Write a function that returns only the even elements in an array of numbers.
// Input: [1,2,3,4,5]
// Output: [2,4]
let array3 = [1,2,3,4,5]
// const checkEven = (element) => {
//   return (element % 2 === 0)
// }
// let checkEvenArray = array3.filter(checkEven)
// console.log(checkEvenArray)
console.log(array3.filter(function(elem){
  return elem % 2 === 0
}))
console.log(array3.filter((elem) => {return elem % 2 === 0}))

console.log('Number 4: ')
// 4. Write a function that checks if all elements in the array are the same.
// Input: [1,1,1,1,1]
// Output: true
// Input: [1,1,1,1,2]
// Output: false
let array4 = [2, 2, 2, 2]
let array5 = [3, 3, 3, 4]
// const checkSame = (array) => (
//   array.every((elem) => {
//   return elem === array[0]
//   }
//   )
// )

// let check4 = array4.every(checkSame)
// console.log(checkSame(array4))
// console.log(checkSame(array5))
// let check5 = array5.every(checkSame)
// console.log(check5)
console.log(array4.every(function(elem){
  return elem === array4[0]
}))
console.log(array4.every((elem) => {return elem === array4[0]}))

console.log('Number 5: ')
// 5. Write a function that returns the sum of every element in an array.
// Input: [1,2,3,4,5]
// Output: 15
let array6 = [10, 20, 30, 40]
const sumArray = (array) => (
  array.reduce((total, number) => {
  return total + number
})
)
console.log(sumArray(array6))
console.log(array6.reduce(function(total, curr){
  return total + curr
}))
console.log(array6.reduce((total,curr) => {return total + curr}))

console.log('Number 6: ')
// 6. Write a function that finds largest number in an array.
// Input: [1,2,6,3,4,5]
// Output: [6]

let array7 = [1,2,6,3,4,5]
const largestNum = (array) => (
  array.reduce((elem, curr) => {
    if(curr > elem) {
      return curr
    } else {
      return elem
    }
})
)
let largest7 = largestNum(array7)
console.log(largest7)
console.log(array7.reduce(function(start, curr){
  if(start > curr){
    return start
  } else if(curr > start) {
    return curr
  }
}))
console.log(array7.reduce((start, curr) => {
  if(start > curr){
    return start
  } else {
    return curr
}}))
console.log('Number 7: ')
// 7. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.
// Input: [1,0,0,2,0,3,0,0,0]
// Output: 6
let array8 = [1,0,0,2,0,3,0,0,0]
// const countZeroes = (array) => {
//

console.log(array8.reduce((prev,curr) => {
  if(curr === 0) {
    prev ++
  } return prev
}, 0))

console.log('Number 8: ')
// 8. Write a function that doubles every element in an array.
// Input: [1,2,3,4]
// Output: [2,4,6,8]
let array9 = [1,2,3,4];
const doubleArray = (array) => (
  array.map((elem) => {
    return elem * 2;
  }
)
)
let double9 = doubleArray(array9)
console.log(doubleArray(array9))
console.log(array9.map((elem) => {return elem * 2}))
console.log(array9.map((function(elem) {return elem * 2})))

console.log('Number 9: ')
// Write a function that finds the sum of every element in an array doubled
// Input: [1,2,3,4]
// Output: 20
let array10 = [1,2,3,4]
const sumDouble = (array) => (
  array.map((elem) => {return elem * 2}).reduce((acc, curr) => {
    return acc + curr}))
console.log(sumDouble(array10))
console.log(array10.map((elem) => {return elem * 2}).reduce((acc, curr) => {return acc + curr}))
console.log(array10.map(function(elem){return elem * 2}).reduce(function(acc, curr){return acc + curr}))

console.log('Number 10: ')
// 10. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.
//Return a new array of every element of arr that can be evenly divided by divisor.
// Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
// Output: [5,10,15]
const elementDivisibleBy = (divisor, arr) => (
  arr.filter((elem) => {
    return elem % divisor === 0
  })
)
let array11 = [4,5,6,7,8,9,10,11,12,13,14,15]
console.log(elementDivisibleBy(5, array11))

console.log('Number 11: ')
// 11. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by its index.
// Input: [6,7,8,9]
// Output: [0,7,16,27]
let array12 = [6,7,8,9]
const numberTimesIdx = (array) => (
  array.map((elem, index) => {
    return elem * index
  })
)
console.log(numberTimesIdx(array12))

console.log('Number 12: ')
// 12. Write a function that returns whether or not every value in an array
// is a positive even number that doesn'tend in 0.
// Input: [2,4,6,8,12]
// Output: true
//
// Input: [2,4,6,8,10]
// Output: false
let array13 = [2,4,6,8,12]
let array14 = [2,4,6,8,10]
const checkEnd = (array) => (
  array.every((elem) => {
    return elem % 2 === 0 && elem % 10 !== 0
  })
)
console.log(checkEnd(array13))
console.log(checkEnd(array14))

console.log('Number 13: ')
// 13. Write a function that returns the sum of all odd numbers in an Array
// Hint: What is the second argument in `reduce`?
// Input: [2,3,4,5]
// Output: 8
// Input: [1,2,3,4,5]
// Output: 9
let array15 = [2,3,4,5]
let array16 = [1,2,3,4,5]
const sumOfOdd = (array) => (
  array.filter((elem) => {
    return elem % 2 === 1
  }).reduce((acc, curr) => {
    return acc + curr
  }))
console.log(sumOfOdd(array15))
console.log(sumOfOdd(array16))

console.log('Number 14: ')
// 14. Write a function that returns a new array containing all of
// the strings in the original array uppercased.
// Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
// Output: ["CAT", "DOG", "BEAR"]
array17 = [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
const upperStrings = (array) => (
  array.filter((elem) => {
    return typeof elem === 'string'
  }).map((word) => {
    return word.toUpperCase()
  })
)
console.log(upperStrings(array17))
