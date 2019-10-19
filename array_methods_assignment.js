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