// 1. Using Array.prototype add a new method `myForEach` that mimics the behaivor of the built in `forEach`.
//

// Array.prototype.myForEach = function(callback){
//   for(let i = 0; i< this.length; i++){
//     callback(this[i]);
//   }
// };
//
// // test:
// [1,2,3].myForEach((el) =>{
//   console.log(el)
// })

//------------------------------------------------

// 2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.

// Array.prototype.myMap = function (callback){
//   let result = [];
//   for(let i = 0; i< this.length; i++) {
//     result.push(callback(this[i]));
//   }
// return result;
// }
//
// // test:
// let mapper = [1,2,3].myMap((el) => {
//   return el * 2
// })
//
// console.log(mapper);

//------------------------------------------------

// 3. Write a 'myFilter` that behave's the same as `filter`.

// // for loop: --------

// Array.prototype.myFilter = function(callback){
//   let newArray = []
//   for (let i = 0; i< this.length; i++) {
//     if(callback(this[i])){
//       newArray.push(callback(this[i]))
//     }
//   }
//   return newArray
// }
//
// let filterExample = [1,2,3,4,5,6].myFilter((elem) => {
//   if (elem % 2 === 0) {
//     return elem
//   }
// })
// console.log(filterExample);

// // forEach: --------

// Array.prototype.myFilter = function (callback) {
//   let result = [];
//   this.forEach(el => {
//     if(callback(el)){
//       result.push(callback (el));
//     }
//   })
//   return result;
// };
//
// let filterExample = ["a", "b", "c", "d", "e"].myFilter(el => {
//   return el.toUpperCase()
// })
// console.log(filterExample);

//------------------------------------------------

//works, but:
//stupid question: shouldn't the forloop's "return false" prevent you from getting to the prototype's "return true".
//-------------------

// 4. Write a `myEvery`.

// Array.prototype.myEvery = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i])) {
//       return false;
//     }
//   }
//   return true;
// };
//
// let evens = [1,2,3,4,5,6].myEvery ((el) => {
//   return el % 2 ===0
// })
//
// console.log(evens);

//------------------------------------------------

//working (Xavier); but not for (!optional)
// 5. Write a `myReduce`. It should use the first element in the array if none is given.

// forEach: ---------------

// //creating method function with args = func, number:
// Array.prototype.myReduce = function (callback, optional){
//   let total = optional || this[0]
//   this.forEach((elem) => {
//     total = callback(total, elem)
//   })
//   return total
// }
//
// //variables:
// let starter = 20
// let arr = [1,2,3,4,5]
// const addThis = (num1, num2) => num1 + num2
//
// //invoking callback (w/ variables):
// let sum = arr.myReduce(starter, addThis)
//
// console.log(sum);

// //for loop:------------

// Array.prototype.myReduce = function (callback, acc) {
//   let startingIdx = 0;
//   if (!acc) {
//     acc = this[0]
//     startingIdx++
//   }
//   for (let i = startingIdx; i < this.length; i++) {
//     acc = callback(acc, this[i]);
//   }
//   return acc;
// };
//
//
// let arr = [1,2,3,4,5]
//
// let reducer = arr.myReduce((acc, currEl) => acc + currEl, 5)
//
// console.log(reducer);

// // Eloquent JS ref:-----------

// function reduce (array, callback, start){
//   let current = start;
//   for (let i = start; i < array.length; i++) {
//     current = callback(current, array[i]);
//   }
//   return current;
// }
// console.log(reduce([1,2,3,4], (a,b) => a+b, 0));

//------------------------------------------------

// 6. Write a `myTranspose`. This function should transpose a matrix.

// function transpose(mtx){
//     let grid = [];
//     for (let i = 0; i < mtx[0].length; i++) {
//       grid[i] = []; //i=inner; j=outer loop;
//       for (let j = 0; j < mtx.length; j++) {
//         // console.log(grid);
//         grid[i][j] = mtx[j][i];
//       }
//     }
//     return grid;
// }
//
// let mtx = [
//             [1, 2],
//             [3, 4],
//             [5, 6]
//           ]
//
// transpose(mtx)
// // [
// //   [1, 3, 5],
// //   [2, 4, 6]
// // ]
// console.log(transpose(mtx));

//------------------------------------------------

// 7. Use `myMap` to build a new array where every element is incremented by 10.

// Array.prototype.myMap = function (callback){
//   let result = [];
//   for(let i = 0; i< this.length; i++) {
//     //take each elem that has passed through teh callback function and push it into the prepared result array.
//     result.push(callback(this[i]));
//   }
// return result;
// }
//
// // test: //take the arr and map it such that the element is added to 10.
// let mapper = [1,2,3].myMap((el) => {
//   return el + 10
// })
//
// console.log(mapper);

//------------------------------------------------

// 8. Use `myMap` to build a new array where every non-string element is converted to an empty string.

// Array.prototype.myMap = function (callback){
//   let result = [];
//   for(let i = 0; i< this.length; i++) {
//     result.push(callback(this[i]));
//   }
// return result;
// }
//
// // test:
// let mapper = [1,2,3,"hello", "world"].myMap((el) => {
//   if (el % 1 === 0) {
//     return ""
//   }else {
//     return el
//   }
// })
//
// console.log(mapper);
// //[ '', '', '', 'hello', 'world' ]

//------------------------------------------------

// 9. Use `myFilter` to get only the even elements in an array.

