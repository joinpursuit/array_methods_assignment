// # Exercises
//
// 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.
//
// ```
// Input: [1,2,3,4,5]
// Output: [11,12,13,14,15]
// ```
console.log('----- Question 1 -----');
let arr1 = [1, 2, 3, 4, 5];
arr1.forEach((element) => {
  console.log(element + 10);
});

// 2. Given an array, return a new array where every non-string element is converted to an empty string.
//
// ```
// Input: ["a", 123, "b", "c", {name: "cat"}]
// Output: ["a", "", "b", "c", ""]
// ```
console.log('----- Question 2 -----');
let arr2 = ['b', 4, 'c', null, 'd', { animal: 'cheetah' }];
let onlyStrings = arr2.map((currentValue) => {
  if (typeof (currentValue) !== typeof ('string')) {
    return '';
  } else {
    return currentValue;
  }
});
console.log(onlyStrings);

// 3. Write a function that returns only the even elements in an array of numbers.
//
// ```
// Input: [1,2,3,4,5]
// Output: [2,4]
// ```
console.log('----- Question 3 -----');
let arr3 = [1, 2, 3, 4, 5];
let evenArray = arr3.filter((currentValue) => {
      return currentValue % 2 === 0;
    });
console.log(evenArray);

// 4. Write a function that checks if all elements in the array are the same.
//
// ```
// Input: [1,1,1,1,1]
// Output: true
//
// Input: [1,1,1,1,2]
// Output: false
// ```
console.log('----- Question 4 -----');
let arr4 = ['b', 'b', 'b', 'b', 'm'];
let allSame = arr4.every((currentValue) => {
  let index1 = arr4[0];
  if (currentValue === index1) {
    return true;
  }

  return false;
});
console.log(allSame);

// 5. Write a function that returns the sum of every element in an array.
//
// ```
// Input: [1,2,3,4,5]
// Output: 15
// ```
console.log('----- Question 5 -----');
let arr5 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
let sum = arr5.reduce((total, currentValue) => {
  return total + currentValue;
});
console.log(sum);

// 6. Write a function that finds largest number in an array.
//
// ```
// Input: [1,2,6,3,4,5]
// Output: [6]
// ```
console.log('----- Question 6 -----');
let arr6 = [5, 4, 3, 2, 1, 10];
let largest = arr6.reduce((larger, currentValue) => {
  if (currentValue > larger) {
    return currentValue;
  } else {
    return larger;
}
});
console.log(largest);

// 7. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.
//
// ```
// Input: [1,0,0,2,0,3,0,0,0] //filter out and use array.length
// Output: 6
// ```
console.log('----- Question 7 -----');
let arr7 = [0, 1, 0, 0, 2, 0, 3, 0, 0, 0];
let numberOfZeros = arr7.filter((currentValue) => {
  return currentValue === 0;
}).length;
console.log(numberOfZeros);


// 8. Write a function that doubles every element in an array.
//
// ```
// Input: [1,2,3,4]
// Output: [2,4,6,8]
// ```
console.log('----- Question 8 -----');
let arr8 = [4, 5, 6, 7];
let doubled = [];
arr8.forEach((currentValue) => {
  doubled.push((currentValue * 2))});
console.log(doubled);

// 9. Write a function that finds the sum of every element in an array doubled
//
// ```
// Input: [1,2,3,4]
// Output: 20
// ```
console.log('----- Question 9 -----');
let arr9 = [3, 4, 5, 6];
let result = arr9.reduce((total, currentValue) => {
  return (total + currentValue);
});
let doubledResult = result * 2;
console.log(doubledResult);

// 10. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.
//Return a new array of every element of arr that can be evenly divided by divisor.
//
// ```
// Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
// Output: [5,10,15]
// ```
console.log('----- Question 10 -----');
let arr10 = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let x = 2;
let evenlyDivided = arr10.filter((currentValue) => {
  if (currentValue % x === 0) {
    return currentValue;
  }
});
console.log(evenlyDivided);


//  console.log('do this the right way');
//  arr10.filter(elementDivisibleBy = (divisor, arr) => {
//   if (currentValue % divisor === 0) {
//     return currentValue;
//   }
// });

// 11. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by its index.
//
// ```
// Input: [6,7,8,9]
// Output: [0,7,16,27]
// ```
console.log('----- Question 11 -----');
let arr11 = [2,3,4,5];
let  multiples = arr11.map(numberTimesIdx = (currentValue) => {
  return currentValue * arr11.indexOf(currentValue);
});
console.log(multiples);

// 12. Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.
//
// ```
// Input: [2,4,6,8,12]
// Output: true
//
// Input: [2,4,6,8,10]
// Output: false
// ```
console.log('----- Question 12 -----');
let arr12 = [2, 4, 6, 8, 9876120];
let evenNoZero = arr12.every((currentValue) => {
  if ((currentValue % 2 === 0) && (currentValue > 0) && (currentValue % 10 !== 0)) {
    return true;
  }

  return false;
});
console.log(evenNoZero);

// 13. Write a function that returns the sum of all odd numbers in an Array
//
// ```
// Input: [1,2,3,4,5]
// Output: 9
// ```
console.log('----- Question 13 -----');
arr13 = [1, 2, 3, 4, 5];
let sumOfOdds = arr3.filter((currentValue) => {
      return currentValue % 2 === 1;
    }).reduce((total, currentValue) => {
      return total + currentValue;
    });
console.log(sumOfOdds);

// 14. Write a function that returns a new array containing all of the strings in the original array uppercased.
//
// ```
// Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
// Output: ["CAT", "DOG", "BEAR"]
// ```
console.log('----- Question 14 -----'); //map
let arr14 = [{}, 1991, 'cat', 1994, ['hi'], { animal: 'cheetah' }, 'dog', 'bear'];
let stringsOnly = arr14.filter((currentValue) => {
  if (typeof currentValue === 'string') {
    return currentValue;
  }
}).map(currentValue =>  {
    return currentValue.toUpperCase();
  });
console.log(stringsOnly);

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
console.log('----- Bonus Question 1 -----');

// 2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.
console.log('----- Bonus Question 2 -----');

// 3. Write a `myFilter` that behaves the same as `filter`.
console.log('----- Bonus Question 3 -----');

// 4. Write a `myEvery` that behaves the same as `every`.
console.log('----- Bonus Question 4 -----');

// 5. Write a `myReduce`. It should use the first element in the array if none is given.
console.log('----- Bonus Question 5 -----');

// 6. Write a `myJoin` function.
console.log('----- Bonus Question 6 -----');

// 7. Write a `mySlice` function.
console.log('----- Bonus Question 7 -----');

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
console.log('----- Bonus Question 8 -----');

// 9. Write a `myFlatten`. This should take a multi-dimensional array and return it as one array.
//
// ```js
// let arr = [1, 2, [3, 4, 5, [6, 7, 8]]]
//   arr.myFlatten();
//   // => [1, 2, 3, 4, 5, 6, 7, 8]
// ```
console.log('----- Bonus Question 9 -----');
