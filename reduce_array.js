//Problem 1
const incrementArray = (arr) =>{
    return arr.reduce((acc, element) =>{
        acc.push(element + 10)
        return acc
    }, [])
}

console.log(incrementArray([1, 2, 3, 4, 5,]))

//Problem 2
const stringFunction = (arr) => {
    return arr.reduce((acc, element)=>{
        if(typeof(element) !== "string") {
            acc.push("")
        } else {
            acc.push(element)
        }
        return acc
    }, [])
}
console.log(stringFunction(["a", 123, "b", "c", {name: "cat"}]))

//Problem 3
const evenNum = (arr) => {
    return arr.reduce((acc, element)=>{
        if(element%2 === 0){
            acc.push(element)
        }
        return acc
    }, [])
}
console.log(evenNum([1, 2, 3, 4, 5]))

//Problem 4
const sameFunction = (arr) =>{
    return arr.reduce((acc, element)=>{
        if(element === arr[0]) {
            return acc
        } else {
            return false
        }
    }, true)
}
console.log(sameFunction([1,1,1,1,1,1]))
console.log(sameFunction([1,1,1,1,1,2]))

//Problem 5
const numZeros = (arr) =>{
    return arr.reduce((count, element)=>{
        if(element === 0){
            count ++
        }
        return count
    }, 0)
}
console.log(numZeros([1,0,0,2,0,3,0,0,0]))

//Problem 6
const doubleArray = (arr) =>{
    return arr.reduce((acc, element)=>{
        acc.push(element*2)
        return acc
    }, [])
}
console.log(doubleArray([1,2,3,4]))

//Problem 7
const lessThan20 = (arr) =>{
    return arr.reduce((acc, element) => {
        if(element*3 < 20){
            return acc
        } else {
            return false
        }
    }, true)
}
console.log(lessThan20([1,2,4,7]))
console.log(lessThan20([3,4,5]))

//Problem 8
const elementDivisibleBy = (divisor, arr) =>{
    return arr.reduce((acc, element) =>{
        if(element%divisor === 0){
            acc.push(element)
        }
        return acc
    }, [])
}
console.log(elementDivisibleBy(5, [4,5,6,7,8,9,10,11,12,13,14,15]))

//Problem 9
const numberTimesIdx = (arr) =>{
    return arr.reduce((acc, element, i) =>{
        acc.push(element * i)
        return acc
    }, [])
}
console.log(numberTimesIdx([6,7,8,9]))

//Problem 10
const evenPositive = (arr) =>{
    return arr.reduce((acc, ele) => {
        if(ele%2 === 0 && ele > 0 && ele%10 !== 0){
            return acc
        } else {
            return false
        }
    }, true)
}
console.log(evenPositive([2,4,6,8,12]))
console.log(evenPositive([2,4,6,8,10]))

//Problem 11
const upperCase = (arr) =>{
    return arr.reduce((acc, ele) =>{
        if(typeof(ele) === "string"){
            acc.push(ele.toUpperCase())
        }
        return acc
    }, [])
}
console.log(upperCase([{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]))