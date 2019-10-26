// 1. Given an array of numbers, write a function that returns 
// a new array where every element is incremented by 10.

// const increments = (arr) => {
//     return arr.reduce((acc, el) => {
//         acc.push(el + 10)
//         return acc
//     }, [])
// }

// console.log(increments([1, 2, 3, 4, 5]))

// 2. Given an array, return a new array where every non-string element is 
// converted to an empty string.


const nonString = (arr) => {
    return arr.reduce((acc,el) => {
        if (typeof el === "string"){
            acc.push(el)
        } else {
            el = "" 
            acc.push(el)
        }
        return acc
    },[])
 }
//console.log(nonString(['a','b',1]))
// console.log(nonString(["a", 123, "b", "c", {name: "cat"}]))

// 3. 

const even = (arr) => {
    return arr.reduce((newArr,el) => {
       if (el % 2 === 0){
           newArr.push(el)
        }
       return newArr
    },[])
}
// console.log(even([1,2,3,4,5]))


// 4.


const same = (arr) => {
    return arr.reduce((bool,el) => {
        if(arr[0] === el){
            return true
        } else {
            return false
        }

    })
}
console.log(same([1,1,1,10]))

// 5. Write a function `countZeroes`, which takes an array of numbers 
// as its argument and returns the amount of zeroes that occur in it.

const countZeroes = (arr) => {
    return arr.reduce((count, el) =>  {
        if(el === 0) {
            count ++; 
        }
        return count
    }, 0)
}

console.log(countZeroes([0, 1, 2, 0, 2, 0, 5, 0, 0]))

// 6. Write a function that doubles every element in an array.

const double = (arr) => {
    return arr.reduce((newArray, el) => {
    newArray.push(el*2)
    return newArray
    }, [])
}
console.log(double([2, 3, 4]))

// 7. Write a function that whether every tripled number in an array is less than 20.

const triple = (arr) => {
    return arr.reduce(() => {
        
    })
}