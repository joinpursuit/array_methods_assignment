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

// const doubleFunction = (arr) => {
//     return arr.map((el) => {
//         return el * 2
//     })
// }


// console.log(doubleFunction([1,2,3,4]))

//Problem 7

// const lessThanFunction = (arr) => {
//     return arr.every((el) => {
// if(el * 3 < 20) {
//  return true      
// }
// })
// }
// console.log(lessThanFunction([1,2,4,7]))

//Problem 8

// const elementDivisibleBy = (divisor, arr) => {
//     return arr.filter((el) => {
//         if(el % divisor === 0){
//             return true
//         }
//     })
// }
// console.log(elementDivisibleBy(5,[4,5,6,7,8,9,10,11,12,13,14,15]))

//Problem 9

// const numberTimesIdx = (arr) => {
//     return arr.map((el, i) => {
//         return el * i
//     })
// }
// console.log(numberTimesIdx([6,7,8,9]))

//Problem 10
// const evenNumbers = (arr) => {
//     return arr.every((el) => {
//         if(el % 2 === 0 && el % 10 !== 0 ){
//             return true
//         }
//     })
// }
// console.log(evenNumbers(2,4,6,8,10]))

//Problem 11
// const upperFunction = (arr) => {
//     let upperCase = arr.filter((el)=> {
//         if(typeof(el) === typeof("")) {
//             return true
//         }
//         }).map((el) => {
//             return el = el.toUpperCase()
//         })
//         return upperCase
// }
// console.log(upperFunction([{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]))

//BONUS QUESTIONS

//Question 1
Array.prototype.myForEach = function(arr,cb){
    for(let i = 0; i < arr.length; i++){
        cb(arr[i])
    }

}
let testArray = [1,2,3,4]
console.log(testArray.myForEach(testArray, (testArray[i]) => {
   return testArray[i] * 3
}))