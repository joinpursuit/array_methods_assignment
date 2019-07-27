// # Exercises
//
// 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.
console.log("---------- #1 ----------")
let arr1 = [1, 2, 3, 4, 5]
let plusTen = []

arr1.forEach((currentElem) => {
  plusTen.push(currentElem + 10)
}
)

console.log(plusTen)

// ```
// Input: [1,2,3,4,5]
// Output: [11,12,13,14,15]
// ```
console.log(" ")

// 2. Given an array, return a new array where every non-string element is converted to an empty string.
console.log("---------- #2 ----------")

let arr2 = ["a", 123, "b", "c", {name: "cat"}]
let filteredArr = arr2.filter((currentElem) => {
  if (typeof currentElem === "string") {
    return currentElem
  } else {
    return ""
  }
})

let filteredArr2 = []
arr2.forEach((currentElem) => {
  if (typeof currentElem === "string") {
    filteredArr2.push(currentElem)
  } else {
    filteredArr2.push("")
  }
})

console.log(filteredArr)
console.log(filteredArr2)

// ```
// Input: ["a", 123, "b", "c", {name: "cat"}]
// Output: ["a", "", "b", "c", ""]
// ```
console.log(" ")

// 3. Write a function that returns only the even elements in an array of numbers.
console.log("---------- #3 ----------")

let arr3 = [1, 2, 3, 4, 5]
let onlyEven = arr3.filter(currentElem => currentElem % 2 === 0)
console.log(onlyEven)

// ```
// Input: [1,2,3,4,5]
// Output: [2,4]
// ```
//
console.log(' ')

// 4. Write a function that checks if all elements in the array are the same.
console.log("---------- #4 ----------")

let arr4 = [1, 1, 1, 1, 1]
let arr5 = [1, 1, 1, 2, 1]

let sameCheck1 = arr4.every((currentElem, index) => {
  if (currentElem[index] === currentElem[index -1]) {
    return true
  } else {
    return false
  }
})

let sameCheck2 = arr5.every((currentElem, index) => {
  if (currentElem[index] === currentElem[index - 1]) {
    return true
  } else {
    return false
  }
})

let sameCheck3 = arr5.reduce((acc, currentElem) => {
  if (acc > currentElem) {
    return false
  } else {
    return true
  }
})

let sameCheck = arr5.filter((currentElem) => {

})

console.log(sameCheck1)
console.log(sameCheck2)
console.log(sameCheck3)




// ```
// Input: [1,1,1,1,1]
// Output: true
//
// Input: [1,1,1,1,2]
// Output: false
// ```
//
console.log(" ")

// 5. Write a function that returns the sum of every element in an array.
console.log("---------- #5 ----------")

let arr6 = [1, 2, 3, 4, 5]

let sum = 0
arr6.forEach(num => sum += num)
console.log(sum)

// ```
// Input: [1,2,3,4,5]
// Output: 15
// ```
//
console.log(" ")

// 6. Write a function that finds largest number in an array.
console.log("---------- #6 ----------")

let arr7 = [1, 2, 6, 3, 4, 5]

let largestInArr = arr7.reduce((acc, currentElem) => {
  if (currentElem > acc) {
    return currentElem
  } else {
    return acc
  }
})

console.log(largestInArr)

// ```
// Input: [1,2,6,3,4,5]
// Output: [6]
// ```
//
console.log(" ")

// 7. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.
console.log("---------- #7 ----------")

let arr8 = [1, 0, 0, 2, 0, 3, 0, 0, 0]

let countZeroes = arr8.reduce((total, currentElem) => {
  if (currentElem === 0) {
    return total + 1
  }
}, 0)

console.log(countZeroes)

// ```
// Input: [1,0,0,2,0,3,0,0,0]
// Output: 6
  console.log(" ")
//
// 8. Write a function that doubles every element in an array.
console.log("---------- #8 ----------")

let arr9 = [1, 2, 3, 4]
let doubled = []
arr9.forEach((currentElem) => {
  doubled.push(currentElem + currentElem)
})

console.log(doubled)

// ```
// Input: [1,2,3,4]
// Output: [2,4,6,8]
// ```

