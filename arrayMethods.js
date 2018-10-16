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



// // // console.log([1,2,3].myMap((el) => {
// // //   return el * 2
// // // });
//
//
// // // [1,2,3].myMap(el => {
// // //   return el * 2;
// // // })
// // // console.log([1,2,3].myMap(el));
// // //
// // // let double = [1,2,3].myMap((el) => {
// // //   return el*2
// // //   })
// // //   console.log(double)
// // // }





// 3. Write a 'myFilter` that behave's the same as `filter`.

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
//
// console.log(filterExample);



// // Array.prototype.myFilter = function (callback) {
// //   let result = [];
// //   this.myForEach(el => {
// //     result.slice(callback (el));
// //   })
// //   return result;
// // };
// // let choice = ["a", "b", "c", "d", "e"].myFilter(el)






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




// 5. Write a `myReduce`. It should use the first element in the array if none is given.

// Array.prototype.myReduce = function (){
//   let total = 0
//   this.forEach((elem) => {
//     total += elem
//   })
//   return total
// }
//
// let sum = [1,2,3,4,5].myReduce ((acc, el) => {
//   return el + acc;
// })
// console.log(sum);





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
// // , [7, 8, 9]]
// transpose(mtx)
// // [
// //   [1, 3, 5],
// //   [2, 4, 6]
// // ]
// console.log(transpose(mtx));





// 7. Use `myMap` to build a new array where every element is incremented by 10.

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
//   return el + 10
// })
//
// console.log(mapper);





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




// 9. Use `myFilter` to get only the even elements in an array.

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
//
// console.log(filterExample);





// 10. Use `myEvery` to check if all elements in the array are the same.

// // not working:
// Array.prototype.myEvery = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i]) !== callback(this[i+1])) {
//       return false;
//     }
//   }
//   return true;
// };
//
// let identical = [1,1,1,1,1,1].myEvery ((el) => {
//   // if (el === el){
//     return el
//   // }
// })
//
// console.log(identical);




// 11. Use `myReduce` to return the sum of every element in an array.

// Array.prototype.myReduce = function (){
//   let total = 0
//   this.forEach((elem) => {
//     total += elem
//   })
//   return total
// }
//
// let sum = [1,2,3,4,5,10].myReduce ((acc, el) => {
//   return el + acc;
// })
// console.log(sum);





// 12. Use `myMap` to build a new array that doubles each element. Then chain `myReduce` to find the product of all the elements.


// Array.prototype.myMap = function (callback){
//   let result = [];
//   for(let i = 0; i< this.length; i++) {
//     result.push(callback(this[i]));
//   }
// return result;
// }
//
//
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
//
//
// // test:
// let mapperReducer = [1,2,3].myMap((el) => {
//   return el * 2
// }).myReduce((acc, currEl) => {
//   return acc * currEl
// }, 1)
//
// console.log(mapperReducer);




// 13. Use `myReduce` to find the largest number in an array.

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
// let arr = [1,2,5,3,4]
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






// 14. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.
// Use `myFilter` to return a new array of every element of arr that can be evenly divided by divisor.


//not done
Array.prototype.myFilter = function(callback){
  let newArray = []
  for (let i = 0; i< this.length; i++) {
    if(callback(this[i])){
      newArray.push(callback(this[i]))
    }
  }
  return newArray
}


let elementDivisibleBy =  [1,2,3,4,5,6].myFilter((divisor, arr) => {
  arr.myForEach((el) => {
    if (el % divisor === 0) {
      return el
    }
})
}, 2)

console.log(filterExample);





// 14. Write a `myJoin` function.

// 15. Write a `mySlice` function.

// 16. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.
// Use reduce.

// 17. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by it's index.

// Bonus: Write a `myFlatten`. This should take a multi-dimensional array and return it as one array.








//
