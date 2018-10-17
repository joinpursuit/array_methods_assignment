// Exercises

// __NOTE:__ DO NOT USE THE BUILT IN METHODS WHEN ASKED TO MAKE THEM!

// 1. Using Array.prototype add a new method `myForEach` that mimics the behaivor of the built in `forEach`.

Array.prototype.myForEach = function(callback) {
  for (let i = 0; i < this.length; i++){
    callback(this[i]);
  }
};

let arr1 = [3,5,7,8,1,9,2];
arr1.myForEach((el) => {
  return el);
});

// 2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.

Array.prototype.myForEach = function(callback) {
  for (let i = 0; i < this.length; i++){
    callback(this[i]);
  }
};

Array.prototype.myMap1 = function(callback) {
  let arrOutPut = [];
  this.myForEach(el => {
    arrOutPut.push(callback(el))
  })
  return arrOutPut;
};

Array.prototype.myMap2 = function(callback){
  let arrOutPut = [];
  for (let i = 0; i < this.length; i++) {
    arrOutPut.push(callback(this[i]));
  }
  return arrOutPut;
};

// 3. Write a 'myFilter` that behave's the same as `filter`.

Array.prototype.myForEach = function(callback) {
  for (let i = 0; i < this.length; i++){
    callback(this[i]);
  }
};

Array.prototype.myFilter = function(callback){
  let arrOutPut = [];
  this.myForEach(this[i]) => {
    if(callback(this[i]) === true){
      arrOutPut.push(callback(this[i]));
    };
  return arrOutPut;
};

// 4. Write a `myEvery`.
Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i])) {
      return false;
    }
  }
  return true;
};

// 5. Write a `myReduce`. It should use the first element in the array if none is given.
Array.prototype.myReduce = function(callback, acc) {
  let startingIdx = 0;
  if(!acc){
    acc = this[0];
    startingIdx++
  };
  for (let i = startingIdx; i < this.length; i++) {
   acc = callback(acc, this[i], i)
  };
  return acc;
};

// 6. Write a `myTranspose`. This function should transpose a matrix. Exp:

// ```js
// // let mtx = [
// //            [1, 2],
// //            [3, 4],
// //            [5, 6]
// //          ]
// //
// // mtx.myTranspose();
// //
// // // => [
// //        [1, 3, 5],
// //        [2, 4, 6]
// //       ]
// ```

Array.prototype.myTranspose = function(){
  let output = [[], []];
  for (let i = 0; i < this.length; i++) {
    output[0].push(this[i][0]);
    output[1].push(this[i][1]);
  }
  return output;
};

// 7. Use `myMap` to build a new array where every element is incremented by 10.

Array.prototype.myMap2 = function(callback){
  let arrOutPut = [];
  for (let i = 0; i < this.length; i++) {
    arrOutPut.push(callback(this[i]));
  }
  return arrOutPut;
};

let arr = [1,2,3,6,8];
let incrementedArr = arr.myMap2(el => {
return el + 10;
});
console.log(incrementedArr);

//Another way more longer w/ myForEach
Array.prototype.myForEach = function(callback) {
  for (let i = 0; i < this.length; i++){
    callback(this[i]);
  }
};


Array.prototype.myMap1 = function(callback) {
  let arrOutPut = [];
  this.myForEach(el => {
    arrOutPut.push(callback(el))
  })
  return arrOutPut;
};

const incremented = function(el) {
  return el + 10;
};

console.log([1,2,3].myMap1(incremented))
// 8. Use `myMap` to build a new array where every non-string element is converted to an empty string.

Array.prototype.myMap2 = function(callback){
  let arrOutPut = [];
  for (let i = 0; i < this.length; i++) {
    arrOutPut.push(callback(this[i]));
  }
  return arrOutPut;
};

let arr = [1,2,3,6,8];
let toEmptyStr = arr.myMap2(el => {
return el.toString() el.toString() ;
});
console.log(toEmptyStr);

// 9. Use `myFilter` to get only the even elements in an array.

Array.prototype.myFilter = function(callback) {
let arrOutPut = [];
 for (let i = 0; i < this.length; i++) {
   let result = callback(this[i]);
   if (result) {
    arrOutPut.push(this[i]);
   }
 }
 return arrOutPut;
}

const evenNum = function(num){
  return num % 2 === 0;
};

console.log(evenNum(7));
console.log([6,5,3,2,8,9].myFilter(evenNum));

// 10. Use `myEvery` to check if all elements in the array are the same.

Array.prototype.myEvery = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i])) {
      return false;
    }
  }
  return true;
};

const evenNum = function(num){
  return num % 2 === 0;
};

console.log(evenNum(4));
console.log([6,5,3,2,8,9].myEvery(evenNum));

// 11. Use `myReduce` to return the sum of every element in an array.

