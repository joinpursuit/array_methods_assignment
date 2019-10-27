// # Exercises
//
// 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.
//
// ```
// Input: [1,2,3,4,5]
// Output: [11,12,13,14,15]
// ```let arr = [1, 2, 3];

/* i must loop throu the array--map is doing that for me
create an empty array to place the new value
i must push the array to a new arrays // dont need
condition the array to increment by 10
console.log the new result
*/
//
// let arr = [1, 2, 3, 4, 5]
// const incrementednum = (num) => {
//     return num + 10
// }
// let answer1 = arr.map(incrementednum)
// console.log(answer1);

let arrayOne = [1, 2, 3, 4, 5]

const incrementArr = (arr) => {
    return arr.reduce((acc, el, i) => {
        acc[i] = el + 10
        return acc;
    }, [])
}

console.log(incrementArr([1, 2, 3, 4, 5]))


// 2. Given an array, return a new array where every non-string element is converted to an empty string.
//
// ```
// Input: ["a", 123, "b", "c", {name: "cat"}]
// Output: ["a", "", "b", "c", ""]
// ```
// create a function
//i need a conditon that checks the type of element in the array
/*must keep string value the same
must change non strings to empty string ("").
map the new arrays*/
//     let array2 = ["a", 123, "b", "c", {
//         name: "cat"
//     }]

//     const modifiedstr = (el) => {
//         if (typeof el === "string") {
//             return el
//         } else {
//             return ""
//         }
//     }
//     let answer2 = array2.map(modifiedstr)
//     console.log(answer2);

let arrTwo = ["a", 123, "b", "c", {
    name: "cat"
}]
const modifyArr = (arr) => {
    return arr.reduce((acc, el, i) => {
        if (typeof el === "string") {
            acc[i] = el
        } else {
            acc[i] = ""
        }
        return acc
    }, [])
}
console.log(modifyArr(arrTwo))

//     //

//     // 3. Write a function that returns only the even elements in an array of numbers.
//     //
//     // ```
//     // Input: [1,2,3,4,5]
//     // Output: [2,4]
//     // ```
//     let num3 = [1, 2, 3, 4, 5]

//     const evennum = (el) => {
//         // let trueeven = el % 2 === 0
//         if (el % 2 === 0) {
//             return true //even
//         }
//     }
//     let answer3 = num3.filter(evennum)
//     console.log(answer3);
let arrThree = [1, 2, 3, 4, 5]

const evenNum = (arr) => {
    return arr.reduce((acc, el) => {
        if (el % 2 === 0) {
            acc.push(el)
        }
        return acc
    }, [])

}
console.log(evenNum(arrThree))


//     // 4. Write a function that checks if all elements in the array are the same.

let arrFour = [1, 1, 1, 1, 1]
const sameNum = (arr) => {
    return arr.reduce((acc, el) => {
        if (arr[0] !== el) {
            acc = false
        }
        return acc
    }, true)
}
console.log(sameNum(arrFour))
/*5.     Write a function countZeroes, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.
Input: [1, 0, 0, 2, 0, 3, 0, 0, 0]
Output: 6 */

let arrFive = [1, 0, 0, 2, 0, 3, 0, 0, 0]
const countZeroes = (arr) => {
    return arr.reduce((acc, el) => {
        if (el === 0) {
            acc++
        }
        return acc
    }, 0)
}
console.log(countZeroes(arrFive))

/* 6.Write a function that doubles every element in an array.
Input: [1, 2, 3, 4]
Output: [2, 4, 6, 8] */

let arrSix = [1, 2, 3, 4]
const doublesNum = (arr) => {
    return arr.reduce((acc, el, i) => {
        acc[i] = el * 2
        return acc
    }, [])
}
console.log(doublesNum(arrSix))

/* 7. Write a function that whether every tripled number in an array is less than 20.
Input: [1, 2, 4, 7]
Output: false(7 * 3 = 21)..


Input: [3, 4, 5]
Output: true */
let arrSeven = [3, 4, 5]

