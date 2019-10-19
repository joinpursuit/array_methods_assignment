//1.
const arrByTen = (arr) => {
    return arr.map((el) => {
       return el + 10 
    })
}
console.log(arrByTen([1,3,5,7]))
//2.
const emptyArr = (arr) => {
    return arr.map((el) => {
        if(typeof(el) !== "string"){
            return ""
        }else{
            return el
        }
    })
}
console.log(emptyArr(["a", 123, "b", "c", {name: "cat"}]))
//3.
const allEvens = (arr) => {
    return arr.filter((el) => {
        return el % 2 === 0
    })
}
console.log(allEvens([1,2,3,4,5]))
//4.
const sameCheck = (arr) => {
    return arr.every((el) => {
        return arr[0] === el
    })
}
console.log(sameCheck([1,1,1,1]))
//5.
const countZeros = (arr) =>{
    let repeats = 0
    arr.forEach((el) => {
        if (el === 0){
            repeats += 1
        }
    })
    return repeats
}
console.log(countZeros([1,0,0,2,0,3,0,0,0]))
//6. 
const twoUp = arr => {
        return arr.map((el) =>el * 2)
}
console.log(twoUp([1,2,3,4]))
//7. 
const trippleCheck = arr => {
    return arr.every((el) => {
        return el * 3 < 20
    }
)
}
console.log(trippleCheck([1,2,4,7]))
//8.
const elementDivisableBy = (divisor, arr) => {
    return arr.filter((el) => {
        if (el % divisor === 0){
            return el
        }
    })
}
console.log(elementDivisableBy(5, [4,5,6,7,8,9,10,11,12,13,14,15]))
//9.
const arrByIndex = arr => {
    return arr.map((el, i) => el * i)
}
console.log(arrByIndex([1,2,3,4]))
//10.
const  allEvensNoTen = arr => {
    return arr.every((el) => {
     return el % 2===0 && el % 10 !== 0
    })
}

console.log(allEvensNoTen([1,2,3,1,4,10]))
//11.
// const upperArr = (arr) => {
//     return arr.map((el) => {(
//       el.filter("string") 
//     )
//     }    
const upperCase = arr => {
    let newArr = arr.filter((el)=>{
        if(typeof el === 'string'){
            return el;
        }
    })
    return newArr.map((el)=>{
        return el.toUpperCase();
    })
 }
 console.log(upperCase([{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]))