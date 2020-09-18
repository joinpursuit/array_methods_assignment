console.log("Question 1");

// Given an array of numbers, write a function that returns a new array where every element is incremented by 10.
//
// Input: [1,2,3,4,5]
// Output: [11,12,13,14,15]

const incTen = (arr) => {
  let plusTen = arr.map((el) => {
    return el + 10;
  });
  return plusTen;
};

// Given an array, return a new array where every non-string element is converted to an empty string.
//
// Input: ["a", 123, "b", "c", {name: "cat"}]
// Output: ["a", "", "b", "c", ""]

const notStr = (arr) => {
  let newArr = [];
  arr.forEach((each) => {
    if (typeof each != "string") {
      each = "";
      newArr.push(each);
    } else if (typeof each === "string") {
      newArr.push(each);
    }
  });
  return newArr;
};

// Write a function that returns only the even elements in an array of numbers.
//
// Input: [1,2,3,4,5]
// Output: [2,4]

const onlyEven = (arr) => {
  let even = arr.filter((el) => {
    return el % 2 === 0;
  });
  return even;
};

// Write a function that checks if all elements in the array are the same.
//
// Input: [1,1,1,1,1]
// Output: true
//
// Input: [1,1,1,1,2]
// Output: false

const allSame = (arr) => {
  let same = arr.every((el) => {
    return el === arr[0];
  });
  return same;
};
// Write a function that returns the sum of every element in an array.
//
// Input: [1,2,3,4,5]
// Output: 15

const sum = (arr) => {
  let total = arr.reduce((acc, el) => {
    return acc + el;
  });
  return total;
};

// Write a function that finds largest number in an array.
//
// Input: [1,2,6,3,4,5]
// Output: [6]

const biggest = (arr) => {
  let big = arr.reduce((acc, currVal) => {
    console.log(currVal);
    if (acc > currVal) {
      return acc;
    } else {
      return currVal;
    }
  });
  return big;
};

// Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.
//
// Input: [1,0,0,2,0,3,0,0,0]
// Output: 6
//
const countZeroes = (arr) => {
  let count = 0;
  let zero = arr.forEach((el) => {
    if (el === 0) {
      count++;
    }
  });
  return count;
};

// Write a function that doubles every element in an array.
//
// Input: [1,2,3,4]
// Output: [2,4,6,8]

const double = (arr) => {
  let db = arr.map((el) => {
    return el * 2;
  });
  return db;
};

// Write a function that finds the sum of every element in an array doubled
//
// Input: [1,2,3,4]
// Output: 20

const sumDoubled = (arr) => {
  let sd = arr
    .map((el) => {
      return el * 2;
    })
    .reduce((acc, el) => {
      return acc + el;
    });
  return sd;
};

// console.log("Question 10");
// Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.  Return a new array of every element of arr that can be evenly
// divided by divisor.
//
// Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
// Output: [5,10,15]
//
const elementDivisibleBy = (arr, divisor) => {
  let div = arr.filter((el) => {
    return el % divisor === 0;
  });
  return div;
};

// Write a `numberTimesIdx` that uses `map` and multiples each number in the array by its index.
//
// Input: [6,7,8,9]
// Output: [0,7,16,27]

const numberTimesIdx = (arr) => {
  let nTI = arr.map((el, i) => {
    return el * i;
  });
  return nTI;
};

// Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.
//
// Input: [2,4,6,8,12]
// Output: true
//
// Input: [2,4,6,8,10]
// Output: false

const positiveNotZero = (arr) => {
  let pNZ = arr.every((el) => {
    return el < 0 && el % 2 === 0 && el % 10 != 0;
  });
  return pNZ;
};

// Write a function that returns the sum of all odd numbers in an Array
//
// Hint: What is the second argument in `reduce`?
//
// Input: [2,3,4,5]
// Output: 8
//
// Input: [1,2,3,4,5]
// Output: 9

const sumAllOdd = (arr) => {
  let sAO = arr
    .filter((el) => {
      return el % 2 === 1;
    })
    .reduce((acc, el) => {
      return acc + el;
    });
  return sAO;
};
// Write a function that returns a new array containing all of the strings in the original array uppercased.
//
// Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
// Output: ["CAT", "DOG", "BEAR"]

newArr = arr
  .filter((el) => {
    return typeof el === "string";
  })
  .map((el) => {
    return el.toUpperCase();
  });
return newArr;

//  You can write your own array methods!

// Array.prototype.sayHi = function() {
//   console.log("Hi")
// }
// Now every array that you write has a sayHi method that you can call.

// let myArr = [1,2,3]
// myArr.sayHi() //Logs "Hi" to the console
// Using Array.prototype add a new method myForEach that mimics the behavior of the built in forEach.

// Use your myForEach to add myMap to the Array prototype. myMap should behave the same as regular map.

// Write a myFilter that behaves the same as filter.

// Write a myEvery that behaves the same as every.

// Write a myReduce. It should use the first element in the array if none is given.

// Write a myJoin function.

// Write a mySlice function.

// Write a myTranspose. This function should transpose a matrix.

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
//        You can write your own array methods!

//        Array.prototype.sayHi = function() {
//          console.log("Hi")
//        }
//        Now every array that you write has a sayHi method that you can call.

//        let myArr = [1,2,3]
//        myArr.sayHi() //Logs "Hi" to the console
//        Using Array.prototype add a new method myForEach that mimics the behavior of the built in forEach.

//        Use your myForEach to add myMap to the Array prototype. myMap should behave the same as regular map.

//        Write a myFilter that behaves the same as filter.

//        Write a myEvery that behaves the same as every.

//        Write a myReduce. It should use the first element in the array if none is given.

//        Write a myJoin function.

//        Write a mySlice function.

//        Write a myTranspose. This function should transpose a matrix.

//        let mtx = [
//                    [1, 2],
//                    [3, 4],
//                    [5, 6]
//                  ]

//        mtx.myTranspose();

//        // => [
//                [1, 3, 5],
//                [2, 4, 6]
//               ]
//        Write a myFlatten. This should take a multi-dimensional array and return it as one array.
//        let arr = [1, 2, [3, 4, 5, [6, 7, 8]]]
//          arr.myFlatten();
//          // => [1, 2, 3, 4, 5, 6, 7, 8]
//        Write a function that returns the sum of every element in an array.
//        Input: [1,2,3,4,5]
//        Output: 15
//        Write a function that finds largest number in an array.
//        Input: [1,2,6,3,4,5]
//        Output: [6]
//        Write a function that returns the sum of all odd numbers in an Array
//        Hint: What is the second argument in reduce?

//        Input: [2,3,4,5]
//        Output: 8

//        Input: [1,2,3,4,5]
//        Output: 9
