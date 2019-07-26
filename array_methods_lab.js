// # Exercises
//
// 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.
console.log("Number 1")
let arr = [1, 2, 3, 4, 5]

let addTen = arr.map((elem) => {
  return elem + 10
})

console.log(addTen);

// 2. Given an array, return a new array where every non-string element is converted to an empty string.
console.log("Number 2")
let arr2 = ["a", 123, "b", "c", {name: "cat"}]


let onlyStrings = arr2.map((elem) => {
  if (typeof(elem) !== "string") {
    return ""
  } return elem
})

console.log(onlyStrings);

//3. Write a function that returns only the even elements in an array of numbers.
console.log("Number 3")
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let onlyEven = arr3.filter((elem) => {
  return elem % 2 === 0
})

console.log(onlyEven);

//4. Write a function that checks if all elements in the array are the same.
console.log("Number 4")
let arr4 = [1, 1, 1, 1, 2]

let allSame = arr4.every((elem) => {
  return (elem === arr[0])
})

console.log(allSame);

// 5. Write a function that returns the sum of every element in an array.
console.log("Number 5")
let arr5 = [1, 2, 3, 4]

let sum = arr5.reduce((acc, elem) => {
 return acc + elem
})

console.log(sum);

// 6. Write a function that finds largest number in an array.
console.log("Number 6")
let arr6 = [8, 2, 5, 1, 9, 7]

let largestNum = arr6.reduce((acc, elem) => {
  if (acc > elem) {
    return acc
  } return elem
}, 0);

console.log(largestNum);


// 7. Write a function `countZeroes`, which takes an array of numbers as its argument
// and returns the amount of zeroes that occur in it.
console.log("Number 7")
let arr7 = [1,0,0,2,0,3,0,0,0]

let countZeroes = arr7.filter((elem) => {
  return elem === 0
}).length

console.log(countZeroes);


// 8. Write a function that doubles every element in an array.
console.log("Number 8")
let arr8 = [1, 2, 3, 4, 5]

let doubled = arr8.map((elem) => {
  return elem * 2
});

console.log(doubled);

// 9. Write a function that finds the sum of every element in an array doubled
console.log("Number 9")
let arr9 = [1, 2, 3, 4, 5]

let sumOfDoubled = arr8
.map((elem) => {
  return elem * 2
})
.reduce((sum, elem) => {
  return sum + elem
}, 0)

console.log(sumOfDoubled);

// 10. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.
// Return a new array of every element of arr that can be evenly divided by divisor.
console.log("Number 10")
let arr10 = [4,5,6,7,8,9,10,11,12,13,14,15]

//this one only works for a divisor of 5
let elementDivisibleBy = arr10.filter((elem) => {
  return elem % 5 === 0
})
 console.log(elementDivisibleBy);

// this one works for any divisor
// const elementDivisibleBy = (divisor, arr) => {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++){
//     if ((arr[i] % divisor) === 0) {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }
//
// console.log(elementDivisibleBy(5, arr10));

// 11. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by its index.
console.log("Number 11")
let arr11 = [6,7,8,9]

let numberTimesIdx = arr11.map((elem, index) => {
  return elem * index
})

console.log(numberTimesIdx);

// 12. Write a function that returns whether or not every value in an array is a
// positive even number that doesn't end in 0.
console.log("Number 12")
let arr12 = [2,4,6,8,10]

let evenNum = arr12.every((el) => {
  return (el > 0 && el % 2 === 0 && el % 10 !== 0)
})

console.log(evenNum);

// 13. Write a function that returns the sum of all odd numbers in an Array
console.log("Number 13")
let arr13 = [1,2,3,4,5]

let sumOfOdd = arr13
.filter((elem) => {
  return elem % 2 !== 0
})
.reduce((acc, elem) => {
  return acc + elem
})

console.log(sumOfOdd);

// 14. Write a function that returns a new array containing all of the strings in the original array uppercased.
console.log("Number 14")
let arr14 = [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]


let stringUpperCase = arr14
.filter((elem) => {
  return (typeof(elem) === "string")
})
.map((elem) => {
  return elem.toUpperCase()
})

console.log(stringUpperCase);



///// BONUS /////
console.log("Bonus Example")

// This doesnt work
Array.prototype.sayHi = function(param) {
  console.log("Hi")
}

let myArr = [1, 2, 3]
myArr.sayHi();


// 1. Using Array.prototype add a new method `myForEach` that mimics the behavior of the built in `forEach`.
console.log("Bonus Number 1")
let myArr1 = [1, 2, 3]

// Array.prototype.myForEach = function() {
//   for (let i = 0; i < arr.length; i++) {
//    return arr[i]
//  }
// }

Array.prototype.myForEach = function(callback) {
  for (i = 0; i < this.length; i++) {
    this[i] = callback(this[i]);
  }
};

function dollarSign(elem){
  console.log("$" + elem)
}

myArr1.myForEach(dollarSign);

// 2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.
console.log("Bonus Number 2")
let myArr2 = [2, 4, 6, 8, 10]

Array.prototype.myMap = function(callback) {
  let emptyArr1 = []
  for (i = 0; i < this.length; i++) {
    emptyArr1.push(callback(this[i]))
  }
  return emptyArr1
};

myArr2.myMap(dollarSign);
