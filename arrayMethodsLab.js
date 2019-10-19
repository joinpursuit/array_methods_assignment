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
