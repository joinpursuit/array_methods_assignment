// # Exercises
//
console.log(`1. Given an array of numbers, write a function that returns
  a new array where every element is incremented by 10.`);
//
// ```
let inTenOut = [1,2,3,4,5]
// Output: [11,12,13,14,15]
// ```
let byTen = inTenOut.map(elem => elem +=10);
console.log(byTen);

console.log(`\n2. Given an array, return a new array where every
  non-string element is converted to an empty string.`);
//
// ```
let strOrNot = ["a", 123, "b", "c", {name: "cat"}]
// Output: ["a", "", "b", "c", ""]
// ```
let testing = strOrNot.map(el => {
  if (typeof el != 'string'){
    return el ='';
  } else {
    return el;
  }
});
//logging the new array
 console.log(testing);


console.log(`\n3. Write a function that returns only the even
  elements in an array of numbers.`);
//
// ```
let eveOut = [1,2,3,4,5,10,20]
// Output: [2,4]
// ```

const evenFunc =(evenNum) =>{
return evenNum.filter(el => el % 2 === 0);
}
console.log(evenFunc(eveOut));

console.log(`\n4. Write a function that checks if all elements in the array are the same.`);
//
// ```
let sameArr = [1,1,1,1,2];
// Output: true
//
// Input: [1,1,1,1,2]
// Output: false
// ```
const multfunc =(same) =>{
  let num = same[0]
  let test2 = same.every(el => {
    if (el === num){
      // console.log(el);
      return true;
    }
      //console.log(el);
      return false;
  });
  return test2;
};
console.log(multfunc(sameArr));

console.log(`\n5. Write a function that returns the sum of every element in an array.`);
//
// ```
let sumArr = [1,2,3,4,5];
// Output: 15
// ```
const sumFunc = (sumIng) => {
  let accArr = 0;
  let sum = sumIng.reduce((acc,el) => {return acc + el}, accArr);

  return sum;
};

console.log(sumFunc(sumArr));

console.log(`\n6. Write a function that finds largest number in an array.`);
//
// ```
let largestArr = [1,2,6,3,4,5];
// Output: [6]
// ```
const largest = (larparam) => {
 let large = largestArr.reduce((acc, currEl) => {
    if (acc > currEl) {
      return acc;
    } else {
      return currEl;
    }
  });
  return large;
};
console.log(largest(largestArr));

console.log(`\n7. Write a function 'countZeroes', which takes an array of numbers
  as its argument and returns the amount of zeroes that occur in it.`);
//
// ```
let zeroD30 = [1,0,0,2,0,3,0,0,0,4,7,0,100,8,0];
// Output: 6
// ```
const countZeroes = (count0) => {
  let count =0;
  zeroD30.forEach(el => { if (el === 0){ count ++} });
  return count;
}

console.log(countZeroes(zeroD30));

console.log(`\n8. Write a function that doubles every element in an array.`);
let double = [1,2,3,4,16];
// Output: [2,4,6,8]
// ```
const doubleDutch = (dubNum) => {
  let result = dubNum.map(el => el * 2)
  return  result;
}
console.log(doubleDutch(double));

console.log(`\n9. Write a function that finds the product of every
  element in an array doubled`);
// ```
// Input: [1,2,3,4]
// Output: 20
// ```
const doubleProduct = (dubNum) =>{
  let accArr =0;
  let testing2 = dubNum.map(el => el * 2).reduce((acc,curElem) =>{return acc + curElem}, accArr);
  return  testing2;
}
console.log(doubleProduct(double));

console.log(`\n10. Write a function 'elementDivisibleBy' with parameters 'divisor' and 'arr'.
Return a new array of every element of arr that can be evenly divided by divisor.`);
//
// ```
// Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
// Output: [5,10,15]
// ```

/*const elementDivisibleBy =(divisor,arr) => {
  let divi = arr.filter(el => el % divisor ===0);
  return divi
}
*/
const elementDivisibleBy =(divisor,arr) => divi = arr.filter(el => el % divisor ===0);

console.log(elementDivisibleBy(3,[4,5,6,7,8,9,10,11,12,13,14,15]));

console.log(`\n11. Write a 'numberTimesIdx' that uses 'map' and multiples each number in the array by its index.`);
//
// ```
let toXIndex = [5,6,7,8,9,12];
// Output: [0,7,16,27]
// ```
/* before turning function in
const numberTimesIdx =(id) =>{
  let times = id.map((elem,i) => { return elem * i });
  return times;
}*/
const numberTimesIdx =(id) => times = id.map((elem,i) => { return elem * i });
console.log(numberTimesIdx(toXIndex));