const tripledNum = (arr) => {
    return arr.reduce((acc, el) => {
        if (el * 3 > 20) {
            acc = false
        }
        return acc
    }, true)
}
console.log(tripledNum(arrSeven))

/* 8.Write a function elementDivisibleBy with parameters divisor and arr.Return a new array of every element of arr that can be evenly divided by divisor.
Input: 5, [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
Output: [5, 10, 15] */

let arrEight = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const elementDivisibleBy = (num, arr) => {
    return arr.reduce((acc, el) => {
        if (el % num === 0) {
            acc.push(el)
        }
        return acc
    }, [])
}
console.log(elementDivisibleBy(5, arrEight))

/* 9. Write a numberTimesIdx that uses map and multiples each number in the array by its index.
Input: [6, 7, 8, 9]
Output: [0, 7, 16, 27] */

let arrNine = [6, 7, 8, 9]

const numberTimesIdx = (arr) => {
    return arr.reduce((acc, el, i) => {
        acc.push(el * i)
        return acc
    }, [])
}
console.log(numberTimesIdx(arrNine))


/* 10.Write a function that returns whether or not every value in an array is a positive even number that doesn 't end in 0.
Input: [2, 4, 6, 8, 12]
Output: true 

Input: [2, 4, 6, 8, 10]
Output: false */

let arrTen = [2, 4, 6, 8, 10]

const positiveEven = (arr) => {
    return arr.reduce((acc, el) => {
        if (el % 10 === 0 || el % 2 !== 0) {
            acc = false
        }
        return acc
    }, true)

}
console.log(positiveEven(arrTen))


/* 11. Write a function that returns a new array containing all of the strings in the original array uppercased.
Input: [{}, 1, "cat", 3, ["hi"], {
    name: "dog"
}, "dog", "bear"]
Output: ["CAT", "DOG", "BEAR"] */

let arrEleven = [{}, 1, "cat", 3, ["hi"], {
    name: "dog"
}, "dog", "bear"]

const str = (arr) => {
    return arr.reduce((acc, el) => {
        if (typeof el === "string") {
            acc.push(el.toUpperCase())
        }
        return acc

    }, [])
}
console.log(str(arrEleven))


/*  Bonus:
    You can write your own array methods!

    Array.prototype.sayHi = function () {
        console.log("Hi")
    }
Now every array that you write has a sayHi method that you can call.

let myArr = [1, 2, 3]
myArr.sayHi() //Logs "Hi" to the console
Using Array.prototype add a new method myForEach that mimics the behavior of the built in forEach.

Use your myForEach to add myMap to the Array prototype.myMap should behave the same as regular map.

Write a myFilter that behaves the same as filter.

Write a myEvery that behaves the same as every.

Write a myReduce.It should use the first element in the array
if none is given.

Write a myJoin

function.

Write a mySlice

function.

Write a myTranspose.This

function should transpose a matrix.

let mtx = [
    [1, 2],
    [3, 4],
    [5, 6]
]

mtx.myTranspose();

// => [
[1, 3, 5],
[2, 4, 6]
]
Write a myFlatten.This should take a multi - dimensional array and
return it as one array.
let arr = [1, 2, [3, 4, 5, [6, 7, 8]]]
arr.myFlatten();
// => [1, 2, 3, 4, 5, 6, 7, 8]
Write a

function that returns the sum of every element in an array.
Input: [1, 2, 3, 4, 5]
Output: 15
Write a

function that finds largest number in an array.
Input: [1, 2, 6, 3, 4, 5]
Output: [6]
Write a

function that returns the sum of all odd numbers in an Array
Hint: What is the second argument in reduce ?

    Input : [2, 3, 4, 5]
Output: 8

Input: [1, 2, 3, 4, 5]
Output: 9
*/