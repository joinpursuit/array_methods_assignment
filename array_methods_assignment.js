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

// 4. Write a function that checks if all elements in the array are the same.

// ```
// Input: [1,1,1,1,1]
// Output: true

// Input: [1,1,1,1,2]
// Output: false
// ```

const sameEl = (arr) =>{
    return arr.every((el,ind) =>{
        return arr[0] === arr[ind]
    })
}

console.log(sameEl([1,1,1,1,3]))

// 6. Write a function that doubles every element in an array.

// ```
// Input: [1,2,3,4]
// Output: [2,4,6,8]
// ```

const double = (arr) =>{
    return arr.map((el) => {
        return el * 2
    })
}

console.log(double([1,2,3,4]))


// 7. Write a function that whether every tripled number in an 
// array is less than 20.

// ```
// Input: [1,2,4,7]
// Output: false (7 * 3 = 21)

// Input: [3,4,5]
// Output: true
// ```

const lessTwenty = (arr) => {
    return arr.every((el)=> {
        return el * 3 < 20
    })
}

console.log((lessTwenty([3,4,5])))

// 8. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.  Return a new array of every element of arr that can be evenly divided by divisor.

// ```
// Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
// Output: [5,10,15]
// ```

const elementDivisibleBy = (divisor, arr) =>{
    return arr.filter((el) =>{
        return el % divisor === 0
    })
}

console.log(elementDivisibleBy(5, [4,5,6,7,8,9,10,11,12,13,14,15]))

// 9. Write a `numberTimesIdx` that uses `map` and multiples each number 
// in the array by its index.

// ```
// Input: [6,7,8,9]
// Output: [0,7,16,27]
// ```

const numberTimesIdx = (arr) => {
    return arr.map((el, i)=> {
        return el * i
    })
}

console.log((numberTimesIdx([6,7,8,9])))