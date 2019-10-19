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