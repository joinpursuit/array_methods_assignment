var arr = ["a", "b", "c"];

// arr.push("d"); // MODIFIES original array
console.log(arr.push("d")); // 5 //push "d" again! // 4
console.log(arr); //[ 'a', 'b', 'c', 'd', 'd' ]

// arr.pop(); // MODIFIES original array
console.log(arr.pop()); // d .. produces what you popped
console.log(arr); // [ 'a', 'b', 'c' ]
//
var arr2 = ["g", "q"]; //  NOT MODIFY orig arrays
console.log(arr.concat(arr2)); // [ 'a', 'b', 'c', 'g', 'q' ]
console.log(arr); // [ 'a', 'b', 'c' ]
console.log(arr2); // [ 'g', 'q' ]
//
// arr.join(""); // NOT MODIFY
console.log(arr.join("")); // abc
console.log(arr.join("!")); // a!b!c
console.log(arr); // [ 'a', 'b', 'c' ]
//
// arr.reverse(); // MODIFIES
console.log(arr.reverse()); // [ 'c', 'b', 'a' ]
console.log(arr); // [ 'c', 'b', 'a' ]

console.log(arr.shift()); // c //remove 1st element in the array and retrun that element
console.log(arr); // [ 'b', 'a' ]

console.log(arr.unshift("p")); // 3 // adds new elemnt to beginning of array and returns the length of the modified array;
console.log(arr); // [ 'p', 'b', 'a' ]

console.log(arr.slice(1, 2)); // [ 'b' ] // two arguments: returns the elements from the beginning index to the n-1 index.
console.log(arr.slice(1, 3)); // [ 'b', 'a' ] // index 1: b to index 3-1 = 2: a
console.log(arr); // [ 'p', 'b', 'a' ] // does not affect original array

// first; push some more letters:
console.log(arr); // [ 'p', 'b', 'a' ]
console.log(arr.push("i", "f")); // 5
console.log(arr); // [ 'p', 'b', 'a', 'i', 'f' ]
console.log(arr.push("r")); // 6
console.log(arr.push("s")); // 7
console.log(arr); // [ 'p', 'b', 'a', 'i', 'f', 'r', 's' ]
console.log(arr.sort()); // [ 'a', 'b', 'f', 'i', 'p', 'r', 's' ]
console.log(arr); // [ 'a', 'b', 'f', 'i', 'p', 'r', 's' ]

console.log(arr.splice(2, 2, "JS Bananas")); // [ 'f', 'i' ] // MODS OLD ARRAY unlike slice //1st arg: starting index; 2nd arg: no. of item (from the starting point) to remove; 3rd arg: any items want to add.; returns items that were removed;
console.log(arr); // [ 'a', 'b', 'JS Bananas', 'p', 'r', 's' ]

// XAVIER NOTES
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function addTwo(num){
//   return num + 2
// }

// arr.forEach((elem, index) => {
//   console.log(addTwo(elem))
// })

arr.forEach((elem, index) => {
  arr[index] = arr[index] * elem;
});

let mapExmaple = arr.map((elem, index) => {});

let filterExample = arr.filter((elem, index) => {
  if (elem % 2 === 0) {
    return elem;
  }
});

//----

Array.prototype.myForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

function addTwo(num) {
  return num + 2;
}

function timesFive(num) {
  return num * 5;
}

function whatIsElem(elem) {
  return "This element is " + elem;
}

[1, 2, 3, 4, 45, 6, 7].myForEach(elem => {
  // console.log(addTwo(elem))
  // console.log(timesFive(elem))
  // console.log(whatIsElem(elem))
});

Array.prototype.myMap = function(callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callback(this[i]));
  }
  return newArr;
};

let mapExample = [2, 3, 4, 5, 7].myMap(elem => {
  return addTwo(elem);
});

console.log(mapExample);

Array.prototype.myMap = function(callback) {
  let newarr = [];
  this.myForEach(el => {
    newarr.push(callback(el));
  });
  return newarr;
};

Array.prototype.myFilter = function(callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      newArray.push(callback(this[i]));
    }
  }
  return newArray;
};

let filterExample = [1, 2, 3, 4, 5, 6].myFilter(elem => {
  if (elem % 2 === 0) {
    return elem;
  }
});

console.log(filterExample);

nums = [1, 2, 3, 4];
newArr = [...nums, 700];
// that will add 700 to end of list

// 2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.

// Array.prototype.myMap = function (callback){
//   let result = [];
//   for(let i = 0; i< this.length; i++) {
//     result.push(callback(this[i]));
//   }
// return result;
// }
//
// // test:
// let mapper = [1,2,3].myMap((el) => {
//   return el * 2
// })
//
// console.log(mapper);

// // // console.log([1,2,3].myMap((el) => {
// // //   return el * 2
// // // });
//
//
// // // [1,2,3].myMap(el => {
// // //   return el * 2;
// // // })
// // // console.log([1,2,3].myMap(el));
// // //
// // // let double = [1,2,3].myMap((el) => {
// // //   return el*2
// // //   })
// // //   console.log(double)
// // // }

//------------------------------------------------

// WARM UP!
//Write a function that determines if a string is a palindrome without using the function reverse. Palindrome is a word that can be spelled forwards and backwards. ratstar

// Implement myReduce in multiple ways:

Array.prototype.myReduce = function(callback, acc) {
  let startingIdx = 0;
  if (!acc) {
    acc = this[0];
    startingIdx++;
  }
  for (let i = startingIdx; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }
  return acc;
};

let arr = [1, 2, 3, 4, 5];

let reducer = arr.myReduce((acc, currEl) => acc + currEl, 5);

console.log(reducer);

// Xavier's version of Reduce; need to acct for !optional, so starting index = this[0+1]

// 5. Write a `myReduce`. It should use the first element in the array if none is given.

Array.prototype.myReduce = function(callback, optional) {
  let total = optional || this[0];

  this.forEach(elem => {
    total = callback(total, elem);
  });
  return total;
};

//variables:
let starter = 20;
let arr = [1, 2, 3, 4, 5];
const addThis = (num1, num2) => num1 + num2;

//invoking callback (w/ variables):
let sum = arr.myReduce(starter, addThis);

console.log(sum);

//------------------------------------------

// 13. Use `myReduce` to find the largest number in an array.

// the prototyped myReduce:
Array.prototype.myReduce = function(callback, acc) {
  let startingIdx = 0;
  if (!acc) {
    acc = this[0];
    startingIdx++;
  }
  for (let i = startingIdx; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }
  return acc;
};

// the test:
let arr = [1, 2, 5, 3, 40];

let result = arr.myReduce((acc, currEl) => {
  if (acc > currEl) {
    return acc;
  } else {
    return currEl;
  }
}, 10);

console.log(result);

//-----------------------------------------

//mine so far:
// 16. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.
// Use reduce.

const countZeroes = (arr) => {

  for (var i = 0; i < arr.length; i++) {

    if (arr[i] === 0) {
      let count = arr.reduce(occurence, elemZero) => `${elemZero}: ${occurence}`

    return count
    }

  }

return ...
}


let arr16 = [0,0,0,4]
console.log(countZeroes(arr16));


//-----------------
