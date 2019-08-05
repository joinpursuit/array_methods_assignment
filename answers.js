// 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 1

let arr = [1, 2, 3, 4, 5]

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

let zeroCount = arr.filter(el => {
    let counter = 0
    if (el === 0) {
        counter += 1
    }
    return counter
})

console.log(zeroCount);

// 8. Write a function that doubles every element in an array.

let doubleUp = arr.map(el => {
    return (el) * 2
})

console.log(doubleUp);

// 9. Write a function that finds the sum of every element in an array doubled

let doubleSum = arr.map(el => {
    return el * 2
})
    .reduce((acc, currEl) => {
        return acc + currEl;
    }, 0);

console.log(doubleSum);

// 10. Write a function `elementDivisibleBy` with parameters`divisor` and`arr`.Return a new array of every element of arr that can be evenly divided by divisor.

function elementDivisibleBy(divisor, arr) {
    arr.filter((el, divisor) => {
        return el % divisor
    })
}

console.log(elementDivisibleBy(4, arr));

// 11. Write a`numberTimesIdx` that uses`map` and multiples each number in the array by its index.

let numberTimesIdx = arr.map(el => {
    return el * arr[el]
})

console.log(numberTimesIdx);

// 12. Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.

let evenArr = arr.every(el => {
    return el % 2 === 0 && el % 5 !== 0
})

console.log(evenArr);
