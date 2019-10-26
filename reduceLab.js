const add10 = (arry) => {
   return arry.reduce((newArry,el)=>{
    newArry.push(el+=10)
    return newArry
   },[])
}
console.log(add10([1,2,3,4,5]))

const nonString =(arry)=>{
    return arry.reduce((newArry, el)=>{
        if (typeof(el) !== "string"){
            newArry.push("")
        }else{
            newArry.push(el)
        }
        return newArry
    },[])
}
console.log(nonString(["a", 123, "b", "c", {name: "cat"}]))


const onlyEven =(arry)=>{
    return arry.reduce((newArry, el)=>{
        if(el%2===0){
            newArry.push(el)
        }
        return newArry
    },[])
}

console.log(onlyEven([1,2,3,4,5]))

const allSame = arry =>{
    return arry.reduce((arr, el)=>{
      if(arry[0] !== el){
          arr = false
      }
      return arr
    },true)
}
console.log(allSame([1,1,1,1,1,2]))


const countZeros = arr => {
    return arr.reduce((num, el)=>{
        if(el===0){
            num++
        }
        return num
    },0)
}
console.log(countZeros([1,0,0,2,0,0,3,0,0]))

const doubleArr = (arry) =>{
    return arry.reduce((newArry, el)=>{
        newArry.push(el*2)
    return newArry
    },[])
}
console.log(doubleArr([1,2,3,4]))

const tripleNumless20 =(arry)=>{
    return arry.reduce((newArry,el)=>{
        if(el*3>20){
            newArry = false
        }
        return newArry
    },true)
}
console.log(tripleNumless20([1,2,4,7]))

const elementDivisibleBy = (arry,divisor) =>{
    return arry.reduce((newArry,el)=>{
        if (el%divisor===0){
            newArry.push(el)
        }
        return newArry
    },[])
}

console.log(elementDivisibleBy([4,5,6,7,8,9,10,11,12,13,14,15], 3))

const numberTimesIdx = (arry) =>{
    return arry.reduce((newArry,el,i)=>{
        newArry.push(el* i)
        return newArry
    },[])
}

console.log(numberTimesIdx([6,7,8,9]))

const positiveAndEven = arry=>{
   return arry.reduce((newArry,el)=>{
        if((el<0) || (el%2 !== 0) || (el%10 === 0)){
            newArry = false
        }
        return newArry
    },true)
}
console.log(positiveAndEven([2,4,6,8,12]))

const stringUppercases =(arr)=>{
    return arr.reduce((newString,el)=>{
        if(typeof(el)==="string"){
            newString.push(el.toUpperCase())
        }
        return newString
    },[])
}
console.log(stringUppercases([{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]))