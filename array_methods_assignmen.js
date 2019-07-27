// # Sihame Bazi Array methods lab
//
// 1. Given an array of numbers, write a function that
//returns a new array where every element is
//incremented by 10.
//
// ```

// Input: [1,2,3,4,5]
// Output: [11,12,13,14,15]
// ```
//
// let array = [1,2,3,4,5];
// let newArray = array.map((currentElement) =>{
//    return currentElement + 10
//  })
//  console.log(newArray)
// ============================================
// 2. Given an array, return a new array where
//every non-string element is converted
//to an empty string.
//
// ```
// Input: ["a", 123, "b", "c", {name: "cat"}]
// Output: ["a", "", "b", "c", ""]
// ```
//
// let arr2 = ["a", 123, "b", "c", {name: "cat"}];
// let allStringArr = arr2.map((crrElem, index) => {
// if (typeof crrElem === 'number' || typeof crrElem === 'object' ) {
//  return " "
// } else {
//  return  crrElem
// }
// })
// console.log(allStringArr)


// 3. Write a function that returns only the even elements in an array of numbers.
//
// ```
// Input: [1,2,3,4,5]
// Output: [2,4]
//  let arr3 = [1,2,3,4,5];
// let filteredArr3 = arr3.filter((currentElement3) => {
//  if (currentElement3 % 2 ===0) {
//     return true
//    } else {
//     return false
//     }
//    })
//  console.log(filteredArr3)

//===============
// let array3 =  [1,2,3,4,5]
// let evenNums = array3.filter((num, index) => {
//  return num % 2 === 0
// })

// 4. Write a function that checks if all
//elements in the array are the same.
//
// ```
// Input: [1,1,1,1,1]
// Output: true
// let arr4 = [1,1,1,1,1];
// let arr4same = arr4.every(elem => {
//   if (elem === 1 ){
//     return true
//   }
//   return false
// })
// console.log(arr4same)
// //
// Input: [1,1,1,1,2]
// Output: false
// ```
// let arr5 = [1,1,1,1,2]
// let arr5same = arr5.every(elem => {
//   if (elem === 1 ){
//     return true
//   }
//   return false
// })
// console.log(arr5same)
// 5. Write a function that returns the sum of
//every element in an array.
//
// ```
// Input: [1,2,3,4,5]
// Output: 15
//function adder (total,crrElem){
//   return total + currElem;
// }
// let mums =[ 1, 2, 3, 4, 5];
// let largest = nums.reduce((acc,crrElem)=>{
//   console.log(`acc: ${acc}, crr: ${crrElem}`)
//   if (crrElem > acc) {
//     return crrElem
//   } else{
//     return acc;
//   }
// })
// console.log(largest);
// ```
//
// 6. Write a function that finds largest number in an array.
//
// ```
// Input: [1,2,6,3,4,5]
// Output: [6]
//
//const arr6 = [1,2,6,3,4,5];
// const largest = arr6.reduce((prev, curr) => {
// return Math.max(prev, curr)
// });
// console.log(largest);
//=====================> need to ask JR
// let arr6 = [1,2,6,3,4,5];
// //let result6 = largestElm(arr6);
// let largest = arr6.reduce((largestElm, currElm) =>{
//   if (largestElm > currElm){
//     return largestElm;
//   } else {
//     return currElm
//   }
// });
// console.log(largest);
//========================================
// 7. Write a function `countZeroes`, which takes an array
// of numbers as its argument and returns the amount of zeroes
//that occur in it.
// ```
// Input: [1,0,0,2,0,3,0,0,0]
// Output: 6
// ```
// let array7 = [1,0,0,2,0,3,0,0,0];
//
// const countZeroes = (array, num) => {
// let count = array.filter(element => element === num)
// return count.length;
// }
//
// let result7 = countZeroes(array7, 0);
// console.log(result7);
// ==============================
// 8. Write a function that doubles every element in an array.
//
// ```
// Input: [1,2,3,4]
// Output: [2,4,6,8]
// let arr8 = [1, 2, 3, 4];
// const doublesArrayElm = (arr, mult) =>{
// return arr.map(elm => elm * mult);
// }
// let newArray8 = doublesArrayElm(arr8, 2);
//  console.log(newArray8)
// ```
//==========================================
// 9. Write a function that finds the sum of
// every element in an array doubled
//
// ```
// Input: [1,2,3,4]
// Output: 20
// let arr8 = [1, 2, 3, 4];
//  const doublesArrayElm = (arr, mult) =>{
//  return arr.map(elm => elm * mult);
//  }
//  let newArray8 = doublesArrayElm(arr8, 2);
// let sum9 = newArray8.reduce((sumElm, elm) =>{
// return sumElm + elm;
// })
// console.log(sum9)

