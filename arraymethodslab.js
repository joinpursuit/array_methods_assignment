// Problem 1
const addTen = (arr) => {
    return arr.map((el) => {
            return el += 10;
    })
}
console.log(addTen([1, 2, 3, 4, 5]))


// Problem 2
const nonString = (arr) => {
    return arr.map((el) => {
        if (typeof el !== "string") {
            return el = ""
        } else {
            return el
        }
    })
}
console.log(nonString(["a", 123, "b", "c", {name: "cat"}]))


// Problem 3
const onlyEven = (arr) => {
    return arr.filter((el) => {
        return el % 2 === 0;
    })
}
console.log(onlyEven([1,2,3,4,5]))


// Problem 4
const checkAll = (arr) => {
    return arr.every((el) => {
     if (el === arr[el]) {
         return true
     } else {
         return false
     }
    })
}
console.log(checkAll([1,1,1,1,2]))
console.log(checkAll([1,1,1,1,1]))