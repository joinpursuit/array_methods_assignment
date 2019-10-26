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

console.log('QUESTION 5')
// Input: [1,0,0,2,0,3,0,0,0]
// Output: 6
const countZeroes = arr =>{
    return arr.reduce((acc,el)=>{
        if(el ===0 ){
            acc +=1
        }
        return acc
    }, 0)
}
console.log(countZeroes([1,0,0,2,0,3,0,0,0]))

console.log('QUESTION 6')

const doubleArray = arr =>{
    return arr.reduce((acc, el)=>{
        acc.push(el * 2)
        return acc
    },[])
}
console.log(doubleArray([1,2,3,4]))

console.log('QUESTION 7')
const tripLessThan = arr =>{
    return arr.reduce((acc,el)=>{
        if(el *3 <20){
            acc = true
            
        }
        return acc
    },false)

}

console.log(tripLessThan([1,2,4,2]))

console.log('QUESTION 8')
const divisibleFive = (arr, divisor) =>{
    return arr.reduce((acc, el)=>{
        if(el % divisor===0){
            acc.push(el)
        }
        return acc
    },[])
    
}
console.log(divisibleFive([4,5,6,7,8,9,10,11,12,13,14,15],5))
console.log('QUESTION 9')

const numberTimesIdx = (arr) =>{
    return arr.reduce((acc,el,i)=>{
       acc.push(el * i ) 
       return acc
    },[])

}
console.log(numberTimesIdx([6,7,8,9]))

console.log('QUESTION 10')

const positiveEvenNoZero = (arr)=>{
    return arr.reduce((acc, el)=>{
        if(el<0 || el%2!==0 || el%10===0){
            acc = false
            console.log(acc)
        }
        return acc
    },true)
}
console.log(positiveEvenNoZero([2,4,6,8,-12]))
console.log('QUESTION 11')
const allUpperCase = (arr)=>{
    return arr.reduce((acc,el)=>{
        if(typeof el=== "string"){
            acc.push(el.toUpperCase())
        }
        return acc
    },[])
   
  
}

console.log(allUpperCase([{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]))