//=================================================
// 10. Write a function `elementDivisibleBy` with
// parameters `divisor` and `arr`.
//Return a new array of every element
//of arr that can be evenly divided by divisor.
//
// ```
// Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
// Output: [5,10,15]
// ```
// let arr10 = [4,5,6,7,8,9,10,11,12,13,14,15];
// const elementDivisibleBy = (devisor, array) => {
// return array.filter(element => element % devisor === 0)
// }
// let newArr10 = elementDivisibleBy(5, arr10);
// console.log( newArr10);
//===================================================
// 11. Write a `numberTimesIdx` that uses `map` and
//multiples each number in the array by its index.
//
// ```
// Input: [6,7,8,9]
// Output: [0,7,16,27]
// let arr11 = [6, 7, 8, 9];
// const numberTimesIdx = (arr) => {
// return arr.map((elm, index) => elm * index);
// }
// let newArr11 = numberTimesIdx(arr11)
// console.log(newArr11);
// ===================================================
// 12. Write a function that returns whether
//or not every value in an array is a positive
//even number that doesn't end in 0.
//
// ```
// Input: [2,4,6,8,12]
// Output: true
// let arr12 = [2,4,6,8,12]
// const evenArrElmNo0 = (array) => {
// return array.every(element => {
// return (element % 2 === 0 && element % 10 !== 0)});
// };
// let result12 = evenArrElmNo0(arr12);
// console.log(result12)
//==============================================
// Input: [2,4,6,8,10]
// Output: false

// let arr12 = [2,4,6,8,10]
//  const evenArrElmNo0 = (array) => {
// return array.every(element => {
// return (element % 2 === 0 && element % 10 !== 0)});
// };
// let result12 = evenArrElmNo0(arr12);
// console.log(result12)
//================================================
// 13. Write a function that returns
//the sum of all odd numbers in an Array
//
// Hint: What is the second argument in `reduce`?
//
// ```
// Input: [2,3,4,5]
// Output: 8
// let arr13 = [2, 3, 4, 5];
// const sumOddNum = (arr) =>{
//   return arr.reduce((sum,elm) => {
//     if (elm % 2 !=0){
//       sum += elm;
// }
// return sum
//   },0);
// }
// let result = sumOddNum(arr13)
// console.log(result);
//
// Input: [1,2,3,4,5]
// Output: 9
// let arr13b = [1, 2, 3, 4, 5];
// const sumOddNum = (arr) =>{
//   return arr.reduce((sum,elm) => {
//     if (elm % 2 !=0){
//       sum += elm;
// }
// return sum
//   },0);
// }
// let result = sumOddNum(arr13b)
// console.log(result);
// ```
//=========================================================
// 14. Write a function that returns
// a new array containing all of the strings
// in the original array uppercased.
//
// ```
// Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
// Output: ["CAT", "DOG", "BEAR"]
// ```
// let arr14 = [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"];
// const upperCase = (arr)=>{
//   let allStringArr = arr.filter(elm =>typeof elm === "string")
//   return allStringArr.map(elm => elm.toUpperCase());
// }
// let newArr14 = upperCase(arr14);
// console.log(newArr14);
//==================================================
// ## Bonus:
//
// You can write your own array methods!
//
// ```js
// let array = [ 1, 2, 3,"Holla"];
// array.prototype.sayHi = function() {
//   console.log("Hi")
// }
// ```
// let myArr = [1, 2, 3]
// Array.prototype.sayHi = function() {
//   console.log("Hi")
// };
// myArr.sayHi();
//====================================================
// Now every array that you write has a `sayHi` method
//that you can call.
//
// ```js
// let myArr = [1,2,3]
// myArr.sayHi() //Logs "Hi" to the console
// ask JR
// ========
// let array = [1, 2, 3];
//  let num = array.every(elem => {
//   if (elem = array){
//      return "Hi"
//   }
//   return false
//  })
//  let newResult = "Hi"
//  console.log(newResult);
//=======================================================
// 1nf the built in `forEach`.
// let myArr =[1, 2, 3];
// Array.prototype.myForEach = function( callback){
//   for (let elem of this){
// callback(elem);
//   }
// };
// function display(element){
//   console.log(element)
// }
// myArr.myForEach(display);
//========================================================
// 2. Use your `myForEach` to add `myMap` to
//the Array prototype.
//`myMap` should behave the same as regular `map`.
//
let myArr = [1, 2, 3];
Array.prototype.myMap = function (callback) {
  let outputArr = [];
  for ( i = 0; i < this.length; i++){
  outputArr.push(callback(this[i]));
  }
  return outputArr;
};
const multiplication = (number)=>{
return number * 3
}
console.log(myArr.myMap(multiplication));
//===================================================
// 3. Write a `myFilter` that behaves the same as `filter`.
// let myArr = [1, 2, 3];
// Array.prototype.myFilter = function (array) {
//   let filteredArray = [];
//   for (let value of array) {
//     if (value % 2 != 0) {
//       filteredArray.push(value);
//     }
//   }
//   return filteredArray;
// };
// console.log(myArr.myFilter(myArr));
//===================================================
// 4. Write a `myEvery` that behaves the same as `every`.
// let myArr = [1, 2, 3];
// Array.prototype.myEvery = function (array) {
//   for (let value of array) {
//     if (value === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };
// console.log(myArr.myEvery(myArr));
//=======================================================================
// 5. Write a `myReduce`.
//It should use the first element
//in the array if none is given.
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
