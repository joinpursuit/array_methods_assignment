//
// # Exercises
//
// 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.
//
// ```
// Input: [1,2,3,4,5]
// Output: [11,12,13,14,15]
// ```

let arr1 = [1, 2, 3, 4, 5]


let result = arr1.map (function(currentElem){
  return currentElem + 10
})

console.log(result);

// 2. Given an array, return a new array where every non-string element is converted to an empty string.
//
// ```
// Input: ["a", 123, "b", "c", {name: "cat"}]
// Output: ["a", "", "b", "c", ""]
// ```

let arr2 = ["a", 123, "b", "c", {name: "cat"}];
let result2 = arr2.filter(elem => {
  if (typeof(elem) !== 'string') {
    return ""
  } else if (typeof(elem === 'string')) {
    return elem
  }
});

console.log(result2);

// 3. Write a function that returns only the even elements in an array of numbers.
//
// ```
// Input: [1,2,3,4,5]
// Output: [2,4]
// ```
let arr3 = [1, 2, 3, 4, 5];

let result3 = arr3.filter(currentElem => {
  return currentElem % 2 === 0;
})

console.log(result3);

// 4. Write a function that checks if all elements in the array are the same.
//
// ```
// Input: [1,1,1,1,1]
// Output: true
//
// Input: [1,1,1,1,2]
// Output: false
// ```

let arr4 = [1, 1, 1, 1, 2]

let result4 = arr4.every(elem => {
  for (let i = 0; i < arr4.length; i++) {
    return elem === arr4[i]
  }
})

console.log(result4);

// 5. Write a function that returns the sum of every element in an array.
//
// ```
// Input: [1,2,3,4,5]
// Output: 15
// ```

let arr5 = [1,2,3,4,5];
let sum = 0
arr5.forEach(num => sum += num)
console.log(sum)

// 6. Write a function that finds largest number in an array.
//
// ```
// Input: [1,2,6,3,4,5]
// Output: [6]
// ```

let arr6 = [1,2,6,3,4,5];

let largestNum = arr6.reduce((acc, currentEl) => {
    if (acc > currentEl) {
        return acc;
    } else {
        return currentEl;
    }
});

console.log(largestNum);

// 7. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.
//
// ```
// Input: [1,0,0,2,0,3,0,0,0]
// Output: 6
// ```
let arr7 = [1,0,0,2,0,3,0,0,0];

function countZeroes(arr) {
  let zero = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zero += 1;
    }
  } return zero;
}

console.log(countZeroes(arr7));

// 8. Write a function that doubles every element in an array.
//
// ```
// Input: [1,2,3,4]
// Output: [2,4,6,8]
// ```

let arr8 = [1,2,3,4];
let result8 = arr8.map(function (currentElem) {
  return currentElem * 2;
});

console.log(result8);

// 9. Write a function that finds the sum of every element in an array doubled
//
// ```
// Input: [1,2,3,4]
// Output: 20
// ```

let arrSum = [1, 2, 3, 4];
let result9Sum = arrSum
  .map(num => {
    return num * 2
  })
  .reduce(num => {
    return total + num;
  }, 0);

console.log(result9Sum)

// 10. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.  Return a new array of every element of arr that can be evenly divided by divisor.
//
// ```
// Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
// Output: [5,10,15]
// ```

// function elementDivisibleBy (arr, divisor) {
//   for (let i = 0; i < arr.length; i++) {
//     if
//   }
// }

// 11. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by its index.
//
// ```
// Input: [6,7,8,9]
// Output: [0,7,16,27]
// ```
//
// 12. Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.
//
// ```
// Input: [2,4,6,8,12]
// Output: true
//
// Input: [2,4,6,8,10]
// Output: false
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
// ```
//
// 14. Write a function that returns a new array containing all of the strings in the original array uppercased.
//
// ```
// Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
// Output: ["CAT", "DOG", "BEAR"]
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
