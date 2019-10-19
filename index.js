// Problem 1

// const incrementBy10 = (arr) => {
//     return arr.map((el) => {
//         return el + 10;
//     })
// }

// console.log(incrementBy10([1,2,3,4,5])) ///[11,12,13,14,15]


// Problem 2 
// const onlyStrings = (arr) => {
//     return arr.map((el) => {
//         if(typeof el === 'string') {
//             return el
//         } else {
//             return ""
//         }
//     })
// }

// console.log(onlyStrings(["a", 123, "b", "c", {name: "cat"}])) //["a","","b","c",""]


// PROBLEM 3

const onlyEven = (arr) => {
    return arr.filter((el) => el % 2 === 0)
}
console.log(onlyEven([1,2,3,4,5]));