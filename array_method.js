// 1. Given an array of numbers, write a function that returns a
// new array where every element is incremented by 10.
// Input: [1,2,3,4,5]
// Output: [11,12,13,14,15]
console.log("Question 1")
let input = [1,2,3,4,5,6]
  let incre = []
  input.forEach((currentElem) => {
    incre.push(currentElem + 10)
  })
  console.log(incre)

  // 2. Given an array, return a new array where every non-string
  //  element is converted to an empty string.
  //  Input: ["a", 123, "b", "c", {name: "cat"}]
  //  Output: ["a", "", "b", "c", ""]
console.log("Question 2")
let input2 = ["a", 123, "b", "c", {name: "cat"}]
// input2.forEach((currentElem) => {
//   if(typeof(currentElem) !== "string"){
//   console.log(" ")
// } else{
//   console.log(currentElem)
// }
// })
let results = input2.map((currentElem) => {
  if(typeof(currentElem) !== "string"){
    return " "
  } else{
    return currentElem
  }
})
console.log(results)

// 3. Write a function that returns only the even elements in an array of numbers.
// Input: [1,2,3,4,5]
// Output: [2,4]
console.log("Question 3")
let input3 = [1,2,3,4,5,6]
let filterArr = input3.filter((currentElem) => {
  return currentElem % 2 === 0
})
console.log(filterArr)


  // 4. Write a function that checks if all elements in the array are the same.
  // Input: [1,1,1,1,1]
  // Output: true
  // Input: [1,1,1,1,2]
  // Output: false
console.log("Question 4")
let input4 = [1,1,1,1]
let input1 = [1,1,1,1,2]
const everyArr = (currentElem) => (
currentElem.every((elem) => {
return elem === currentElem[0]
}
)
)
console.log(everyArr(input4))
console.log(everyArr(input1))

// 5. Write a function that returns the sum of every element in an array.
// Input: [1,2,3,4,5]
// Output: 15
console.log("Question 5")
let input5 = [1,2,3,4,5]
function reduceArr(total, currentElem) {
  return total + currentElem;
}
let total = input5.reduce(reduceArr)
console.log(total)

// 6. Write a function that finds largest number in an array.
// Input: [1,2,6,3,4,5]
// Output: [6]
console.log("Question 6")
let input6 =[1,2,6,3,4,5]
let largest = input6.reduce((acc,curr) => {
  if(curr > acc){
    return curr
  }else{
    return acc
  }
})
console.log(largest)

// 7. Write a function `countZeroes`, which takes an array of numbers as
//  its argument and returns the amount of zeroes that occur in it.
// Input: [1,0,0,2,0,3,0,0,0]
// Output: 6
console.log("Question 7")
let input7 = [1,0,0,2,0,3,0,0,0]
function countZeroes (arr) {
  return arr === 0
for(let i = 0; i < arr.length; i++){
  if (arr !== 0){
  }else{
    return i++
  }
}
}
let res = input7.filter(countZeroes)
console.log(res)


// 8. Write a function that doubles every element in an array.
// Input: [1,2,3,4]
// Output: [2,4,6,8]
console.log("Question 8")
let input8 = [1,2,3,4]
let double = []

input8.forEach((currentElem) => {
  return double.push(currentElem * 2)
})
console.log(double)

// 9. Write a function that finds the sum of every element in an array doubled
// Input: [1,2,3,4]
// Output: 20
console.log("Question 9")

let doubled = input8.map(elem => {
  return elem * 2
})
.reduce((elem,total) => {
  return total + elem
})
console.log(doubled)

// 10. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.
// Return a new array of every element of arr that can be evenly divided by divisor.
// Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
// Output: [5,10,15]
console.log("Question 10")

 let input9 = [4,5,6,7,8,9,10,11,12,13,14,15]
 let elementDivisibleBy = input9.filter((currentElem, num) => {
  return currentElem % 5 === 0
})
// .reduce((currentElem, divisor) => {
//   return currentElem % divisor === 0
// },5)
console.log(elementDivisibleBy)

 // 11. Write a `numberTimesIdx` that uses `map` and multiples each number
 // in the array by its index.
 // Input: [6,7,8,9]
 // Output: [0,7,16,27]
console.log("Question 11")

 let numberTimesIdx = [6,7,8,9]
 numberTimesIdx.map(elem => {
   return elem * 2
 })
 console.log(numberTimesIdx)

 // 12. Write a function that returns whether or not every value in an array is a
 //  positive even number that doesn't end in 0.
 // Input: [2,4,6,8,12]
 // Output: true
 // Input: [2,4,6,8,10]
 // Output: false
console.log("Question 12")
let input10 = [2,4,6,8,12]
let input11= [2,4,6,8,10]
const evenOrOdd = (currentElem) => (
currentElem.every((elem) => {
return elem % 2 === 0 && elem % 10 !== 0
}
)
)
console.log(evenOrOdd(input10))
console.log(evenOrOdd(input11))

// 13. Write a function that returns the sum of all odd numbers in an Array
// Hint: What is the second argument in `reduce`?
// Input: [2,3,4,5]
// Output: 8
// Input: [1,2,3,4,5]
// Output: 9
console.log("Question 13")

let input12 = [1,2,3,4,5]

let arSum = input12.filter(elem => {
  return elem % 2 !== 0
})
.reduce((elem,total) => {
  return total + elem
})

console.log(arSum)

// 14. Write a function that returns a new array containing all of the
// strings in the original array uppercased.
// Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
// Output: ["CAT", "DOG", "BEAR"]
console.log("Quesiton 14")

let input13 = [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
let stringArr = []
let resultss = input13.map((currentElem) => {
  if(typeof(currentElem) === "string" ){
    stringArr.push(currentElem.toUpperCase())
}
})
console.log(stringArr)

// let upperString = input13.filter((currentElem) => {
//   return (typeof(currentElem) === "string")
// })
// .map((currentElem) => {
//   return currentElem.toUpperCase()
// })
// console.log(upperString)
