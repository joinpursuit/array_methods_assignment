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

//Question 3

const onlyEven = (arr) => {
    return arr.filter((el) => {
      if (el % 2 === 0) {
        return el
      }
    })
}
console.log(onlyEven([1,2,3,4,5]))

//Question 4

const sameElements = (arr) => {
    return arr.every((el) => {
      return (arr[0] === el)
    })
}
console.log(sameElements([2,1,1,1,1]))