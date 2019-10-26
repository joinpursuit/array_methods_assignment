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

const evenNum = (arr) => {
    return arr.reduce((el, i) => {
        if(el === arr[i]){
            return true
        }else{
            return false
        }
    },)
}
console.log(evenNum(([5,1,1,1,1,1,])))