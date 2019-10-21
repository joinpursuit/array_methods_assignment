// 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.

const upTen = (arr) => arr.map((el) => el += 10 )

console.log(upTen([1,2,3]))

// 2. Given an array, return a new array where every non-string element is converted to an empty string.

const emptyString = (arr) => {
  return arr.map((el) => {
    if (typeof el !== typeof "a") {
      el = ""
    }
    return el
  })
}
console.log(emptyString(["ape","shall","never",123,"kill",456,"ape"]))

// 3. Write a function that returns only the even elements in an array of numbers.

