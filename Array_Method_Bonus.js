console.log(' ');
console.log('Array Prototype');
console.log(' ');

Array.prototype.sayHi = function () {
  console.log('Hi');
};

let myArr = [1, 2, 3];
myArr.sayHi(); //Logs "Hi" to the console

console.log(' ');
console.log('Question Bonus 1');
console.log(' ');

//1. Using Array.prototype add a new method `myForEach` that mimics the behavior of the built in `forEach`.
let stuckArray = [1, 7, 2, 5, 3, 4];

Array.prototype.myForEach = function (array) {
  for (let elem of array) {
    console.log(elem);
  }
};

myArr.myForEach(stuckArray);

console.log(' ');
console.log('Question Bonus 2');
console.log(' ');

//2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.

Array.prototype.myMap = function (array) {
  let total = [];
  for (i = 0; i < array.length; i++) {
    total.push(array[i] * 2);
  }

  return total;
};

console.log(myArr.myMap(stuckArray));

console.log(' ');
console.log('Question Bonus 3');
console.log(' ');

//3. Write a `myFilter` that behaves the same as `filter`.

Array.prototype.myFilter = function (array) {
  let filteredArray = [];
  for (let value of array) {
    if (value % 2 === 0) {
      filteredArray.push(value);
    }
  }

  return filteredArray;
};

console.log(myArr.myFilter(stuckArray));

console.log(' ');
console.log('Question Bonus 4');
console.log(' ');

//4. Write a `myEvery` that behaves the same as `every`.

Array.prototype.myEvery = function (array) {
  for (let value of array) {
    if (value > 2) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(myArr.myEvery(stuckArray));

console.log(' ');
console.log('Question Bonus 5');
console.log(' ');

//5. Write a `myReduce`. It should use the first element in the array if none is given.

Array.prototype.myReduce = function (array, initValue) {
  let currentSum = 0;
  if (initValue === undefined) {
    for (let value of array) {
      currentSum += value;
    }
  } else {
    currentSum += initValue;
    for (let value of array) {
      currentSum += value;
    }
  }

  return currentSum;
};

console.log(myArr.myReduce(stuckArray));
console.log(myArr.myReduce(stuckArray, 5));

console.log(' ');
console.log('Question Bonus 6');
console.log(' ');

// 6. Write a `myJoin` function.
let oldString = ['Word', 'Bird', 'The', 'Bababa', 'Uuoh Ma', 'Mow Mow'];

Array.prototype.myJoin = function (array, addedText) {
  let newString = '';

  if (addedText === undefined) {
    for (let value of array) {
      newString += value + ' ';
    }
  } else {
    for (let value of array) {
      newString += value + ' ' + addedText + ' ';
    }
  }

  return newString;
};

console.log(oldString.myJoin(oldString, 'STOP'));

console.log(' ');
console.log('Question Bonus 7');
console.log(' ');

//7. Write a `mySlice` function.

let thisIsArray = [1, 5, 3, 8, 6, 3];
Array.prototype.mySlice = function (array, cutLocation) {
  let newArray = [];
  for (let i = cutLocation; i < array.length; i++) {
    newArray.push(array[i]);
  };

  return newArray;
};

console.log(thisIsArray.mySlice(thisIsArray, 3));

console.log(' ');
console.log('Question Bonus 8');
console.log(' ');

//8. Write a `myTranspose`. This function should transpose a matrix.
let mtx = [
            [1, 2],
            [3, 4],
            [5, 6]
          ];

Array.prototype.myTranspose = function (array) {
  let transposedArray = [];
  transposedArray.push([array[0][0]]);
  transposedArray.push([array[0][1]]);

  for (let i = 1; i < array.length; i++) {
    transposedArray[0].push(array[i][0]);
  };

  for (let j = 1; j < array.length; j++) {
    transposedArray[1].push(array[j][1]);
  };

  return transposedArray;
};

console.log(mtx.myTranspose(mtx));

//This next line helps me visualize the answer
//newNewArray.push([mtx[0][0], mtx[1][0], mtx[2][0]], [mtx[0][1], mtx[1][1], mtx[2][1]]);

//Checking lengths of certain matrixs
// console.log(mtx[0].length);

console.log(' ');
console.log('Question Bonus 9');
console.log(' ');

//9. Write a `myFlatten`. This should take a multi-dimensional array and return it as one array.

let arr = [1, 2, [3, 4, 5, [6, 7, 8]]];
let matrixHolder = 0;
let matrixHolder2 = 0;
let flattenNumbers = [];


Array.prototype.myFlatten = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (i === undefined || typeof array[i] === typeof []) {
      console.log('found 1st inner array');
      matrixHolder = i;
      break;
    } else {
      flattenNumbers.push(array[i]);
      // console.log(array[i]);
    }
  }

  for (let j = 0; j < array[matrixHolder].length; j++) {
    if (j === undefined || typeof array[matrixHolder][j] === typeof []) {
      console.log('found 2nd inner array');
      matrixHolder2 = j;
      break;
    } else {
      flattenNumbers.push(array[matrixHolder][j]);
      // console.log(array[matrixHolder][j]);
    }
  }

  for (let k = 0; k < array[matrixHolder][matrixHolder2].length; k++) {
    if (k === undefined || typeof array[matrixHolder][matrixHolder2][k] === typeof []) {
      console.log('found 3rd inner array');
      matrixHolder = k;
      break;
    } else {
      flattenNumbers.push(array[matrixHolder][matrixHolder2][k]);
      // console.log(array[matrixHolder][matrixHolder2][k]);
    }
  }

  return flattenNumbers;
};

console.log(arr.myFlatten(arr));
