//1
const plus10 = (arr) => {
  return arr.map((el) => {
    return el + 10
  })
}
console.log(plus10([1,2,3]));

//2

const emptyStr = (arr) => {
  return arr.map((el) =>{
      if(typeof el === "string" ){
      return el
    }else{
      return ""
    }
  })
  }
//}
console.log(emptyStr(["1", "b", true, {name: "cat"}]));

//3

const evenNum = (arr) => {
  return arr.filter((el) => {
    return el % 2 === 0;
  })
}
console.log(evenNum([1,2,3,4,5]));

//4
const sameArray = (arr) => {
  return arr.every((el) => {
    if (el === arr[el]){
      return true;
    } else {
      return false;
    }
  })
}
console.log(sameArray([1,1,1,1]));
console.log(sameArray([1,2,1,1]));

//5

const countZeroes = (arr) => {
  let count = 0;
  arr.forEach((el) => {
      if (el === 0){
        count++
      }
  })
  return count
}
console.log(countZeroes([1,0,0,2,0,3,0,0,0]));

//6

const double = (arr) => {
  return arr.map((el) =>{
    return el * 2

  })
}
console.log(double([1,2,3,4]));

//7
const triple = (arr) =>{
  return arr.every((el)=>{
    if((el*3) < 20){
      return true
    }else
    return false
  } )
}
console.log(triple([1,2,4,7]));
console.log(triple([3,4,5]));


//8 

const elementDivisibleBy = (arr, divisor) => {
  return arr.filter((el) => {
    if(el % divisor === 0) 
    return el
  })
}

console.log(elementDivisibleBy([4,5,6,7,8,9,10,11,12,13,14,15], 5)) 

//9 

const numberTimesIdx = (arr) => {
  return arr.map((el, i) => {
    return el * i
  })
}

console.log(numberTimesIdx([6,7,8,9]))



//10

const posEven = (arr) => {
  return arr.every((el) => {
    if(el % 10 !== 0 && el % 2 === 0){
      return el
    }
  })
}

console.log(posEven([2,4,6,8,12]))
console.log(posEven([2,4,6,8,10]))

const upperCase = (arr) => {
   let newArr = arr.filter((el) => {
    if(typeof el === "string"){
      return el
    }
    }) 
    return newArr.map((el) => {
      return el.toUpperCase()
    })
}

console.log(upperCase([{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]))