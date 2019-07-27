console.log("Question 1");

// Given an array of numbers, write a function that returns a new array where every element is incremented by 10.
//
// Input: [1,2,3,4,5]
// Output: [11,12,13,14,15]


let array1 = [1,2,3,4,5]

let newArr1 = array1.map((el) => {
    return el + 10
})
console.log(newArr1);
console.log(" ");
console.log("Question 2");
// Given an array, return a new array where every non-string element is converted to an empty string.
//
// Input: ["a", 123, "b", "c", {name: "cat"}]
// Output: ["a", "", "b", "c", ""]


let array2 = ["a", 123, "b", "c", {name: "cat"}]

let newArr2 = array2.map((el) => {
     if(typeof el === "string"){
       return el
     } else{
       return " "
     }
  })

console.log(newArr2);

console.log(" ");
console.log("Question 3");

// Write a function that returns only the even elements in an array of numbers.
//
// Input: [1,2,3,4,5]
// Output: [2,4]

let array3 = [1,2,3,4,5]

let newArr3 = array3.filter((el) => {
    return el % 2 === 0
})

console.log(newArr3);

console.log(" ");
console.log("Question 4");
// Write a function that checks if all elements in the array are the same.
//
// Input: [1,1,1,1,1]
// Output: true
//
// Input: [1,1,1,1,2]
// Output: false


array4 = [1,1,1,1,1]

let newArr4 = array4.every((el) => {
   return el === array4[0]
})
console.log(newArr4);

console.log(" ");
console.log("Question 5");
// Write a function that returns the sum of every element in an array.
//
// Input: [1,2,3,4,5]
// Output: 15

let array5 = [1,2,3,4,5]

let newArr5 = array5.reduce((acc, el) => {
    return acc + el
},0)

console.log(newArr5);

console.log(" ");
console.log("Question 6");
// Write a function that finds largest number in an array.
//
// Input: [1,2,6,3,4,5]
// Output: [6]



let array6 = [1,2,6,3,4,5]

let newArr6 = array6.reduce((acc, el) => {
  if (acc > el){
    return (acc);
  }else{
    return (el);
  }
})

console.log(newArr6);

console.log(" ");
console.log("Question 7");
// Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.
//
// Input: [1,0,0,2,0,3,0,0,0]
// Output: 6
//

let array7 = [1,0,0,2,0,3,0,0,0]

let newArr7 = array7.reduce((acc, el) => {
      if(el === 0){
          acc++
          return acc
      }else {
        return acc;
      }
},0)

console.log(newArr7);

console.log(" ");
console.log("Question 8");
// Write a function that doubles every element in an array.
//
// Input: [1,2,3,4]
// Output: [2,4,6,8]

let array8 = [1,2,3,4]

array8.forEach((el) => {
  console.log(el * 2);
})

console.log(" ");
console.log("Question 9");
// Write a function that finds the sum of every element in an array doubled
//
// Input: [1,2,3,4]
// Output: 20


let array9 = [1,2,3,4]

let newArr9 = array9.reduce((acc, el) => {
          return acc + el * 2
}, 0)


console.log(newArr9);


// console.log("Question 10");
// Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.  Return a new array of every element of arr that can be evenly
// divided by divisor.
//
// Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
// Output: [5,10,15]
//
// let array10 = [4,5,6,7,8,9,10,11,12,13,14,15]
//
//
// let elementDivisibleBy = array10.reduce((divisor, arr) =>{
//   if ()
// },5)

console.log(" ");
console.log("Question 11");
// Write a `numberTimesIdx` that uses `map` and multiples each number in the array by its index.
//
// Input: [6,7,8,9]
// Output: [0,7,16,27]

let array11 = [6,7,8,9]

const numberTimesIdx = (arr) => {
  let result = arr.map((el, i) => {
      return el * i
    })
    return result
}
console.log(numberTimesIdx(array11));

console.log(" ");
console.log("Question 12");
// Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.
//
// Input: [2,4,6,8,12]
// Output: true
//
// Input: [2,4,6,8,10]
// Output: false


let array12 = [2,4,6,8,12]

let result12 = array12.every((el) => {
  if(el > 0 && el % 10 !== 0){
    return true
  }else{
    return false
  }
})

console.log(result12);

console.log(" ");
console.log("Question 13");
// Write a function that returns the sum of all odd numbers in an Array
//
// Hint: What is the second argument in `reduce`?
//
// Input: [2,3,4,5]
// Output: 8
//
// Input: [1,2,3,4,5]
// Output: 9


let array13 = [1,2,3,4,5]

let result13 = array13.filter((el) => {
      return el % 2 === 1

})
.reduce((acc, el) => {
      return acc + el
},0)
console.log(result13);

console.log(" ");
console.log("Question 14");
// Write a function that returns a new array containing all of the strings in the original array uppercased.
//
// Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
// Output: ["CAT", "DOG", "BEAR"]

let array14 = [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]

let newArr14 = array14.map((el) => {
    if(typeof el === "string"){
      return el.toUpperCase()
    }
 })
 .filter((el) => {
   if (el !== undefined){
     return el
   }
 })

console.log(newArr14);
