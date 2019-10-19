// # Exercises

// 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.
const arrInc = (arr) => {
    return arr.map((el) => {
        return el + 10
    })
}
console.log(arrInc([1,2,3,4,5]))
// ```
// Input: [1,2,3,4,5]
// Output: [11,12,13,14,15]
// ```

// 2. Given an array, return a new array where every non-string element is converted to an empty string.

const nonString = (arr) => {
    return arr.map((el) => {
        if (typeof(el) === 'string') {
            return el
    }  else {
        return ""
        }
    })
}
console.log(nonString(["a", 123, "b", "c", {name: "cat"}]))

// ```
// Input: ["a", 123, "b", "c", {name: "cat"}]
// Output: ["a", "", "b", "c", ""]
// ```

// 3. Write a function that returns only the even elements in an array of numbers.
const arrEven = (arr) => {
    return arr.filter((el) => el%2 === 0)
}
console.log(arrEven([1,2,3,4,5]))
// ```
// Input: [1,2,3,4,5]
// Output: [2,4]
// ```

// 4. Write a function that checks if all elements in the array are the same.
const arrSame = (arr) => {
    return arr.every((el,i) => {
        if (el === arr[0]) // you can key into an specific index. here we are comparing ANY number in the array to all numbers in the array and check is is the same number
            return true
        })
    }
console.log(arrSame([1,1,1,1,1]))
console.log(arrSame([1,1,1,1,2]))
// ```
// Input: [1,1,1,1,1]
// Output: true

// Input: [1,1,1,1,2]
// Output: false
// ```

// 5. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.
const countZeroes = (arr) => {
    let num = 0;
    arr.forEach((el) => {
        if (el === 0){
            num += 1    
        } 
    }) 
    console.log (num)
}
countZeroes([1,0,0,2,0,3,0,0,0])
// ```
// Input: [1,0,0,2,0,3,0,0,0]
// Output: 6
// ```

// 6. Write a function that doubles every element in an array.

const arrDouble = (arr) => {
    return arr.map((el) => el * 2)
}
console.log(arrDouble([1,2,3,4]))

// ```
// Input: [1,2,3,4]
// Output: [2,4,6,8]
// `
