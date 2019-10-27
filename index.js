// 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.

// ```
// Input: [1,2,3,4,5]
// Output: [11,12,13,14,15]
// ```

// let arrayInput = [1,2,3,4,5]

const everyElementReduce = (array) => {
    return array.reduce((newArray, el) => {
     newArray.push(el + 10)
     return newArray 
    },[])   
}
console.log(everyElementReduce([1,2,3,4,5])) 

// 2. Given an array, return a new array where every non-string element is converted to an empty string.

// ```
// Input: ["a", 123, "b", "c", {name: "cat"}]
// Output: ["a", "", "b", "c", ""]
// ```

const emptyString = (array) => {
    return array.reduce((newerArray, el) => {
        if (typeof el === "string") {
            newerArray.push(el) 
            } else {
                newerArray.push("")
            }
        return newerArray
    }, []) 
}    

console.log(emptyString(["a", 123, "b", "c", {name: "cat"}]))

// 3. Write a function that returns only the even elements in an array of numbers.

// ```
// Input: [1,2,3,4,5]
// Output: [2,4]
// ```

const evenElements = (array) => {
    return array.reduce((newestArray, el) => {
        if (el % 2 === 0) { 
        newestArray.push(el) 
        }
        return newestArray
    }, [])
}

console.log(evenElements([1,2,3,4,5]))

// 4. Write a function that checks if all elements in the array are the same.

// ```
// Input: [1,1,1,1,1]
// Output: true

// Input: [1,1,1,1,2]
// Output: false

const allSame = (array) => {
    return array.reduce((acc, el) => {
        if (el === array[0]) {
            return true; 
        } else {
            return false
        }
    })
}

console.log(allSame([1,1,1,1]))

// 5. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.

// ```
// Input: [1,0,0,2,0,3,0,0,0]
// Output: 6
// ```

const countZeroes = (array) => {
    return array.reduce((acc, el) => {
        if (el === 0) {
         return true
        }
    })
    return acc
}
console.log(countZeroes([1,0,0,2,0,3,0,0,0]))