console.log(" ")

// 9. Write a function that finds the sum of every element in an array doubled
console.log("---------- #9 ----------")

let arr10 = [1, 2, 3, 4, 5]
let sumOfAllDoubled = arr10.reduce((total, currentElem) => {
  console.log(total, currentElem)
  return total + (currentElem * 2)
}, 0)

console.log(sumOfAllDoubled)

// ```
// Input: [1,2,3,4]
// Output: 20
// ```
//
// 10. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.  Return a new array of every element of arr that can be evenly divided by divisor.
console.log("---------- #10 ----------")


let arr11 = [4,5,6,7,8,9,10,11,12,13,14,15]
let divisor = 5

const elementDivisibleBy = (divisor, arr) => {
  return arr.filter((el) => {
    if (el % 5 === 0) {
      return el
    }
  })
}

console.log(elementDivisibleBy(divisor, arr11))

console.log(" ")

// ```
// Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
// Output: [5,10,15]
// ```
//
// 11. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by its index.

console.log("---------- #11 ----------")

let arr12 = [6, 7, 8, 9]

const numberTimesIdx = (arr) => {
  let result = arr.map((currentElem, index) => {
    console.log(index, currentElem)
    return index * currentElem
  })
  return result
}

console.log(numberTimesIdx(arr12))

console.log(" ")
// ```
// Input: [6,7,8,9]
// Output: [0,7,16,27]
// ```
//
// 12. Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.
console.log("---------- #12 ----------")

let arr13 = [2, 4, 6, 8, 12]
let arr14 = [2, 4, 6, 8, 10]

const posEvenCheck = (arr) => {
  let posCheck = arr.every((currentElem) => {
    if (currentElem > 0 && currentElem % 2 === 0 && currentElem % 10 !== 0) {
      return true
    } else {
      return false
    }
  })
  return posCheck
}

console.log(posEvenCheck(arr13))
console.log(posEvenCheck(arr14))

// ```
// Input: [2,4,6,8,12]
// Output: true
//
// Input: [2,4,6,8,10]
// Output: false
// ```

console.log(" ")

// 13. Write a function that returns the sum of all odd numbers in an Array

console.log("---------- #13 ----------")


let arr15 = [2, 3, 4, 5]
let arr16 = [1, 2, 3, 4, 5]

const sumOfOdd = (arr) => {
  let oddCheck = arr.reduce((total, currentElem, acc) => {
    if (currentElem % 2 === 1) {
      return currentElem + acc
    }
  })
  return oddCheck
}
console.log(sumOfOdd(arr15))
console.log(sumOfOdd(arr16))

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
console.log("---------- #14 ----------")

let arr17 = [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]

let allCapsStrArr = (arr) => {
  let result = arr.map((currentElem) => {
    if (typeof currentElem === "string") {
      return currentElem.toUpperCase()
    }
  })
  return result
}

console.log(allCapsStrArr(arr17))

console.log(" ")

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
console.log("---------- BONUS #1 ----------")

let arr18 = [1, 2, 3, 4]

Array.prototype.myForEach = function(arr, callback) {
  let output = []
    for (let i = 0; i < arr.length; i++) {
      output.push(callback(arr[i]))
    }
    return output
  }

function makeItMoney(el) {
  console.log("$" + num)
}

myForEach(arr18, makeItMoney)

console.log(" ")

//
// 2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.
//
// 3. Write a `myFilter` that behaves the same as `filter`.
//
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


console.log("---------- OFFICE HOURS w/JR -----------")

let arrr = [1.3, 2.7, 3.8, 4.3, 5.9, 6.3, 7.7, 8.5, 5.6, 3.4, 9.8, 1.3]

let roundDown = arrr.reduce((acc, currentElem) => {
  acc.push(Math.floor(currentElem))
  return acc
}, [])

console.log(roundDown)

let fattyLarge = arrr.reduce((acc, currentElem) => {
  if (currentElem > acc) {
    acc = currentElem
  }
  return acc
})

console.log(fattyLarge)

let puny = arrr.reduce((acc, currentElem) => {
  if (currentElem < acc) {
    acc = currentElem
  }
  return acc
})

console.log(puny)







//
