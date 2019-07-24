// # Exercises
console.clear();
// 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.

// ```
// Input: [1,2,3,4,5]
// Output: [11,12,13,14,15]
// ```

let arr1 = [1, 2, 3, 4, 5];
let arrIncByTen = arr1.map(num => num + 10);
console.log("1)", arrIncByTen);

// 2. Given an array, return a new array where every non-string element is converted to an empty string.

// ```
// Input: ["a", 123, "b", "c", {name: "cat"}]
// Output: ["a", "", "b", "c", ""]
// ```

let arr2 = [
  "a",
  123,
  "b",
  "c",
  {
    name: "cat"
  }
];
let nonStrToEmpty = arr2.map(ele => (typeof ele !== "string" ? "🤟" : ele));
console.log("2) ", nonStrToEmpty);

// 3. Write a function that returns only the even elements in an array of numbers.

// ```
// Input: [1,2,3,4,5]
// Output: [2,4]
// ```

let arr3 = [1, 2, 3, 4, 5];
let evenNums = arr3.filter(num => num % 2 === 0).map(num => num);
console.log("3) ", evenNums);

// 4. Write a function that checks if all elements in the array are the same.

// ```
// Input: [1,1,1,1,1]
// Output: true

// Input: [1,1,1,1,2]
// Output: false
// ```

let arr4 = [1, 1, 1, 1, 1];
let sameEleCheck = arr4.every(num => arr4[0]);
console.log("4) ", sameEleCheck);

// 5. Write a function that returns the sum of every element in an array.

// ```
// Input: [1,2,3,4,5]
// Output: 15
// ```

let arr5 = [1, 2, 3, 4, 5];
let sumOfArr = arr5.reduce((acc, num) => num + acc);
console.log("5) ", sumOfArr);

// 6. Write a function that finds largest number in an array.

// ```
// Input: [1,2,6,3,4,5]
// Output: [6]
// ```

let arr6 = [1, 2, 6, 3, 4, 5];
let largestNum = arr6.reduce(
  (acc, num) => (num > acc ? (acc = num) : acc),
  -Infinity
);
console.log("6) ", largestNum);

// 7. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.

// ```
// Input: [1,0,0,2,0,3,0,0,0]
// Output: 6
// ```

let arr7 = [1, 0, 0, 2, 0, 3, 0, 0, 0];
let countZeroes = arr =>
  arr.reduce((acc, num) => (num === 0 ? (acc += 1) : acc), 0);
console.log("7) ", countZeroes(arr7));

// 8. Write a function that doubles every element in an array.

// ```
// Input: [1,2,3,4]
// Output: [2,4,6,8]
// ```

let arr8 = [1, 2, 3, 4];
let doubleArr = arr => arr.map(num => num * 2);
console.log("8 ", doubleArr(arr8));

// 9. Write a function that finds the product of every element in an array doubled

// ```
// Input: [1,2,3,4]
// Output: 20
// ```

let arr9 = [1, 2, 3, 4];
let prodArr = arr => arr.map(num => num * 2).reduce((acc, num) => num * acc);
console.log("9) ", prodArr(arr9));
// 10. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.  Return a new array of every element of arr that can be evenly divided by divisor.

// ```
// Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
// Output: [5,10,15]
// ```

let arr10 = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let elementDivisibleBy = (divisor, arr) =>
  arr.filter(num => num % divisor === 0);
console.log("10) ", elementDivisibleBy(5, arr10));

// 11. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by its index.

// ```
// Input: [6,7,8,9]
// Output: [0,7,16,27]
// ```

let arr11 = [6, 7, 8, 9];
let numberTimesIdx = arr11.map((num, index) => num * index);
console.log("11) ", numberTimesIdx);

// 12. Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.

// ```
// Input: [2,4,6,8,12]
// Output: true

// Input: [2,4,6,8,10]
// Output: false
// ```

let arr12a = [2, 4, 6, 8, 12];
let arr12b = [2, 4, 6, 8, 10];
let posEvenNoZero = arr =>
  arr.every(num => num >= 0 && num % 2 === 0 && num % 10 !== 0);
console.log("12a) ", posEvenNoZero(arr12a));
console.log("12b) ", posEvenNoZero(arr12b));

// 13. Write a function that returns the sum of all odd numbers in an Array

// ```
// Input: [1,2,3,4,5]
// Output: 9
// ```

let arr13 = [1, 2, 3, 4, 5];
let sumOdd = arr => arr.reduce((acc, num) => acc + num);
console.log("13) ", sumOdd(arr13));

// 14. Write a function that returns a new array containing all of the strings in the original array uppercased.

// ```
// Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
// Output: ["CAT", "DOG", "BEAR"]
// ```

let arr14 = [{},
  1,
  "cat",
  3,
  ["hi"],
  {
    name: "dog"
  },
  "dog",
  "bear"
];
let strUppercase = arr =>
  arr.filter(ele => typeof ele === "string").map(ele => ele.toUpperCase());
