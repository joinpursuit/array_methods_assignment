// # Exercises
//
// 1. Given an array of numbers, write a function that returns a new array where every
// //element is incremented by 10.
//
// ```
// Input: [1,2,3,4,5]
// Output: [11,12,13,14,15]

 console.log('=====answer#1======')

let arr = [1,2,3,4,5]
let incrementedArr = arr.map((currElem, index) => {

  return( currElem += 10 )
})
 console.log(incrementedArr)

// ```
//
// 2. Given an array, return a new array where every non-string element is converted
// to an empty string.
//
// ```
// Input: ["a", 123, "b", "c", {name: "cat"}]
// Output: ["a", "", "b", "c", ""]

console.log('========answer#2========')

let arr1 = ["a", 123, "b", "c", {name: "cat"}]
let allStringArr = arr1.map((crrElem, index) => {
if (typeof crrElem === 'number' || typeof crrElem === 'object' ) {
  return " "
} else {
  return  crrElem
}

})
console.log(allStringArr)


// ```
//
// 3. Write a function that returns only the even elements in an array of numbers.
//
// ```
// Input: [1,2,3,4,5]
// Output: [2,4]

console.log('==========answer#3=========')

let arr2 =  [1,2,3,4,5]
let evenNums = arr2.filter((num, index) => {
  return num % 2 === 0
})
console.log(evenNums)




// ```
//
// 4. Write a function that checks if all elements in the array are the same.
//
// ```
// Input: [1,1,1,1,1]
// Output: true
//
// Input: [1,1,1,1,2]
// Output: false

console.log('========answer#4===========')
//
let arr3 = [1,1,1,1,1]
let numArr = [1,1,1,1,2]
const sameNum = (arr) => {
return  arr.every(elem => elem === arr[0])
}
console.log(sameNum(arr3))
console.log(sameNum(numArr))




// console.log('----------------------')
//
// let numArr = [1,1,1,1,2]
// let sameNum = numArr.every((acc, elem) => {
//   if (acc === 1) {
//     return true
//   } else {
//     return false
//   }
// })
// console.log(sameNum)

// ```
//
// 5. Write a function that returns the sum of every element in an array.
//
// ```
// Input: [1,2,3,4,5]
// Output: 15

console.log('========answer#5========')

let arr4 = [1,2,3,4,5]
let sum = arr4. reduce ((total, currentElem) => {
  return total + currentElem;
})
console.log(sum)
// ```
//
// 6. Write a function that finds largest number in an array.
//
// ```
// Input: [1,2,6,3,4,5]
// Output: [6]

console.log('=======answer#6=======')

let arr5 = [1,2,6,3,4,5]
let largestNum = arr5 .reduce ((acc, currElem) => {
    if (acc > currElem) {
    return acc
  } else {
    return currElem
  }
})
console.log(largestNum)
// ```
//
// 7. Write a function `countZeroes`, which takes an array of numbers as its
// argument and returns the amount of zeroes that occur in it.
//
// ```
// Input: [1,0,0,2,0,3,0,0,0]
// Output: 6

console.log('=======answer#7=======')

let arr6 = [1,0,0,2,0,3,0,0,0]

let countZeroes = arr6.reduce((acc, currentElem) => (currentElem === 0) ?
++ acc : acc, 0)

console.log(countZeroes)



// ```
//
// 8. Write a function that doubles every element in an array.
//
// ```
// Input: [1,2,3,4]
// Output: [2,4,6,8]

console.log('========answer#8=========')

let arr7 = [1,2,3,4,5]
let doubles = []

arr7.forEach((currElem) => {
  doubles.push(currElem * 2)
})
console.log(doubles)
// ```
//
// 9. Write a function that finds the sum of every element in an array doubled
//
// ```
// Input: [1,2,3,4]
// Output: 20

console.log('=======answer#9=========')

let arr8 = [1,2,3,4,5]

let sumOfElem = arr8.reduce((total, currElem) => {
  return total + (currElem * 2)
}, 0)
console.log(sumOfElem)
// ```
//
// 10. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.
// Return a new array of every element of arr that can be evenly divided by divisor.
//
// ```
// Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
// Output: [5,10,15]

