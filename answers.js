// 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 1

let arr = [0, 1, 2, 3, 4, 5]

let plusOne = arr.map(el => {
    return (el) += 1
})

console.log(plusOne);

// 2. Given an array, return a new array where every non - string element is converted to an empty string.

let arrType = arr.map(el => {
    if (typeof el === "string") {
        return el
    } else {
        return ''
    }
})

console.log(arrType);

// 3. Write a function that returns only the even elements in an array of numbers.

let evenOnly = arr.filter(el => {
    return el % 2 === 0
})

console.log(evenOnly);

// 4. Write a function that checks if all elements in the array are the same.

let samesies = arr.every(el => {
    if (el === arr[0]) {
        return true
    } else {
        return false
    }
})

console.log(samesies);

// 5. Write a function that returns the sum of every element in an array.

let addUp = arr.reduce((acc, currEl) => {
    return acc += currEl
})

console.log(addUp);

// 6. Write a function that finds largest number in an array.

let largestNum = arr.reduce((acc, currEl) => {
    if (acc > currEl) {
        return acc
    } else {
        return currEl
    }
})

console.log(largestNum);

// 7. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.

let zeroCount = arr.every(el => {
    let counter = 0
    if (el === 0) {
        counter++
    }
    return counter
})

console.log(zeroCount);







