// // 1.
//
Array.prototype.myForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

//
// //[1, 2, 3].myForEach((el) => {
//   //console.log(el)
// //})
// // 2.

// })
// SOLUTION USING A LOOP INSTEAD
// Array.prototype.myMap = function(callback) {
//  let result =[];
//  for(let i = 0; i < this.length; i++) {
//    result.push(callback(this[i]))
//
//  }
//  return result
//  console.log(result)
// };
//
// Array.prototype.myMap = function(anyT){
//    let result = [];
//    this.myForEach(element => {
//
//      result.push(anyT(element));
//    })
//
//    return result;
// }
//
//
// let double = [1, 2, 3].myMap((el) => {
//  return el * 2;
// })
// console.log(double);
// 3.
// Array.prototype.myFilter = function(callback){
//     let result = [];
//     this.myForEach(element => {
//
//       result.push(callback(element));
//     })
//
//     return result;
//   }
//
// let ages = [32, 33, 16, 40].myFilter((el)=>{
//   return el >= 18;
// })
// console.log(ages)
//
// let ages = [32, 33, 16, 40].myFilter((el)=>{
//     if ( el >= 18){
//       console.log(el)
//     }else{
//      (el <= 18)
//     }
//     console.log()
//   return el;
// })
// console.log(ages)

// 4. The every() method checks if all elements in an array pass a test (provided as a function).
//
// The every() method executes the function once for each element present in the array:
//
// If it finds an array element where the function returns a false value, every() returns false (and does not check the remaining values)
// If no false occur, every() returns true
// Note: every() does not execute the function for array elements without values.
//
// Note: every() does not change the original array
//4
Array.prototype.myEvery = function(callback) {
let result = [];
 this.myForEach(element => {

   result.push(callback(element));
 })
   if (!result) {
     return false;
   }
 }
 return true;
}
console.log([4,6,10,20,2].myEvery(element)

// 5. Reduce (acc,currentValue)
//MY ATTEMPT
Array.prototype.myReduce = function (acc,currentValue = this[0]){
  let acc = // element

  return acc;
}
let array = [2,3,4,6];
console.log(array.myReduce((a,b)=> {return a + b}))

//LEARNING IN CLASS
// Array.prototype.myReduce = function (callback,acc){
//   let startingIdx = 0;
//   if(!acc){
//     acc = this[0];
//     startingIdx ++;
//   }
//   for(let i=0;startingIdx;i++){
//     // if we know that acc is starting at 0, we know that i should not start at 0.
//     acc = callback(acc,this[i]);
//   };
//   return acc;
// };
//
// let arr = [1,2,5,3,4];
// let result = arr.myReduce((acc,currentEl)=> {
//   return acc + currentEl;
// })


//.6

//function transpose (mtx){
//   let grid =[];
//   for (let i=0;i<mtx[0].length;i++){ //mtx[0] grabbing the 1st elements length which is an array
//         grid[i]=[];
//     for (let j= 0 ;j<mtx.length;j++){
//         grid[i][j]= mtx[j][i];// switching those elements
//     }
//   }
//   return grid;
// }
//
// let mtx = [[1,2,3],[1,2,3],[1,2,3]]
// console.log(transpose(mtx));

//.7
// let arr = [1,2,3,4,5];
// let newArr = arr.myMap(el => {return el + 10;})
// console.log(newArr)
//
// //.8 The toString() method converts a number to a string.
// let array = [2,4,6,7,10]
// let newArray = array.myMap(el =>[return element,toString()]);
// console.log(newArray);
//
// //9.
// let arr = [2,4,6,7,10];
// let result = arr.myFilter(el=> {return el%2===0})
//console.log(newArr)

// 10.
let arr = [2,2,3,4,];
let sameSame= arr.myEvery((el) => {
  return el  %2 === 0;
)}
// 11.
  let arr = [5,10,15,20];

let sumElem = arr.reduce((acc, el) =>{
      return acc + el
});

console.log(sum);
// // .12
// let arr = [1,2,3];
// let doubleResult = arr.myMap( el => { return el*2; }).myReduce((acc, currentValue)) => { return acc*currentValue; }
// console.log(doubleResult)

// 13
// let arr = [1,2,3,4,5,6,11]
// let result = arr.myReduce(function(accumulator,currentValue))
//
//       return (accumulator > currentValue) ? accumulator : currentValue;
//
//       // but if I set up Reduce (a,b) => a+tb
//       // I am thinking here that with a true false statement I return the larger number when it loops through the array. If the accumulator is bigger than the currentValue then return the accumulator. If not the currentValue.

//14.
const myJoin = (arr,string)=>{
  return arr.map(string.concat('') )
}
console.log(myJoin(['M','E','O','W'],))
