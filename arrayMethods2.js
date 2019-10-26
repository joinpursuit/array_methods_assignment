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