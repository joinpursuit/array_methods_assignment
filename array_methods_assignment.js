// 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.

// ```
// Input: [1,2,3,4,5]
// Output: [11,12,13,14,15]
// ```

const incrementByTen = (arr) => {
    return arr.map((el) =>{
        return el + 10
    })
}

console.log(incrementByTen([1,2,3,4,5]))

// 2. Given an array, return a new array where every non-string element is converted to an empty string.

// ```
// Input: ["a", 123, "b", "c", {name: "cat"}]
// Output: ["a", "", "b", "c", ""]
// ```

const nonString = (arr) => {
    return arr.map(el =>{
        if(typeof el !== "string"){
            return ""
        } else{
            return el
        }
    })
}

console.log(nonString(["a", 123, "b", "c", {name: "cat"}]))


// 3. Write a function that returns only the even elements in an array of numbers.

// ```
// Input: [1,2,3,4,5]
// Output: [2,4]

const evenArray = (arr) => {
    return arr.filter((el)=> {
        if(el % 2 === 0) {
            return el
        }
    })
}

console.log(evenArray([1,2,3,4,5]))