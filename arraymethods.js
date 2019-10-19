// // Given an array of numbers, write a function that 
// // returns a new array where every element is incremented by 10.

const upByTen = (arr) => {
    return arr.map((el) => {
        return el += 10 
    })
} 
console.log(upByTen([1,2,3,4,5]))


const nonString = (arr) => {
    return arr.map((el) => { 
        if (typeof el === "string"){
            return el 
        }else { return " "}
    })
}
    

console.log(nonString([3,4,5,"hello","boo"]))



const evenNums = arr => {
    return arr.filter((el) =>{
    if (el % 2 === 0) {
       return el 
    }
   })
}
console.log(evenNums([1,2,3,4,5,6]))


const allSame = (array) => {
    let newvar = array[0]  
      return array.every((el) => {
           return el === newvar
        
        })
}
console.log(allSame([3,4,5,5,5,5,5]))






const allZeros = arr => {
    return arr.filter((el) => {
         if (el === 0) {
             return true
         } else {
             return false;
         }
     })   
 }
console.log(allZeros([2,3,4,0,7,7,0,0,0,0,0]).length)




const doubleFunc = (arr) => {
    return arr.map((el) => {
        return el * 2
    })
}
console.log(doubleFunc([1,2,3,4]))

