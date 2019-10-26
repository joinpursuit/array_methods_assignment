//QUESTION 1

const increments = (arr) => {
    return arr.reduce((increment, el) => {  
        increment.push(el + 10)
        return increment
    }, []) 
}
console.log(increments([1,2,3,4]))

//QUESTION 2

const nonString = (arr) => {
    return arr.reduce((newArr, el) => {
        if(typeof el !== typeof "") {
            newArr.push("")
        } else {
            newArr.push(el)
        }
        return newArr
    }, [])
}
console.log(nonString(["blue", 5, "five", 2]))

//QUESTION 3

const evenArray = (arr) => {
    return arr.reduce((newArr, el) => {
        if(el % 2 === 0){
            newArr.push(el)
        }
        return newArr
    }, [])
}
console.log(evenArray([1,2,3,4,5,6,7,8]))

//Question 4

const truthy = (arr) => {
    return arr.reduce((el, i) => {
        if(el === arr[i]){
            acc = true
        }else {
            acc = false
        }
        return acc
    })
}
console.log(truthy([1,1,1,1,1,3,1,1]))

//Question 5 

const countZeroes = (arr) => {
    return arr.reduce((acc = 0, el) => {
        if(el === 0) {
            acc++
        }
        return acc
    }, 0)
}
console.log(countZeroes([0,0,0,0,0,1,2,3]))

//Question 6

const doubleAll = (arr) => {
    return arr.reduce((acc, el) => {
        acc.push(el * 2)
        return acc
    }, [])
}
console.log(doubleAll([1,2,3]))

//Question 7

const lessThan = (arr) => {
    return arr.reduce((acc, el) => {
        if(el * 3 > 20){
            acc = false 
        }else {
            acc = true
        }
        return acc
    })
}
console.log(lessThan([3,4,5,6]))

//Question 8

const elementDivisibleBy = (divisor, arr) => {
    return arr.reduce((acc, el) => {
        if(el % divisor === 0){
            acc.push(el)
        }
        return acc
    }, [])
}
console.log(elementDivisibleBy(2, [1,2,3,4,5,6,7,8]))

//Question 9

const numberTimesIdx = (arr) => {
    return arr. reduce((acc, el, i) => {
        acc.push(el * i)
        return acc
    }, [])
}
console.log(numberTimesIdx([1,2,3,4]))