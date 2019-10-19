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
    return arr.forEach((el) => {
       let repeats = 0
        if (el === 0){
            repeats += 1
        }return repeats
    })
}
console.log(countZeros([1,0,0,2,0,3,0,0,0]))
//6. 
const twoUp = arr => {
        return arr.map((el) =>el * 2)
}
console.log(twoUp([1,2,3,4]))
//7. 
