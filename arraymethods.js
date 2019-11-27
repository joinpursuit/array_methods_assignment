// 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.

// let arr = [3, 5, 7];
// console.log(arr.map(el => {
//  return el * 10;
// }));

// 2. Given an array, return a new array where every non-string element is converted to an empty string.

// let arr = ["a", 123, "b", "c", {name: "cat"}];
// console.log(arr.map(el => {
//     if (typeof el != "string") {
//     return "";
//     } else {
//         return el;
//     }
// }))

// 3. Write a function that returns only the even elements in an array of numbers.

// let arr = [1,2,3,4,5]
// console.log(arr.filter(el => {
//   return el % 2 === 0;
// }))

// 4. Write a function that checks if all elements in the array are the same.

const same = arr =>{
    let check = arr[0];
    arr.forEach(el => {
       return check = el
       if(check === el) {
           console.log("they are the same")
    }
    })
}
console.log(same([1,2,3,4,"erik"]));

// 5. Write a function `countZeroes`, which takes an array of numbers as its argument 
// and returns the amount of zeroes that occur in it.

// const countZeroes = arr =>{
//     let count=0;
//     arr.forEach(el => {
//         if(el===0){
//         count++
//         }
//     });
//     return count
// }
// console.log(countZeroes([1,0,0,2,0,3,0,0,0]));

// 6. Write a function that doubles every element in an array.

// const doubles = arr =>{
//         console.log(arr.map(el => {
//             return el * 2;
//         }))    
// }
// console.log(doubles([1,2,3,4]));

// 7. Write a function that whether every tripled number in an array is less than 20.

// const tripled = arr =>{
//     arr.map(el =>{
//         if(el*3<=20){
//             console.log("true");
//         } else {
//             console.log("false");
//         }
//     })
// }
// console.log(tripled([2,4,7]));

// 8. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.  
// Return a new array of every element of arr that can be evenly divided by divisor.

// const elementDivisibleBy = (div, arr) =>{
//     console.log(arr.filter(el => {
//      return el % div === 0;
//     }))
// }
// console.log(elementDivisibleBy(5, [4,5,6,7,8,9,10,11,12,13,14,15]))

// 9. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by its index.

// const numberTimesIdx = arr =>{
//     let newArr=[];
//     for(let i=0; i<arr.length; i++){
//         newVal=arr[i]*i;
//         newArr.push(newVal)
//     }
//     return newArr;
//     }
// console.log(numberTimesIdx([6,7,8,9]))

// 10. Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.

// const posit = arr =>{
//     arr.forEach(el => {
//         if(el>0 && el%10!=0){
//             console.log("true");
//         }else{
//             console.log("false");
//         }
//     })
// }
// console.log(posit([1,2,3,4,10]));

// 11. Write a function that returns a new array containing all of the strings in the original array uppercased.

// const uppercased = arr =>{
//     console.log(arr.map(el=>{
//         if(typeof el === "string"){
//             return el.toUpperCase();
//         }
//     }))
// }
// console.log(uppercased([{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]));