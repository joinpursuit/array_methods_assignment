/* 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.
    ``
`
Input: [1,2,3,4,5]
Output: [11,12,13,14,15]
`
``*/
// 
let inputOne = [1, 2, 3, 4, 5];

const sumOfElements = (arr) => arr.map(el => {
    return el + 10
})

console.log(sumOfElements([1, 2, 3, 4, 5]))