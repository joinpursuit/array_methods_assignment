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