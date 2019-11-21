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
2. Given an array, return a new array where every non - string element is converted to an empty string.
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

/* 
3. Write a function that returns only the even elements in an array of numbers.
Input: [1, 2, 3, 4, 5]
Output: [2, 4] */

let inputThree = [1, 2, 3, 4, 5];

const evenNumOnly = (arr) => {
    return arr.filter((el) => {
        return el % 2 !== 1
    })
}
console.log(evenNumOnly([1, 2, 3, 4, 5]))