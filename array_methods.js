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

const newStr = (arr) => {
    return arr.map((el) => {
        if(typeof el !== typeof " "){
            return el = ""
        }else{
            return el
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

// 5. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.

// const countZeroes = (array) => {
//     let  zero = array.filter((el) => {
//         return (el === 0);

//     });return zero.length 
// }

// console.log(countZeroes([1,0,0,2,0,3,0,0,0]))

// 6. Write a function that doubles every element in an array.

// ```
// Input: [1,2,3,4]
// Output: [2,4,6,8]
// ```

// const doubleArr = (arr) => {
//     return arr.map((el) => {
//         return el * 2
//     })
// }
// console.log(doubleArr([1,2,3,4]))

// 7. Write a function that whether every tripled number in an array is less than 20.

// ```
// Input: [1,2,4,7]
// Output: false (7 * 3 = 21)

// Input: [3,4,5]
// Output: true
// ```

// const tripledArr = (arr) => {
//     return arr.every((el) => {
//         if ((el * 3) < 20) {
//             return true;
//         }
//     })
// }

// console.log(tripledArr([1,2,4,7]));
// console.log(tripledArr([3,4,5]));


// 8. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.  Return a new array of every element of arr that can be evenly divided by divisor.

// ```
// Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
// Output: [5,10,15]
// ```
// const elementDivisibleBy = (arr, divisor) => {
//     return arr.filter((el) => {
//         if(el % divisor === 0){
//             return true;
//         }
//     })
// }
// console.log(elementDivisibleBy([4,5,6,7,8,9,10,11,12,13,14,15],5));

// 9. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by its index.

// ```
// Input: [6,7,8,9]
// Output: [0,7,16,27]
// ```

// const numberTimesIdx = (arr) =>{
//     return arr.map((el,i) =>{
//         return el * i
//     })
// }
// console.log(numberTimesIdx([6,7,8,9]));

// 10. Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.

// ```
// Input: [2,4,6,8,12]
// Output: true

// Input: [2,4,6,8,10]
// Output: false
// ```

// const notZero  = (arr) =>{
//     return arr.every((el) => {
//         if(el % 10 !== 0){
//             return true
//         }
//     })
// }
// console.log(notZero([2,4,6,8,12]))
// console.log(notZero([2,4,6,8,10]))

// 11. Write a function that returns a new array containing all of the strings in the original array uppercased.

// ```
// Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
// Output: ["CAT", "DOG", "BEAR"]

const upperFunc = (array) => {
    let newUpper = array.filter((el) => {
        if(typeof el === typeof " ") {
            return true;
        }
    })
    return newUpper.map((el) => {
        return el.toUpperCase();
    })
}

console.log(upperFunc([{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]));