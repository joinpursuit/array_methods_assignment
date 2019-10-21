// //1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.

// const inTen = (arr) => {
   
//   return  nArr = arr.map(el => {
//        return el + 10
//     })

// }
// console.log(inTen([1,2,3,4]))

// //2. Given an array, return a new array where every non-string element is converted to an empty string.

// const eveNon = (arr) => {
//     let nArr = []
//     nArr = arr.map((el) => {
//         if(typeof(el) !== "string"){
//             return ""
//         } else {
//             return el
//         }
//     })
//     return nArr
// }
// console.log(eveNon([1,2,3,4,"Hi", "Jones"]))

// //3. Write a function that returns only the even elements in an array of numbers.
// const evenArr = (arr) => {
//     return arr.filter((el) => {
//         return el %2 === 0
//     })
// }
// console.log(evenArr([1,2,3,4,5,6,7,8,9]))

// //4. Write a function that checks if all elements in the array are the same.  HELP!
// const allSame = (arr) => {
//     return arr.every((el) => {
//         return el  === el;
//     })
// }
// console.log(allSame([1,1,1,1,1]))

// //5. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.
// const countZeroes = arr => {
//     let num =0;
//       arr.filter((el) => {
//             if(el === 0){
//                 return num += 1
//             }
           
//         })
//  return num
//     }
//  console.log(countZeroes([2,34,6,8,10,0,0,0,0,0,0,0]))

//     //6. Write a function that doubles every element in an array.
   
// const arrDouble = (arr) => {
    
//   return arr.forEach((el) => el * el)

// }
// console.log(arrDouble([2,,4,6,7,8]))

//8. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.  
//Return a new array of every element of arr that can be evenly divided by divisor.

const elementDivisibleBy = (divisor, arr) => {
    let nArr =[]
    nArr = arr.map((el) => {
        if(el % divisor === 0){
        return el
    } else { return ""}
    })
    return nArr
}
console.log(elementDivisibleBy(5, [4,5,6,7,8,9,10,11,12,13,14,15]))

//Write a `numberTimesIdx` that uses `map` and multiples each number in the array by its index.
const numberTimesIdx = (arr) => {
    let nArr =[]
    nArr = arr.map((el,i) => {
        return el * i
    
    })
    return nArr
}
console.log(numberTimesIdx([4,5,6,7,8]))

//Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.
const postEven = (arr) => {
    return arr.every((el) => {
        return el % 2 === 0 
    
    })
    
}