//1.
let arr1 = [1,2,3,4,5]
const arrPlusTen = arr => {
    return arr.reduce((newarr, el) => {
        newarr.push(el+10)
        return newarr
    }, [])
}   
console.log(arrPlusTen(arr1))
//2.
let arr2 = ["a", 123, "b", "c", {name: "cat"}]
const emptyString = (arr) =>{
    return arr.reduce((newarr,el)=>{
        if(typeof el === "string"){
        el = el
    }else{
       el = " "
    }newarr.push(el)
    return newarr
    }, [])
}
console.log(emptyString(arr2))
//3.
arr3 = [1,2,3,4,5]
const evenArr = (arr) =>{
    return arr.reduce((newarr,el)=>{
        if(el % 2 === 0){
            newarr.push(el)
        }return newarr
    }, [])
}
console.log(evenArr(arr3))
//4.
let arr4 = [1,1,1,1,1]
let arr5 = [1,1,1,1,2]
const sameCheck = (arr) =>{
    return arr.reduce((boolean, el)=>{
        if(arr[0] === el){
           return true
        }else {
            return false
        }
    })
}
console.log(sameCheck(arr4))
//5.
const countZeros = (arr) =>{
    return arr.reduce((count,el)=>{
        if(el === 0){
            count +=1
        }return count
    }, 0)
}
let arr6 = [1,0,0,1,2,0,5,0,0]
console.log(countZeros(arr6))
//6
const arrDoubler = (arr) =>{
    return arr.reduce((newarr,el)=>{
        newarr.push(el * 2)
        return newarr
    }, [])
}
console.log(arrDoubler(arr6))
//7.
const tripUnder20 = (arr) =>{
    return arr.reduce((boolean, el)=>{
        if(el * 3 < 20){
           return true
        }else{
           return false
        }
    })
}
let arr7 = [1,2,4,7]
console.log(tripUnder20(arr7))
//8.
const elementDivisable = (divisor, arr) =>{
    return arr.reduce((newarr, el)=>{
        if(el % divisor === 0){
            newarr.push(el)
        }return newarr
    }, [])
}
let arr8 = [4,5,6,7,8,9,10,11,12,13,14,15]
console.log(elementDivisable(3,arr8))
//9.
const numberTimesIdx = (arr) =>{
    return arr.reduce((newarr, el, i)=>{
        newarr.push(el * i)
        return newarr
    }, [])
}
console.log(numberTimesIdx(arr7))
//10.
const possCheck = (arr) =>{
    return arr.reduce((arr,el)=>{
        if(el % 10 !== 0 && el % 2 === 0){
            return true
        }else{
            return false
        }
    })
}
arr9 = [2,4,6,8,10]
arr10 = [2,4,6,8,12]
console.log(possCheck(arr9))
//11.
const upperCase = (arr) => {
    return arr.reduce((newarr, el)=>{
        if(typeof el ==="string"){
            newarr.push(el.toUpperCase())
        }
        return newarr
    }, [])
}
let input = [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
Output: ["CAT", "DOG", "BEAR"]
console.log(upperCase(input)) 