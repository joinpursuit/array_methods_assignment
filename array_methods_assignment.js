// Question 1

Array.prototype.myForEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
  return this;
}
// ////////////////////////////////////////////////
// Question 2
Array.prototype.myMap = function(callback) {
  let output = [];
  this.myForEach(el => {
    output.push(callback(el))
  })
  return output;
}
////////////////////////////////////////////////////
// // Question 3
Array.prototype.myFilter = function(callback) {
  let output = [];
  for(let i = 0; i < this.length; i++) {
    if(callback(this[i])) {
      output.push(this[i])
    }
  }
  return output;
}
//////////////////////////////////////////////////////
// Question 4
Array.prototype.myEvery = function(callback) {
  for(let i = 0; i < this.length; i++) {
    if(!callback(this[i])) {
      return false;
    }
  }
  return true
}
//////////////////////////////////////////////////////
// Question 5
Array.prototype.myReduce = function(callback, initialValue) {
    let counter = 0;
    let accumulator;
    if (initialValue === undefined) {
        accumulator = this[0];
        counter = 1;
    } else {
        accumulator = initialValue;
    }
    for (let i = counter; i < this.length; i++) {
        accumulator = callback(accumulator, this[i])
    }

    return accumulator;
}
///////////////////////////////////////////////////////
// Question 6
// let mtx = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// let grid = [];
// myTranspose = function(mtx) {
//   for(let i = 0; i < this[i].length; i++) {
//     grid[i] = [];
//     for(let q = 0; q < this.length; i++) {
//     grid[i][q] = grid[q][i]
//     }
//   }
// } return grid
///////////////////////////////////////////////////////
// Question 7
// let arr = [1, 2, 3, 4, 5, 6]
// arr.myMap(el => {
//   el * 10
// }
///////////////////////////////////////////////////////
// Question 8
// let arr = [1, 'hello', 2, 3, 'world', 9, 'empty', 10]
// arr.myMap(el => {
//   let arr2 = [];
//   if(typeof(el) !== 'string') {
//     arr2.push('')
//   } else {arr2.push(el)}
//   return arr2
// })
///////////////////////////////////////////////////////
//Question 9 //****** NEED TO BE FIXED ********
// let arr = [1, 2, 3, 4, 5, 6]
// arr.myFilter((el) => {
//   let evenArr = [];
//   if(el % 2 === 0) {evenArr.push(el)
//   }
//   return evenArr
// })
/////////////////////////////////////////////////////////
// // Question 10
// let arr = [1, 1, 1, 1, 1, 1];
// let answer = true
// Array.prototype.myEvery = function(callback) {
//   for(let i = 0; i < this.length; i++) {
//     if(this[0] !== this[i]) {
//       answer = false
//     }
//   } return answer
// }
//
// let everyResult = arr.myEvery((el) => {
//   return el
// })
//
// console.log(everyResult)
/////////////////////////////////////////////////////////
// Question 11
// arr.myReduce((acc, el) => {
//   return acc + el
// })
//////////////////////////////////////////////////////////
// Question 12
// let arr = [1, 2, 3, 4, 5, 6, 7]
// arr.myMap((el) => {
//   el * 2
// }.myReduce((acc, el) => {
//   return acc * el
// }))
///////////////////////////////////////////////////////////
// Question 13
// let arr = [1, 2, 3, 4, 5, 6]
// arr.myReduce((el, acc) => {
//   return acc
// })
///////////////////////////////////////////////////////////
Question 14
function elementDivisibleBy(divisor, arr) {
  return arr.myFilter((el) => {
    return el % divisor === 0
  })
  }

////////////////////////////////////////////////////////////
Question 15
Array.prototype.myJoin = function(joiner = ""){
  output = "";
  for(let i = 0; i < this.length; i++) {
    output += this[i]
    if(i !== this.length - 1) {
      output += joiner
    }
  }
  return output
}
//////////////////////////////////////////////////////////////
Question 16
String.prototype.mySlice = function(start, end) {
  let slice = "";

  if (typeof end === 'undefined') {
    end = this.length;
  }

  for (let i = start; i < end && i < this.length; i++) {
    slice += this[i];
  }
  return slice;
};
///////////////////////////////////////////////////////////////
Question 17
function numberTimesIdx(arr) {
  return arr.map((el, i) => {
    return el * i
  })
}
numberTimesIdx([1, 2, 3, 4, 5])
///////////////////////////////////////////////////////////////
Question 18
Array.prototype.myFlatten = function() {
  let output = [];
  for(let i = 0; i < this.length; i++) {
    if(Array.isArray(this[i])) {
      output =  output.concat(this[i].myFlatten())
    } else {
      output.push(this[i])
    }
  }
  return output
}
