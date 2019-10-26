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

const 