console.log('=======answer#10======')

let arr9 =  [4,5,6,7,8,9,10,11,12,13,14,15]
let elementDivisibleBy = (divisor, arr) =>
arr9.filter(elem => elem % divisor === 0)


console.log(elementDivisibleBy(5, arr9))
// ```
//
// 11. Write a `numberTimesIdx` that uses `map` and multiples each number in the
// array by its index.
//
// ```
// Input: [6,7,8,9]
// Output: [0,7,16,27]

console.log('=======answer#11=======')

let arr10 = [6,7,8,9]
let numberTimesIdx = arr10.map((currNum, index) => {
  return currNum * index
})
console.log(numberTimesIdx)


// ```
//
// 12. Write a function that returns whether or not every value in an array is a
// positive even number that doesn't end in 0.
//
// ```
// Input: [2,4,6,8,12]
// Output: true
//
// Input: [2,4,6,8,10]
// Output: false
//
console.log('======answer#12========')

let arr11 = [2,4,6,8,12]
let positiveEvenNum = arr11.every((currNum, index) => {
  if (currNum === 'positive' || currNum % 2 === 0 || currNum % 10 !== 0 ) {
    return true
  } else {
    return false
  }

})
console.log(positiveEvenNum)

console.log('--------------------')

let array11 = [2,4,6,8,10]
let nonNegativeEvennum = array11.every((currNum, index) => {
  if (currNum === 'positive' || currNum % 2 === 0 || currNum % 10 == 0) {
    return true
  } else {
    return false
  }
})
console.log(nonNegativeEvennum)
// ```
//
// 13. Write a function that returns the sum of all odd numbers in an Array
//
// Hint: What is the second argument in `reduce`?

//
// ```
// Input: [2,3,4,5]
// Output: 8
//
// Input: [1,2,3,4,5]
// Output: 9

console.log("=========answer#13=========")

let arr12 = [,2,3,4,5]
let array12 = [1,2,3,4,5]
const sumOfOddNums = (arr) => {
return arr.reduce((total, currEl) => {
  if (currEl % 2 === 1) {
   return total + currEl
  }
  return total
}, 0)
}
let sum1 = sumOfOddNums(arr12)
let sum2 = sumOfOddNums(array12)
console.log(sum1)
console.log(sum2)

// ```
//
// 14. Write a function that returns a new array containing all of the strings in
//  the original array uppercased.
//
// ```
console.log('=====answer#14==========')

// Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
// Output: ["CAT", "DOG", "BEAR"]

let arr13 = [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
let strUpperCased = arr13.map((currElem) => {
if (typeof currElem === "string") {
  return currElem.toUpperCase()
}

}).filter(currElem => {
  return  currElem
})
console.log(strUpperCased)

// ```
//
// ## Bonus:
//
// You can write your own array methods!
//
// ```js
// Array.prototype.sayHi = function() {
//   console.log("Hi")
// }
// ```
//
// Now every array that you write has a `sayHi` method that you can call.
//
// ```js
// let myArr = [1,2,3]
// myArr.sayHi() //Logs "Hi" to the console
// ```
//
//
// 1. Using Array.prototype add a new method `myForEach` that mimics the behavior of the built in `forEach`.
//
// 2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.
//
// 3. Write a `myFilter` that behaves the same as `filter`.
//
// 4. Write a `myEvery` that behaves the same as `every`.
//
// 5. Write a `myReduce`. It should use the first element in the array if none is given.
//
// 6. Write a `myJoin` function.
//
// 7. Write a `mySlice` function.
//
// 8. Write a `myTranspose`. This function should transpose a matrix.
//
// ```js
// let mtx = [
//             [1, 2],
//             [3, 4],
//             [5, 6]
//           ]
//
// mtx.myTranspose();
//
// // => [
//         [1, 3, 5],
//         [2, 4, 6]
//        ]
// ```
//
// 9. Write a `myFlatten`. This should take a multi-dimensional array and return it as one array.
//
// ```js
// let arr = [1, 2, [3, 4, 5, [6, 7, 8]]]
//   arr.myFlatten();
//   // => [1, 2, 3, 4, 5, 6, 7, 8]
// ```