// Array.prototype.myFilter = function(callback){
//   let newArray = []
//   for (let i = 0; i< this.length; i++) {
//     //if the callback function is satisfied/true for an elem, then push the altered element into "newArray"
//     if(callback(this[i])){
//       newArray.push(callback(this[i]))
//     }
//   }
//   return newArray
// }
//
// //the arr is filtered and each elem (if even) is returned to be pushed into the newArray (according to the method's functionality (Re: a method's funx === its result))
// let filterExample = [1,2,3,4,5,6].myFilter((elem) => {
//   if (elem % 2 === 0) {
//     return elem
//   }
// })
//
// //log this variable (which equals the invoked method and its declared (elem => {if statement {return elem}}) callback funx)
// console.log(filterExample);

//------------------------------------------------

// 10. Use `myEvery` to check if all elements in the array are the same.


// Array.prototype.myEvery = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (!callback(this[0],this[i])) {
//       return false;
//     }
//   }
//   return true;
// };
//
// let identical = [1,1,1,2,1,1].myEvery ((start, el) => {
//   if (start === el){
//     return true
//   }
// })
//
// console.log(identical);

//------------------------------------------------


// 11. Use `myReduce` to return the sum of every element in an array.

// Array.prototype.myReduce = function (callback, acc){
//   let total = 0
//
//   this.forEach((elem) => {
//     total = callback(total, elem)
//   })
//   return total
// }
//
// let sum = [1,2,3,4,5,10].myReduce ((acc, el) =>
//   acc + el, 5);
//
// console.log(sum);

//---------------------------------------------

// 12. Use `myMap` to build a new array that doubles each element. Then chain `myReduce` to find the product of all the elements.

// //myMap method:
// Array.prototype.myMap = function (callback){
//   let result = [];
//   for(let i = 0; i< this.length; i++) {
//     result.push(callback(this[i]));
//   }
// return result;
// }
//
// //myReducer method:
// Array.prototype.myReduce = function (callback, acc) {
//   let startingIdx = 0;
//   if (!acc) {
//     acc = this[0];
//     startingIdx++
//   }
//   for (let i = startingIdx; i < this.length; i++) {
//     acc = callback(acc, this[i])
//   }
//   return acc;
// }
//
// // test:
// let mapperReducer = [1,2,3].myMap((el) => {
//   return el * 2
// }).myReduce((acc, currEl) => {
//   return acc * currEl
// }, 1)
//
// // //Or sleeker:
// // let mapperReducer =
// // [1,2,3].myMap((el) => el * 2).myReduce((acc, currEl) => acc * currEl, 1)
//
// console.log(mapperReducer);

//-----------------------------------------------

// 13. Use `myReduce` to find the largest number in an array.

// // the prototyped myReduce:
// Array.prototype.myReduce = function (callback, acc) {
//   let startingIdx = 0;
//   if (!acc) {
//     acc = this[0];
//     startingIdx++
//   }
//   for (let i = startingIdx; i < this.length; i++) {
//     acc = callback(acc, this[i])
//   }
//   return acc;
// }
//
// // the test:
// let arr = [1,2,5,3,40]
//
// let result = arr.myReduce((acc, currEl) => {
//   if (acc > currEl) {
//     return acc
// } else {
//     return currEl
// }
// }, 10)
//
// console.log(result);

//--------------------------------------------

// 14. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.
// Use `myFilter` to return a new array of every element of arr that can be evenly divided by divisor.

// //prototype:
// Array.prototype.myFilter = function(callback){
//   let newArray = []
//   for (let i = 0; i< this.length; i++) {
//     if(callback(this[i])){
//       newArray.push(callback(this[i]))
//     }
//   }
//   return newArray
// }
//
// // test:
// let arr = [1,2,3,4,5,6]
// let divisor = 3
//
// const elementDivisibleBy = (divisor, arr) => {
//   let divided = arr.myFilter((el) => {
//     if (el % divisor === 0) {
//       return el
//     }
//   })
//   return divided
// }
//
// console.log(elementDivisibleBy(divisor ,arr));

//---------------------------------------------



// 14. Write a `myJoin` function.

// Array.prototype.myJoin = function() {
//   let joined = "";
//   for (let i = 0; i < this.length; i++) {
//     joined += this[i]
//
//   }
//   return joined;
// };
//
// let arr = ["h", "e", "a", "l", "t", "h", "y"];
//
// let joinExample = arr.myJoin(el => {
//   if (typeof el === String) {
//     return (joined += el);
//   }
// });
//
// console.log(joinExample);

//--------------------------------------------------

// 15. Write a `mySlice` function.

// Array.prototype.mySlice = function(index1, index2) {
//   let newArray = []
//
//   for (let i = index1; i < index2; i++) {
// // last i should be less than the index listed. n-1: i <= index2 - 1   OR   i < index2
//     newArray.push(this[i])
//   }
//   return newArray
// }
//
// console.log([0,1,2,3,4,5].mySlice(3,5));

//---------------------------------------------------



// 16. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.
// Use reduce.

// const countZeroes = (arr) => {
//   return arr.reduce((occurence, elemZero) => {
//     if (elemZero === 0){
//       occurence += 1;
//     }
//     return occurence
//   }, 0)
// }
//
// let arr16 = [0,0,0,4]
// console.log(countZeroes(arr16));


// Xavier:------------
// the callback for reduce has 4 arguments: acc, elem, index, array
// total/acc/start => optional start
// individual elements

// set the optional to 0
// if an element is equal to 0, add 1 to the start/acc

//return acc


//------------------------------------------------


// 17. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by it's index.

// let arr17 = [0,1,2,3,4,5]
//
// const numberTimesIdx = (arr) => {
//     return arr.map((elem, index) => elem * index)
// }
//
// console.log(numberTimesIdx(arr17));

//------------------------------------------------

// Bonus: Write a `myFlatten`. This should take a multi-dimensional array and return it as one array.






//
