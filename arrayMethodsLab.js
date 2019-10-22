// 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.

const upTen = (arr) => arr.map((el) => el += 10 )

console.log(upTen([1,2,3]))

// 2. Given an array, return a new array where every non-string element is converted to an empty string.

const emptyString = (arr) => {
  return arr.map((el) => {
    if (typeof el !== typeof "a") {
      return ""
    }
    return el
  })
}
console.log(emptyString(["ape","shall","never",123,"kill",456,"ape"]))

// 3. Write a function that returns only the even elements in an array of numbers.

const evenOnly = (arr) => {
  return arr.filter((el) => {
    if (el % 2 === 0){
      return el
    }
  })
}
console.log(evenOnly([1,2,3,4,5,6]))

// 4. Write a function that checks if all elements in the array are the same.

const dupeCheck = (arr) => {
  return arr.every((el) => {
    return arr[0] === el
  })
}
console.log(dupeCheck([1,1,1,2]))

// 5. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.

const countZeroes = (arr) => {
  zeroes = 0
  arr.forEach((el) => {
    if (el === 0){
      zeroes++
    }
  })
  return zeroes
}
console.log(countZeroes([0,3,4,0,1,14,5,0,0]))