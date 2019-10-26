// const increment = (arr) => {
//    return arr.reduce((acc, el) =>{
//        acc.push(el + 10)
//        return acc
//    },[])
// }
// console.log(increment([1,2,3,4,5,6]))

// const noStringsAtt = (arr) => {
//     return arr.reduce((acc, el) =>{
//         if(typeof el !== typeof ''){
//             acc.push('')
//         }else{
//             acc.push(el)
//         }
//         return acc
//     },[])
// }
// console.log(noStringsAtt([1,2,3, 'cat', 'dog']))

// const evenNum = (arr) =>{
//     return arr.reduce((acc, el) => {
//         if(el % 2 === 0){
//             acc.push(el)
//         }
//         return acc
//     }, [])
// }
// console.log(evenNum([1,2,3,4,5,6,7,8,9,10]))

// const evenNum = (arr) => {
//     return arr.reduce((el, i) => {
//         if(el === arr[i]){
//             return true
//         }else{
//             return false
//         }
//     },)
// }
// console.log(evenNum(([5,1,1,1,1,1,])))


// const allZeroes = (arr) => {
//     return arr.reduce ((acc, el) => {
//         if(el === 0){
//             acc++;
//         }else{
//             acc = 1
//         }
//         return acc
//     },0)
// }
// console.log(allZeroes([0,0,0,0,0,0,0,0]))

// const allDoubles = (arr) => {
//     return arr.reduce((acc, el) => {
//         acc.push(el * 2)
//         return acc
//     },[])
// }
// console.log(allDoubles([1,2,3,4,5]))

// const triNum = (arr) => {
//     return arr.reduce((acc, el) => {
//         if(el * 3 > 20){
//             acc = false
//         }else{
//             acc = true
//         }
//         return acc

//     },)
// }
// console.log(triNum([3,4,5]))

const elementDivisibleBy = (divisor, arr) => {
    return arr.reduce((acc, el) => {
        if(el % divisor === 0){
            acc.push(el)
        }
        return acc
    },[])
}
console.log(elementDivisibleBy(4,[5,4,5,6,7,10,15,23,12,20]))