console.log(`\n12. Write a function that returns whether or not
every value in an array is a positive even number that doesn't end in 0.`);
//
// ```
let input = [2,4,6,8,14]
// Output: true
//
let input2 = [2,4,6,8,10]
// Output: false
// ```
const endZero =(fin0) =>{
  let test3 = fin0.every(el => {
    if (el % 2 === 0 && el % 10 !== 0){
      return true;
    }
      return false;
  });
  return test3;
};

console.log(endZero(input));
//log the array with a number that ends with zero
console.log(endZero(input2));

console.log(`\n13. Write a function that returns the sum of all odd numbers in an Array.`);
//
// ```
let inputOdd = [1,2,3,4,5];
// Output: 9
// ```
/*const sumOdd =(odd) => {
  let sum = odd.filter(el => el % 2 !== 0).reduce((acc,elem) => {return acc + elem});
  return sum;
}*/
const sumOdd =(odd => sum = odd.filter(el => el % 2 !== 0).reduce((acc,elem) => {return acc + elem}));
console.log(sumOdd(inputOdd));

 console.log(`\n14. Write a function that returns a new array containing
   all of the strings in the original array uppercased.`);
// ```
let objInput = [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "lion", "tiger", 'bear', "oh my"]
// Output: ["CAT", "DOG", "BEAR"]
// ```
const filtStr = (strFilter) => {
  let upper = strFilter.filter(el => {
    // console.log("el", el)
    if (typeof el === "string"){
      return el
    }
  }). map( el => el.toUpperCase());
  // console.log("upper", upper)
  return upper;
}

console.log(filtStr(objInput));

// console.log(`\n\n #### Bonus: #####`);
// //
// // You can write your own array methods!
// //
// // ```js
// // Array.prototype.sayHi = function() {
// //   console.log("Hi")
// // }
// // ```
// //
// // Now every array that you write has a `sayHi` method that you can call.
// //
// // ```js
//  let myArr = [1,2,3]
// // myArr.sayHi() //Logs "Hi" to the console
// // ```
// //
// //
// //1. Using Array.prototype add a new method 'myForEach' that mimics the behavior of the built in 'forEach'.`);
//
// Array.prototype.myForEach = function (arrayCall) {
//   for (let i of tis.myArr){
//     arrayCall(i);
//   }
//
// }
// //2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.
//
// Array.prototype.myMap = function (mapArr,mapCallback) {
//   //console.log(mapArr);
//   let arrMap =[];
//   mapArr.myForEach ( el => {
//     arrMap.push(mapCallback(el));
//   });
//   return arrMap;
// };
//
//
// // let arrMap =[];
// // for (let i =0; i<mapArr.length;i++){
// //   arrMap.push(mapCallback(mapArr[i]));
// // }
// // return arrMap;
// // };
//
// // 3. Write a `myFilter` that behaves the same as `filter`.
//
//
// Array.prototype.myFilter = function(filArr,callback) {
//   let arrResult =[];
//   filArr.myForEach(el => {
//     if (callback(filArr[el])){
//       arrResult.push(filArr[el])
//     }
//   });
//   return arrResult;
// }
//
// // for (let i = 0; i <filArr.length; i++){
// //   if (callback(filArr[i])){
// //     arrResult.push(filArr[i])
// //   }
// // }
// // return arrResult;
//
// // 4. Write a `myEvery` that behaves the same as `every`.
// Array.prototype.myEvery = function (eachArray, arrayCall) {
//   eachArray.myForEach(el => {
//     if ( arrayCall(el) === true){
//       return true;
//     }
//     return false;
//   });
//
// }
//
// // 5. Write a `myReduce`. It should use the first element in the array if none is given.
// Array.prototype.myReduce = function (redArr, combiner, initialize) {
//   let currEl = initialize;
//   let redTest = redArr.myForEach(el =>{currEl = combiner(currEl, el)});
//   return redTest;
//
// };
//
// // 6. Write a `myJoin` function.
// // Array.prototype.myJoin =function (joinArr) {
// //   let newStr ='';
// //   joinArr.myForEach(el => el += )
// // }
// // 7. Write a `mySlice` function.
// //
// // 8. Write a `myTranspose`. This function should transpose a matrix.
// //
// // ```js
// // let mtx = [
// //             [1, 2],
// //             [3, 4],
// //             [5, 6]
// //           ]
// //
// // mtx.myTranspose();
// //
// // // => [
// //         [1, 3, 5],
// //         [2, 4, 6]
// //        ]
// // ```
// Array.prototype.myTranspose = function (arrTranspose){
//   return arrTranspose[0].map((el,i) => arrTranspose.map(row => row[i]));
// }
// // 9. Write a `myFlatten`. This should take a multi-dimensional array and return it as one array.
// //
// // ```js
//  let arr = [1, 2, [3, 4, 5, [6, 7, 8]]]
// //   arr.myFlatten();
// //   // => [1, 2, 3, 4, 5, 6, 7, 8]
// // ```
