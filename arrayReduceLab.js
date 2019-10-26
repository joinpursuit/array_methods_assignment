// 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.

const upByTenReduce = (arr) => {
  return arr.reduce((plusTen, el) => {
    plusTen.push(el += 10)
    return plusTen
  },[])
}
// console.log(upByTenReduce([1,2,3]))

// 2. Given an array, return a new array where every non-string element is converted to an empty string.

const emptyString = (arr) => {
  return arr.reduce((stringArr,el) => {
    if (typeof el === "string") {
      stringArr.push(el)
    } else {
      stringArr.push("")
    }
    return stringArr
  },[])
}
// console.log(emptyString(["apple",1,5,2,"moon","potato"]))

// 3. Write a function that returns only the even elements in an array of numbers.

const evenOnly = (arr) => {
  return arr.reduce((evenArr,el) => {
    if (el % 2 === 0){
      evenArr.push(el)
    }
    return evenArr
  },[])
}
// console.log(evenOnly([1,2,3,4,5,6]))

// 4. Write a function that checks if all elements in the array are the same.

const allTheSame = (arr) => {
  return arr.reduce((result,el) => {
    if (el !== arr[0]) {
      result = false
    }
    return result
  },true)
}
// console.log(allTheSame([1,1,1,1,1,2]))

// 5. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.

const countZeroes = (arr) => {
  return arr.reduce((zeroes,el) => {
    if (el === 0){
      zeroes++
    }
    return zeroes

  },0)
}
console.log(countZeroes([1,2,3,4,0,0,0,0,6]))