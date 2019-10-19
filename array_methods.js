// 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.

// ```
// Input: [1,2,3,4,5]
// Output: [11,12,13,14,15]
// ```


// const byTen = (arr) => {
//    return arr.map((el) => {
//         return el += 10
//     })
// }
// console.log(byTen([1,2,3,4,5]))

// 2. Given an array, return a new array where every non-string element is converted to an empty string.

// ```
// Input: ["a", 123, "b", "c", {name: "cat"}]
// // Output: ["a", "", "b", "c", ""]
// ```

// const newStr = (arr) => {
//     return arr.map((el) => {
//         if(typeof el !== typeof String){
//             return el = ""
//         }else{
//             return el
//         }
//     })
// }

// console.log(newStr([1,2,3,"cat", "dog"]))

// 3. Write a function that returns only the even elements in an array of numbers.

// const evenFunc = (array) => {
//     return array.filter((el) => {
//         return el % 2 === 0
//         }
//     )
// }
// console.log(evenFunc([1,2,3,4,5]));

// 4. Write a function that checks if all elements in the array are the same.

// const sameEl = (array) => {
//     return array.every((el, i) => {
//         return el === array[0];
//     })
// }

// console.log(sameEl([1,1,1,1,1]));

