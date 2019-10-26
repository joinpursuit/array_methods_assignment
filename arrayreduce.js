console.log('--Q1--')
const incrementByTen = (arr) => {
    return arr.reduce((acc, el) =>{
       acc.push(el + 10)
       return acc
    },[])
}
console.log(incrementByTen([1,2,3,4,5]))

console.log('--Q2--')

const strOnly = (arr) => {
    return arr.reduce((acc, el) =>{
        if(typeof el !== 'string'){
            acc.push("")
        } else {
            acc.push(el)
        }
        return acc
    }, [])
}
console.log(strOnly(["a", 123, "b", "c", {name: "cat"}]))

console.log('--Q3--')
const evenNums = (arr) => {
    return arr.reduce((acc, el)=>{
        if(el % 2 === 0) {
            acc.push(el)
        }
        return acc
    }, [])
}
console.log(evenNums([1,2,3,4,5]))

console.log('--Q4--')
const sameEl = (arr) => {
    return arr.reduce((acc, el) =>{
        if(arr[0] !== el){
            acc = false
        }
        return acc
    }, true)
}
console.log(sameEl([1,1,1,1,2]))

console.log('--Q5--')
const countZeros = (arr) => {
    return arr.reduce((count, el)=>{
        if(el === 0){
            count++
        }
        return count
    }, 0)
}
console.log(countZeros([1,0,0,2,0,3,0,0,0]))

console.log('--Q6--')
const doubleEl = (arr) => {
    return arr.reduce((acc, el) => {
        acc.push(el * 2)
        return acc
    }, [])
}
console.log(doubleEl([1,2,3,4]))

console.log('--Q7--')
const isTripleLessThanTwenty = (arr) => {
    return arr.reduce((acc, el) => {
        if((el * 3) > 20){
            acc = false
        }
        return acc
    }, true)
}
console.log(isTripleLessThanTwenty([1,2,4,7]))

console.log('--Q8--')
const elementDivisibleBy = (divisor, arr) =>{
    return arr.reduce((acc, el) =>{
        if (el % divisor === 0){
            acc.push(el)
        }
        return acc
    }, [])
}
console.log(elementDivisibleBy(5, [4,5,6,7,8,9,10,11,12,13,14,15]))

console.log('--Q9--')
const numberTimesIdx = (arr) =>{
    return arr.reduce((acc, el, i)=>{
        acc.push(el * i)
        return acc
    }, [])
}
console.log(numberTimesIdx([6,7,8,9]))

console.log('--Q10--')
const evenPositiveNumNotEndInZero = (arr) => {
    return arr.reduce((acc, el) => {
        if (el % 2 !== 0 || el < 0 || el % 10 === 0){
            acc = false
        }
        return acc
    }, true)
}
console.log(evenPositiveNumNotEndInZero([2,4,6,8,10]))

console.log('--Q11--')
const strElConversion = (arr) =>{
    return arr.reduce((acc, el) =>{
        if(typeof el === 'string'){
            acc.push(el.toUpperCase())
        }
        return acc
    }, [])
}
console.log(strElConversion([{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]))