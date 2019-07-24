// # Exercises
//
// 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.
//
// ```
// Input: [1,2,3,4,5]
// Output: [11,12,13,14,15]
// ```
// USE MAP METHOD
let arr1 = [2, 3, 4, 11, 5]
let increasedBy10 = arr1.map((currentElem)=>{
  return currentElem + 10
})
console.log(increasedBy10)

// 2. Given an array, return a new array where every non-string element is converted to an empty string.
//
// ```
// Input: ["a", 123, "b", "c", {name: "cat"}]
// Output: ["a", "", "b", "c", ""]
// ```
// // USE MAP METHOD
let mixedArr = [1, 'a', 4, 'oops', {1: 'objectValue'}]
let num2 = mixedArr.map((currentElem) => {
  // console.log(typeof(currentElem))
  if(typeof(currentElem) === 'string'){
    return currentElem
  }else{
    return ''
  }

})
console.log(num2)
// 3. Write a function that returns only the even elements in an array of numbers.
//
// ```
// Input: [1,2,3,4,5]
// Output: [2,4]
// ```
// USE FILTER METHOD
let evenArr = [3, 56, 35, 27, 4, 12]
let itsEven = evenArr.filter((currentElem) =>{
  return currentElem % 2 === 0
})
console.log(itsEven)

// 4. Write a function that checks if all elements in the array are the same.
//
// ```
// Input: [1,1,1,1,1]
// Output: true
// Input: [1,1,1,1,2]
// Output: false
// ```
// USE EVERY ARRAY METHOD
let sameArr = [2, 2, 2, 2, 2]
let doubleChecked = sameArr.every((currentElem, i, arr) => {
  if(currentElem === arr[0]){
      return true
    }else{
      return false
    }
})
console.log(doubleChecked)

// 5. Write a function that returns the sum of every element in an array.
//
// ```
// Input: [1,2,3,4,5]
// Output: 15
// ```
// USE THE REDUCE METHOD
let addArr = [2,7,24,27, 5]
let added = addArr.reduce((currentElem, i) => {
  return currentElem + i
})
console.log(added)

// 6. Write a function that finds largest number in an array.
//
// ```
// Input: [1,2,6,3,4,5]
// Output: [6]
// ```
//USE THE REDUCE METHOD
let makeItSmall = [1, 5, 7, 8, 19, 35, 2]
let largest = makeItSmall.reduce((accumulator,crrElem)=>{
  if(crrElem > accumulator){
    return crrElem
  } else{
    return accumulator;
  }
})
console.log(largest)

// 7. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.
//
// ```
// Input: [1,0,0,2,0,3,0,0,0]
// Output: 6
// ```

const countZeroes = (arr) =>{
  return arr.reduce((acc, currentElem)=>{
    if(currentElem === 0){ // the accumulator is going to hold all of the zeroes
      acc++
      // console.log("ACC: " + acc)
    }
    return acc
  }, 0) // setting the initial value of the acc to zero
}

// console.log("counting ZEROS: " + countZeroes([1,0,0,2,0,3,0,0,0]))

// 8. Write a function that doubles every element in an array.
//
// ```
// Input: [1,2,3,4]
// Output: [2,4,6,8]
// ```
//USE MAP METHOD
let arr3 = [2, 4, 5, 7, 8, 9]
let doubleUp = arr3.map((currentElem)=>{
  return currentElem * 2
})
console.log(doubleUp)

// 9. Write a function that finds the sum of every element in an array doubled
//
// ```
// Input: [1,2,3,4]
// Output: 20
// ```
let arr4 = [6, 7, 27, 24, 7, 23, 11, 4]
let arrSum = arr4.map((secondElem)=>{
  return secondElem * 2
})
.reduce((currentElem,next)=>{
  return currentElem + next
})
console.log(arrSum)

//simpler option

const doubleSum = (arr) =>{
  return arr.reduce((acc, currentElem)=>{
    return acc + currentElem
  }) * 2

}
console.log(doubleSum(arr4))

// 10. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.  Return a new array of every element of arr that can be evenly divided by divisor.
//
// ```
// Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
// Output: [5,10,15]
// ```

let arr5 = [4,5,6,7,8,9,10,11,12,13,14,15];
const elementDivisibleBy = (divisor, arr) =>{
  return arr.filter((currentElem)=>{
    return currentElem % 5 === 0
  })
}
console.log(elementDivisibleBy(5, arr5))

// 11. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by its index.
//
// ```
// Input: [6,7,8,9]
// Output: [0,7,16,27]
// ```
//USE MAP METHOD

let arr6 = [ 3, 2, 6, 7, 1]
const numberTimesIdx = (arr) =>{
  return arr.map((elem, i)=>{
    return elem * i
  })
}
console.log(numberTimesIdx(arr6))

// 12. Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.
//
// ```
// Input: [2,4,6,8,12]
// Output: true
//
// Input: [2,4,6,8,10]
// Output: false
// ```

//USE EVERY METHOD or FILTER

let arr7=[2,4,6,8,12]
const checkNum = (arr) =>{
  return arr.every((currentElem)=>{
    return currentElem > 0
          && currentElem % 2 === 0
          && currentElem % 10 !==0
  })
}
console.log(checkNum(arr7))

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
// ```
//USE REDUCE OR FILTER
let arr8 = [1,2,3,4,5]
const oddSum = (arr) =>{
  return arr.reduce((acc, currentElem)=>{
    if(currentElem % 2 !== 0){
        acc += currentElem // acc = acc + currentElem
    }
    return acc // return the total of the acc
  })
}
console.log(oddSum(arr8))


// 14. Write a function that returns a new array containing all of the strings in the original array uppercased.
//
// ```
// Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
// Output: ["CAT", "DOG", "BEAR"]
// ```
//USE MAP METHOD

let arr9 = [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"];
const uppercasedArr = (arr) =>{
  let uppercase = arr.map((currentElem) =>{
    if(typeof(currentElem) === 'string'){
    return currentElem.toUpperCase() // telling the method to loop through and check for all strings and make them uppercase
  } else{
    return currentElem
  }
  })
  return uppercase.filter((currentElem)=>{
    return typeof(currentElem) === 'string'
  })
}
console.log(uppercasedArr(arr9))
 
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
