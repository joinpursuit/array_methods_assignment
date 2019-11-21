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

/*
Given an array, return a new array where every non - string element is converted to an empty string.
Input: ["a", 123, "b", "c", {
    name: "cat"
}]
Output: ["a", "", "b", "c", ""] */

let inputTwo = ["a", 123, "b", "c", {
    name: "cat"
}]

const convertToStr = (arr) => {
    return arr.map((el) => {
        if (typeof el === "string") {
            return el
        } else {
            return ""
        }

    })
}

console.log(convertToStr(["a", 123, "b", "c", {
    name: "cat"
}]))