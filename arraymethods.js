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

// 7. Write a function that whether every tripled 
// number in an array is less than 20.


const tripled = (arr) => {

    return arr.every((el) => el*3 < 20)
}

console.log(tripled([1,2,3,4,5]))

// 8. Write a function `elementDivisibleBy` with parameters `divisor`
//  and `arr`.  Return a new array of every element of arr that can be evenly 
//  divided by divisor.

 const elementDivisibleBy = (divisor,arr) => {
    
   return arr.filter((el) => {
        if (el%divisor === 0){
            return el
        }
    })

 }

 console.log(elementDivisibleBy(5, [4,5,6,7,8,9,10,11,12,13,14,15]))

//  9. Write a `numberTimesIdx` that uses `map` and multiples each number in
//   the array by its index.



const numberTimesIdx = (arr) =>{

    return arr.map((el,i) => el*i) 

}

console.log(numberTimesIdx([6,7,8,9]))

// 10. Write a function that returns whether or not every value in an array is a
//  positive even number that doesn't end in 0.

const notDaZero = (array) => {
    return array.every((el) =>  {
        return el % 2 === 0 && el % 10 !== 0 && el > 0
             
    })
}
console.log(notDaZero([2,4,6,8,12]))

// 11. Write a function that returns a new array containing all of 
// the strings in the original array uppercased.

const newFun = (arr) => {

    let x = ""

    let up = arr.filter((el) => {
       if ( typeof el === "string"){

           return el
       } })
       
       return up.map(element => {
        x = element.toUpperCase()
        return x
            
        });

 }



console.log(newFun([{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]))


// ## Bonus:

// You can write your own array methods!

// ```js
// Array.prototype.sayHi = function() {
//   console.log("Hi")
// }
// ```

// Now every array that you write has a `sayHi` method that you can call.

// ```js
// let myArr = [1,2,3]
// myArr.sayHi() //Logs "Hi" to the console
// ```


// 1. Using Array.prototype add a new method 
// `myForEach` that mimics the behavior of the 
// built in `forEach`.

Array.prototype.myForEach = function(fn) {
     for(let i = 0; i < this.length; i++){
         fn(this[i]) 
    }
}

let lol =[1,2,3,4]
lol.myForEach((el) => {
    console.log(el)
})