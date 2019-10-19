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