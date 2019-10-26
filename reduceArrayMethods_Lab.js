//PROBLEM 1
//1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.

//Input: [1,2,3,4,5]
//Output: [11,12,13,14,15]

const addTen = arr => {
    return arr.reduce((acc,el) => {
        acc.push(el += 10)
        return acc
    }, [])
}

console.log(addTen([1,2,3,4,5]))

// Problem 2
//2. Given an array, return a new array where every non-string element is converted to an empty string.
//Input: ["a", 123, "b", "c", {name: "cat"}]
//Output: ["a", "", "b", "c", ""]

const emptyString = arr => {
    return arr.reduce((acc,el) => {
        if (typeof el !== "string"){
            el = ""
        }
        acc.push(el)
        return acc
    }, [])
}

console.log(emptyString(["a", 123, "b", "c", {name: "cat"}]))

//Problem 3
//3. Write a function that returns only the even elements in an array of numbers.
//Input: [1,2,3,4,5]
//Output: [2,4]

const evenArray = arr => {
    return arr.reduce((acc, el) => {
        if (el%2 === 0)
        acc.push(el)
        return acc
    }, [])
}

console.log(evenArray([1,2,3,4,5]))

//PROBLEM 4
//4. Write a function that checks if all elements in the array are the same.

// Input: [1,1,1,1,1]
// Output: true

// Input: [1,1,1,1,2]
// Output: false

const sameArray = arr => {
    return arr.reduce ((acc,el) => {
        if (arr[0] !== el){
          acc = false
      } 
      return acc
    }
    , true)
}

console.log(sameArray([1,2,1,1,1]))



