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
console.log(even([1,2,3,4,5]))