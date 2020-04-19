//Question 1

const incrementByTen = (arr) => {
    return arr.map((el) => {
        return el + 10
    })
}
console.log(incrementByTen([1,2,3,4,5]))

//Question 2

const convertNonstring = (arr) => {
    return arr.map((el) => {
        if (typeof(el) === typeof("")) {
            return el
        } else {
            return ""
        }
    })
}
console.log(convertNonstring(["a", 123, "b", "c", { }]))
