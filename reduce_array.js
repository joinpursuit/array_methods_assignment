// QUESTION: 1
const plus10 = (arr) => {

    return arr.reduce((acc, el ) => {
     acc.push(el += 10)
        return acc
  },[])

}
console.log(plus10([1,2,3,4,5]));


// QUESTION: 2

const nonString = (arr) => {

  return  arr.reduce((newArr, el) => {
    if( typeof el === "string"){
       newArr.push(el)
    }else {
      newArr.push("")
    }
    return newArr
  }, [])
}
console.log(nonString(["a", 123, "b", "c", {name: "cat"}]))


// QUESTION: 3
const evenNums = (arr) => {
  return arr.reduce((evens, el) => {
      if(el % 2 === 0){
        evens.push(el);
      }
      return evens
  }, [])
}
console.log(evenNums([1,2,3,4,5,6]));


// QUESTION: 4

const sameNum = (arr) => {
  return arr.reduce((isSame, el) => {
      if(el === arr[0]){
       return isSame
     } else {
       return false
     }
  },true )
}
console.log(sameNum([1,1,1]));


// QUESTION: 5
const countZeros = (arr) => {
  return arr.reduce((count,el) => {
      if(el === 0){
        count ++
      }
      return count
  },0)
}
console.log(countZeros([6,0,0,0,0,1,0,1,0]));


// QUESTION: 6

const doubles = (arr) => {
  return arr.reduce((double, el) => {
        double.push(el * 2)
    return double
  },[])
}
console.log(doubles([2,3,4,5]));


// QUESTION:  7
const everyTripled = (arr) => {
  return arr.reduce((triple, el) => {
    if (el * 3 < 20) {
      return triple
    } else {
      return false
    }
  }, true)
}
console.log(everyTripled([3, 4 , 5, 7]))


// QUESTION: 8
const elementDivisibleBy = (arr, divisor) => {
  return arr.reduce((divide, el) => {
    if (el % divisor === 0) {
      divide.push(el)
    }
    return divide
  }, [])
}
console.log(elementDivisibleBy([4,5,6,7,8,9,10,11,12,13,14,15], 5))


// QUESTION: 9
const numberTimesIdx = (arr) => {
  return arr.reduce((newArr, el, i) => {
    newArr.push(el * i)
    return newArr
  }, [])
}
console.log(numberTimesIdx([6,7,8,9]))


// QUESTION: 10
const positiveEvenNums = (arr) => {
  return arr.reduce((evenNums, el) => {
    if (el % 2 === 0 && el % 10 !== 0) {
      return evenNums
    } else {
      return false
    }
  }, true)
}
console.log(positiveEvenNums([2,4,6,8,12]))
console.log(positiveEvenNums([2,4,6,8,10]))


// QUESTION: 11
const stringUppercased = (arr) => {
  return arr.reduce((isUppercase, el) => {
    if (typeof el === "string") {
      isUppercase.push(el.toUpperCase());
    }
    return isUppercase
  }, [])
}
console.log(stringUppercased([{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]))
