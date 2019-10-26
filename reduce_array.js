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