Array.prototype.myReduce = function(callback, acc) {
  let startingIdx = 0;
  if(!acc){
    acc = this[0];
    startingIdx++
  };
  for (let i = startingIdx; i < this.length; i++) {
   acc = callback(acc, this[i], i)
  };
  return acc;
};

let arr = [15,3,21,3,8];
console.log(arr.myReduce((sum, el) => { return sum + el;
 }));

// 12. Use `myMap` to build a new array that doubles each element. Then chain `myReduce` to find the product of all the elements.
Array.prototype.myMap2 = function(callback){
  let arrOutPut = [];
  for (let i = 0; i < this.length; i++) {
    arrOutPut.push(callback(this[i]));
  }
  return arrOutPut;
};

Array.prototype.myReduce = function(callback, acc) {
  let startingIdx = 0;
  if(!acc){
    acc = this[0];
    startingIdx++
  };
  for (let i = startingIdx; i < this.length; i++) {
   acc = callback(acc, this[i], i)
  };
  return acc;
};

let arr = [5,3,2,3];
let doubleProduct = arr.myMap2((el) => { return el * 2;
}).myReduce((acc, num) => {
return acc * num;
});
console.log(doubleProduct);

// 13. Use `myReduce` to find the largest number in an array.
Array.prototype.myReduce = function(callback, acc) {
  let startingIdx = 0;
  if(!acc){
    acc = this[0];
    startingIdx++
  };
  for (let i = startingIdx; i < this.length; i++) {
   acc = callback(acc, this[i], i)
  };
  return acc;
};

let arr = [15,3,21,3,8];

let largestNum =
arr.myReduce((acc, el) => {
if(acc > el){
  return acc;
}else if(acc < el){
  return el;
};
});

// 14. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.
// Use `myFilter` to return a new array of every element of arr that can be evenly divided by divisor.


Array.prototype.myFilter = function(callback) {
let arrOutPut = [];
 for (let i = 0; i < this.length; i++) {
   let result = callback(this[i]);
   if (result) {
    arrOutPut.push(this[i]);
   }
 }
 return arrOutPut;
}

let arr = [1,2,3,4,5,6,7,8,9];

const elementDivisibleBy = (divisor, arr) => {
  let divided = arr.myFilter(el => typeof el === 'number' && !(el % divisor));
  return divided;
};

console.log(elementDivisibleBy(3, arr));


// 14. Write a `myJoin` function.
Array.prototype.myJoin = function (callback) {
  let joined = "";
  for (let i = 0; i < this.length - 1; i++) {
    if (this[i] !== undefined && this[i] !== null) {
      joined += `${this[i]}${callback}`;
    }
  }

  return (joined += `${this[this.length - 1]}`);
};

let arr = [1,2,3,4,5,6,7,8,9,0];
let myJoined = arr.myJoin('');
console.log(arr, myJoined);

// 15. Write a `mySlice` function.
String.prototype.mySlice =  function (pieceStar, pieceEnd){
  let sliced = "";
  let limit = pieceEnd || this.length;
  // pieceEnd = this.length;
  for (let i = pieceStar; i < limit; i++) {
    // if(this[i] = sliced[i]) {
     sliced += this[i];
  }
  return sliced;
};
let str = 'PursuitFellows';
let mySliced = str.mySlice(3, 10);
console.log(str, mySliced);

// 16. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.
// Use reduce.
Array.prototype.myReduce = function(callback, acc) {
  let startingIdx = 0;
  if(!acc){
    acc = this[0];
    startingIdx++
  };
  for (let i = startingIdx; i < this.length; i++) {
   acc = callback(acc, this[i], i)
  };
  return acc;
};

const countZeroes = function(arr){
  return arr.myReduce((acc, el) => {
  if (el === 0) {
    acc++;
  }
  return acc;
},0);
}
console.log(countZeroes([1,0,3,5,6,0,2,5,0,0,0,0]));
//whit myReduces the output is one more 0 = 7 but there are 6.
//but if I used reduce method predetermined is 6 (this is correct.)
const countZeroes = function(arr){
  return arr.reduce((acc, el) => {
  if (el === 0) {
    acc++;
  }
  return acc ;
},0);
}
console.log(countZeroes([1,0,3,5,6,0,2,5,0,0,0,0]));
//Why is this happening???

// 17. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by it's index.
Array.prototype.myMap2 = function(callback){
  let arrOutPut = [];
  for (let i = 0; i < this.length; i++) {
    arrOutPut.push(callback(this[i]));
  }
  return arrOutPut;
};


const numberTimes = function(arr){
  return arr.myMap2(el => {
    return el * arr.indexOf(el)
  });
}

console.log(numberTimes([1,2,3,4,5]))


// Bonus: Write a `myFlatten`. This should take a multi-dimensional array and return it as one array.
// ```js
// let arr = [1, 2, [3, 4, 5, [6, 7, 8]]]
//  arr.myFlatten();
//  // => [1, 2, 3, 4, 5, 6, 7, 8]
// ```
