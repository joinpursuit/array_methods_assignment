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
        if(typeof el !== typeof ""){
            return el = ""
        }else{
            return el
        }
    })
}

console.log(newStr([1,2,3,"cat", "dog"]))