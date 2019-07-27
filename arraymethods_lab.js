// # Exercises
//
// 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.
//
// ```
// Input: [1,2,3,4,5]
// Output: [11,12,13,14,15]
// ```



let arr = [1,2,3,4,5]
arr.forEach((currentElem, index)=> {
console.log(currentElem+ 10)
})



// 2. Given an array, return a new array where every non-string element is converted to an empty string.
//
// ```
// Input: ["a", 123, "b", "c", {name: "cat"}]
// Output: ["a", "", "b", "c", ""]
// ```



let arr = ["a", 123, "b", "c", {name: "cat"}]

let newArr= array.map((currentElem) => {
     if(typeof currentElem === "string"){
       return currentElem
     }else{
       return " "
     }
  })
console.log(newArr);




// 3. Write a function that returns only the even elements in an array of numbers.
//
// ```
// Input: [1,2,3,4,5]
// Output: [2,4]
// ```



let arr = [1,2,3,4,5]
let filterArr = arr.filter((currentElem) =>{
  return currentElem % 2 === 0
})
console.log(filterArr)



// 4. Write a function that checks if all elements in the array are the same.
//
// ```
// Input: [1,1,1,1,1]
// Output: true
//
// Input: [1,1,1,1,2]
// Output: false
// ```



let arr = [1,1,1,1,2]
let allSame = arr.every(elem => {
  if (elem === arr[0]){

    return true
  }else{
    return false
  }
})
console.log(allSame)



// 5. Write a function that returns the sum of every element in an array.
//
// ```
// Input: [1,2,3,4,5]
// Output: 15
// ```



let arr = [1,2,3,4,5]
function adder(total, currElem){
  return total + currElem
}
let total = arr.reduce(adder,0)
console.log(total)



// 6. Write a function that finds largest number in an array.
//
// ```
// Input: [1,2,6,3,4,5]
// Output: [6]
// ```



let arr = [1,2,6,3,4,5]
let largest = arr.reduce((acc,currElem) =>{
  if(currElem > acc){
    return currElem;
  }else{
    return acc;
  }
})
console.log(largest)



// 7. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.
//
// ```
// Input: [1,0,0,2,0,3,0,0,0]
// Output: 6
// ```



let nums = [1,0,0,2,0,3,0,0,0]
let i = 0
let nums2 = nums.filter ((numbers,i) => {
  return nums[i] === 0
})
  console.log(nums2.length)



// 8. Write a function that doubles every element in an array.
//
// ```
// Input: [1,2,3,4]
// Output: [2,4,6,8]
// ```


let arr = [1, 2, 3, 4 ]
let result = arr.map((currentElement) =>{
  return currentElement * 2
})
console.log(result)



// 9. Write a function that finds the sum of every element in an array doubled
//
// ```
// Input: [1,2,3,4]
// Output: 20
// ```



let arr = [1,2,3,4]
function adder(total, currElem){
  return total + currElem
}
let total = arr.reduce(adder,0)
console.log(total * 2)



// 10. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.  Return a new array of every element of arr that can be evenly divided by divisor.
//
// ```
// Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
// Output: [5,10,15]
// ```
//



function elementDivisibleBy (divisor, arr) {
  return filterArr = arr.filter((arr) => {
    return arr % divisor === 0
  })
}
console.log(elementDivisibleBy(5, [4,5,6,7,8,9,10,11,12,13,14,15]))



// 11. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by its index.
//
// ```
// Input: [6,7,8,9]
// Output: [0,7,16,27]
// ```


//
let arr = [6,7,8,9]
let index = 0
let result = arr.map((currentElement, index ) =>{
  return currentElement * index
})
console.log(result)



// 12. Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.
//
// ```
// Input: [2,4,6,8,12]
// Output: true
//
// Input: [2,4,6,8,10]
// Output: false
// ```



let arr = [2,4,6,8,10]

let notEndInZero = arr.every(element => {
    console.log(element )
  if(element  % 10 !== 0 ){
    return true
  }else{
    return false
  }
})
console.log(notEndInZero)



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
//



let arr = [1,2,3,4,5]

let result = arr.filter((currentElem) => {
  return currentElem % 2 !== 0
})
.reduce((acc, currentElem) => {
  return acc + currentElem
},0)
console.log(result);



// 14. Write a function that returns a new array containing all of the strings in the original array uppercased.
//
// ```
// Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
// Output: ["CAT", "DOG", "BEAR"]
// ```



let arr = [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]

let result = arr.map((currentElement) =>{
    if(typeof currentElement === "string")
  return currentElement.toUpperCase()
})
console.log(result)

let resultFilter = result.filter((currentElement) =>{
if(result !== undefined)
  return currentElement
})
console.log(resultFilter)



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
