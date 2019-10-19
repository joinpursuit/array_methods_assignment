// problem 1

// const incrementFunction = (arr) => {
//    return arr.map((el) => {
//        return el + 10
//     })
// }

// console.log(incrementFunction([1,2,3,4,5]))
// Problem 2

// const conversionFunction = (arr) => {
//     return arr.map((el) => {
//         if (typeof(el) !== (typeof '') ) {
//             return ""
//         } else {
//             return el
//         }
//     })
// }

// console.log(conversionFunction([1233333333, 123, "b", "c", {name: "cat"}]))

//problem 3

// const onlyEven = (arr) => {
//     return arr.filter((el) => {
//         if (el % 2 === 0) {
//             return true
//         }
//     })
// }

// console.log(onlyEven([1,2,3,4,5]))

//Problem 4

// const sameFunction = (arr) => {
//     return arr.every((el, i) => {
//         if (el === arr[0]) {
//             return true
//         }
//     })
// }

// console.log(sameFunction([1,2,1,1,1]))

//Problem 5

// const countZeroes = (arr) => {
//     let zeroes = arr.filter((el) => {
//         if (el === 0) {
//             return true           
//         }
//     }).length
//     return zeroes
// }

// console.log(countZeroes([1,0,0,2,0,3,0,0,0]))

//Problem 6

const doubleFunction = (arr) => {
    return arr.map((el) => {
        return el * 2
    })
}


console.log(doubleFunction([1,2,3,4]))