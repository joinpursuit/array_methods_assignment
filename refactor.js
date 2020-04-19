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

//Question 5

const countZeroes = (arr) => {
    let count = 0
    arr.forEach((el) => {
        if (el === 0) {
            count++
        }
    })
    return count
}
console.log(countZeroes([1,0,0,2,0,3,0,0,0]))

//Question 6

const doubleEl = (arr) => {
    return arr.map((el) => {
      return el * 2
    })
}
console.log(doubleEl([1,2,3,4]))

//Question 7

const triple = (arr) => {
    return arr.every((el) => {
       return (el * 3 < 20) 
    })
}
console.log(triple([3,4,5]))

//Question 8

const elementDivisibleBy = (divisor, arr) => {
    return arr.filter((el) => {
      if (el % divisor === 0) {
        return el
      }
    })
}
console.log(elementDivisibleBy(5, [4,5,6,7,8,9,10,11,12,13,14,15]))

//Question 9

const numberTimesIdx = (arr) => {
    return arr.map((el, i) => {
      return i * el
    })
}
console.log(numberTimesIdx([6,7,8,9]))

//Question 10

const positiveEven = (arr) => {
    return arr.every((el) => {
     return (el > 0 && el % 2 === 0 && el % 10 !== 0)
    })
}
console.log(positiveEven([2,4,6,8,10]))