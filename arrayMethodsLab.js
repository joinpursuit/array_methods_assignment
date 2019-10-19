//QUESTION 1

const add1 = (arr) => {
    return arr.map(el => {
        return el + 10
    })
}
console.log(add1([1, 2, 3, 4]))

//QUESTION 2

const nonString = (arr) => {
    return arr.map((el) => {
        if(typeof el === typeof ""){
            return el
        }else {
            return ""
        }
    })
}
console.log(nonString([1, 2, "talk", 4, "to"]))

//QUESTION 3

const evenArray = (arr) =>{
    return arr.filter((el) =>{
        if (el % 2 === 0){
            return true
        }
    })
}
console.log(evenArray([1, 2, 3, 4, 5, 6, 7, 8]))

//Question 4
const sameFunction = (arr) =>{
    return arr.every((el) =>{
        return el === arr[0]
        
    })
}
console.log(sameFunction([1, 1, 1, 1, 1]))

//QUESTION 5
const countZeroes = (arr) => {
    let count = 0
    arr.forEach(el => {
        if(el === 0){
            count++
        }   
    })
    return count
}
console.log(countZeroes([0,5,0,0,5,0,5,0]))

//QUESTION 6
const multArr = (arr) => {
    return arr.map((el) => {
        return el * 2
    })
}
console.log(multArr([1,2,3,4,5]))

// Question 7

const allGreat = (arr, target) => {
    return arr.every((el) =>{
       
        return el*3 < target
    })
}
console.log(allGreat([1, 10, 4, 5, 6], 20))

// Question 8 
const elementDivisibleBy = (arr, divisor) => {
    return arr.filter((el) =>{
       
        return el % divisor === 0
    })
}
console.log(elementDivisibleBy([4,5,6,7,8,9,10,11,12,13,14,15],5))

//Question 9
const numberTimesIdx = (arr) => {
    return arr.map((el, i) => {
        return el * i
    })
}
console.log(numberTimesIdx([1, 10, 4, 5, 6]))

//Question 10
const checker = (arr) => {
    return arr.every(el => {
        if(el % 10 !== 0 && el % 2 === 0){
            return el > 0
        }
    })
}
console.log(checker([2,4,6,8,10]))
