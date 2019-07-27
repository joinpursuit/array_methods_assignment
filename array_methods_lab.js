// console.log('-----QUESTION 1------')
// /*iven an array of numbers, write a function that
// returns a new array where every element is incremented by 10.*/
//
// let numArr = [1,2,3,4,5]
// let addTen = numArr.map((crrElem) => {
//   return crrElem +  10
// })
// console.log(addTen)




// console.log('********QUESTION 2*********')
// /*Given an array, return a new array where every
// non-string element is converted to an empty string.*/
//
// let mixedArr = ["a", 123, "b", "c", {name: "cat"}]
// let strArr = mixedArr.map((crrElem) => {
//   if (typeof(mixedArr) === 'number') {
//   return ""
//   }
//   return mixedArr
// })
// console.log(strArr)




// console.log('((((((((((((QUESTION 3))))))))))))')
// //Write a function that returns only the even elements in an array of numbers.
//
// let ranArr = [1,2,3,4,5]
// let evenArr = ranArr.filter((crrElem) => {
//   if (crrElem % 2 === 0) {
//     return true
//   }
//   false
// })
// console.log(evenArr)




// console.log('<<<<<<<<QUESTION 4>>>>>>>>>')
// //Write a function that checks if all elements in the array are the same.
// let sameNumArr = [2,2,2,2,2,2]
// let dittoArr = sameNumArr.every(elem => {
//   if (elem === elem) {
//     return true
//   }
//   return false
// })
// console.log(dittoArr)
//
//
// let diffNumArr = [2,2,2,2,2,1]
// let oddElemOutArr = diffNumArr.every(elem => {
//   if (elem !== elem) {
//     return true
//   }
//   return false
// })
// console.log(oddElemOutArr)




//console.log('^^^^^^^^QUESTION 5^^^^^^^^')
//Write a function that returns the sum of every element in an array.

//let thisNumArr = [1,2,3,4,5]

// let totalSum = 0
// thisNumArr.forEach(num => totalSum += num)
// console.log(totalSum)

////DIFFERENT WAY TO SOLVE QUESTION

// function adder(totalSum, crrElem) {
//   return totalSum + crrElem;
// }
// let totalSum = thisNumArr.reduce(adder)
// console.log(totalSum)




// console.log('=========QUESTION 6==========')
// //Write a function that finds largest number in an array.
//
// let anotherNumArr = [1,2,6,3,4,5]
//
// let largestElem = anotherNumArr.reduce((acc, crrElem) => {
//   if (crrElem > acc) {
//     return crrElem
//   }
//   return acc
// })
// console.log(largestElem)




// console.log('::::::QUESTION 7::::::')
// /* Write a function `countZeroes`, which takes an array of numbers as its argument
// and returns the amount of zeroes that occur in it.*/
//
// let zeroMixArr = [1,0,0,2,0,3,0,0,0]
// let findZerosArr = zeroMixArr.filter((currentElem) => {
//   if (currentElem === 0) {
//     return zeroMixArr
//   }
// })
// console.log(findZerosArr.length)





// console.log('[[[[[[[[[ QUESTION 8 ]]]]]]]]]')
// //Write a function that doubles every element in an array.
//
// let simpArr =  [1,2,3,4]
// let doubleONada = simpArr.map((crrElem) => {
//   return crrElem * 2
// })
// console.log(doubleONada)





// console.log('{{{{{{{[{{{{{ QUESTION 9 }}}}}]}}}}}}}')
// //Write a function that finds the sum of every element in an array doubled
// let simpArr =  [1,2,3,4]
// let doubleYAdd = simpArr.map((crrElem) => {
//   return crrElem * 2
// })
// let totalSum = 0
// doubleYAdd.forEach(num => totalSum += num)
// console.log(totalSum)




// console.log('||||||||QUESTION 10||||||||')
// /*Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.
// Return a new array of every element of arr that can be evenly divided by divisor.*/
//
// let arr = [4,5,6,7,8,9,10,11,12,13,14,15]
// let divisor = 5
//
// function elementDivisibleBy(divisor, arr){
//   let diviseBy5 = []
//   if (arr % divisor === 0) {
//     return diviseBy5
//   }
// }
// arr.forEach(elementDivisibleBy)
// console.log(elementDivisibleBy)





console.log('~~~~~~~~QUESTION 11~~~~~~~~')
/* Write a `numberTimesIdx` that uses `map`
and multiples each number in the array by its index.*/

let arr = [6,7,8,9]
let result = arr.map((currentElem, index) => {
  return currentElem * index
})
console.log(result)

// console.log('_______QUESTION 13_______')
// /*Write a function that returns the sum of all odd numbers in an Array*/
//
// let numArr = [2,3,4,5]
// let filteredArr = numArr.filter((currentElem) => currentElem % 2 !== 0)
//
// let oddSum = 0
// filteredArr.forEach(num => oddSum += num)
// console.log(oddSum)