console.log("14) ", strUppercase(arr14));

// ## Bonus:

// You can write your own array methods!

// ```js
// Array.prototype.sayHi = function() {
//   console.log("Hi")
// }
// ```

// Now every array that you write has a `sayHi` method that you can call.

// ```js
// let myArr = [1,2,3]
// myArr.sayHi() //Logs "Hi" to the console
// ```

// 1. Using Array.prototype add a new method `myForEach` that mimics the behavior of the built in `forEach`.
Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};
let myMap = [];
[1, 2, 3, 4, 5].myForEach(num => myMap.push(num));
console.log("Bonus #1 ", myMap);
// 2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.
Array.prototype.myMap = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i]));
  }
  return newArr;
};
let myMapLog = [1, 2, 3, 4, 5].myMap(num => num * 2);
console.log("Bonus #2 ", myMapLog);
// 3. Write a `myFilter` that behaves the same as `filter`.
Array.prototype.myFilter = function (cb) {
  let filtered = [];
  for (let i = 0; i < this.length; i++) {
    cb(this[i]) ? filtered.push(cb(this[i])) : null;
  }
  return filtered;
};
let myFilter = [1, 2, 3, 4, 5, 6].myFilter(num => (num % 2 === 0 ? num : null));
console.log("Bonus #3 ", myFilter);
// 4. Write a `myEvery` that behaves the same as `every`.
Array.prototype.myEvery = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i])) {
      return false;
    }
  }
  return true;
};
let myEvery = [1, 2, 3, 4].myEvery(num => (num % 2 === 0 ? num : null));
console.log("Bonus #4 ", myEvery);
// 5. Write a `myReduce`. It should use the first element in the array if none is given.
Array.prototype.myReduce = function (cb, acc) {
  let accumulator = acc;
  let index = 0;
  if (!accumulator) {
    accumulator = this[0];
    index = 1;
  }
  for (index; index < this.length; index++) {
    accumulator = cb(accumulator, this[index]);
  }
  return accumulator;
};
let myReduce = [1, 2, 3, 4, 5].myReduce((acc, num) => num + acc);
console.log("Bonus #5 ", myReduce);
// 6. Write a `myJoin` function.
Array.prototype.myJoin = function (char = "") {
  let str = "" + this[0];
  for (let i = 1; i < this.length; i++) {
    str += char + this[i];
  }
  return str;
};
let myJoin = [1, "a", 2, "b"].myJoin();
console.log("Bonus #6 ", myJoin);
// 7. Write a `mySlice` function.
Array.prototype.mySlice = function (start, length = this.length) {
  let sliced = [];
  if (length > this.length) {
    length = this.length;
  }
  for (let i = start; i < length; i++) {
    sliced.push(this[i]);
  }
  return sliced;
};
let mySlice = [1, 2, 3, 4, 5].mySlice(1, 3);
console.log("Bonus #7 ", mySlice);
// 8. Write a `myTranspose`. This function should transpose a matrix.

// ```js
// let mtx = [
//             [1, 2],
//             [3, 4],
//             [5, 6]
//           ]

// mtx.myTranspose();

// // => [
//         [1, 3, 5],
//         [2, 4, 6]
//        ]
// ```
Array.prototype.myTranspose = function () {
  let col = this[0].length;
  let row = this.length;
  let transformedArr = [];
  for (let i = 0; i < col; i++) {
    let subArr = [];
    for (let j = 0; j < row; j++) {
      subArr.push(this[j][i]);
    }
    transformedArr.push(subArr);
  }
  return transformedArr;
}
let myTranspose = [
  [1, 2],
  [3, 4],
  [5, 6]
].myTranspose();
console.log("Bonus #8 ", myTranspose);


// 9. Write a `myFlatten`. This should take a multi-dimensional array and return it as one array.

// ```js
// let arr = [1, 2, [3, 4, 5, [6, 7, 8]]]
//   arr.myFlatten();
//   // => [1, 2, 3, 4, 5, 6, 7, 8]
// ```

// Recursion
Array.prototype.myFlatten = function () {
  return this.reduce((acc, arr) => {
    return acc.concat(Array.isArray(arr) ? arr.myFlatten() : arr)
  }, []);
}
let myFlatten = [1, 2, [3, 4, 5, [6, 7, 8]]].myFlatten();

// console.log("Bonus #9 ", myFlatten);


// Using stack

function flattenWithAStack(arr) {
  const originalArr = arr;
  let outputArr = [];
  let stackArr = [];
  let stackIndex = [];

  for (let i = 0; i < originalArr.length; i++) {

    if (!Array.isArray(originalArr[i])) {
      outputArr.push(originalArr[i]);
    } else {
      stackArr.push(originalArr[i]);
      while (originalArr.length > 0 || stackArr.length > 0) {
        
      }
    }
      
  }


}

let arrStackMe = [1, 2, [3, 4, 5, [6, 7, 8]]];


// console.log("Bonus #9 ", myFlatten);
// 347 833 6506 