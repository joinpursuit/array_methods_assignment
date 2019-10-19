// Problem 1

// const incrementBy10 = (arr) => {
//     return arr.map((el) => {
//         return el + 10;
//     })
// }

// console.log(incrementBy10([1,2,3,4,5])) ///[11,12,13,14,15]


// Problem 2 
// const onlyStrings = (arr) => {
//     return arr.map((el) => {
//         if(typeof el === 'string') {
//             return el
//         } else {
//             return ""
//         }
//     })
// }

// console.log(onlyStrings(["a", 123, "b", "c", {name: "cat"}])) //["a","","b","c",""]


// PROBLEM 3

const onlyEven = (arr) => {
    return arr.filter((el) => el % 2 === 0)
}
// console.log(onlyEven([1,2,3,4,5]));


// PROBLEM 4 

const allTheSame = (arr) => {
    return arr.every((el) => {
        return el === arr[0]
    })
}

// console.log(allTheSame([1,1,1,1,1]));

// PROBLEM 5

const countZeroes = (arr) => {
    let count = 0;
    arr.forEach((el) => {
        if(el === 0) {
            count++
        }
    })
    return count;
}

// console.log(countZeroes([1,0,0,2,0,3,0,0,0]))


// Problem 6
const doubleEl = (arr) => {
    return arr.map((el) => {
        return el *= 2
    })
}

// console.log(doubleEl([1,2,3,4]))


// PROBLEM 7 

const ifTrippled = (arr) => {
   return arr.every((el) => {
       return el * 3 < 20
    })
}
// console.log(ifTrippled([1,2,4,7]));
// console.log(ifTrippled([1,2,5]));

// PROBLEM 8

const elemtDivisableBy = (divisor,arr) => {
     return arr.filter((el) => {
          return el % divisor === 0
     }) 
}
// console.log(elemtDivisableBy(5,[4,5,6,7,8,9,10,11,12,13,14,15]));

//PROBLEM 9

const numberTimesIdx = (arr) => {
    return arr.map((el, i) => el * i);
}

// console.log(numberTimesIdx([7,8,9]))

//PROBLEM 10

const positiveEvenNon0 = (arr) => {
    return arr.every((el) => {
        return el > 0 && el % 2 === 0 && el % 10 !== 0;
    })
}

// console.log(positiveEvenNon0([2,4,6,8,12]))
// console.log(positiveEvenNon0([2,4,6,8,10]))

//PROBLEM 11
const uppercaseString = (arr) => {
    newArr = arr.filter((el) => typeof el === 'string')
    return newArr.map((el) => el.toUpperCase())
}

console.log(uppercaseString([{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]))