// 1)
Array.prototype.myForEach = function (callbackFunction) {
  for (let i = 0; i < this.length; i++) {
    callbackFunction(this[i]);
  }
};

// let arr = [1, 2, 3];

// arr.myForEach(function (element) {
//   console.log(element);
// });

// 2)

Array.prototype.myMap = function (callbackFunction) {
  let output = [];
  this.myForEach((element) => {
    output.push(callbackFunction(element));
  });
  return output;
};

// let arr = [2, 3, 5, 10];

// let multiplyBy2 = arr.myMap(function (element) {
//   return element * 2;
// });

// console.log(multiplyBy2);

// 3)

Array.prototype.myFilter = function (callbackFunction) {
  let output = [];
  this.myForEach(function (element) {
    if (callbackFunction(element)) {
      output.push(element);
    }
  });

  return output;
};

// let arr = [1, 2, 3, 4, 5];
// let isEven = arr.myFilter(function (element) {
//   if (element % 2 === 0) {
//     return element;
//   }
// });
//
// console.log(isEven);

// 4)

Array.prototype.myEvery = function (callbackFunction) {
  let firstOutput;
  let finalOutput;
  this.myForEach(function (element) {
    //saving evaluation of callbackfn at an element into output
    let output = callbackFunction(element);
    /*if evaluation of that element is false get out of callbackfn and
    return that as the valuation of the method which is finalOutput*/
    if (output === false) {
      return finalOutput = false;
    }
  });

  if (finalOutput === false) {
    return false;
  } else {
    return true;
  }
};

// let arr = [11, 3, 1];
//
// let checkOddEven = arr.myEvery(function (element) {
//   return element % 2 === 1;
// });
//
// console.log(checkOddEven);

// 5)

Array.prototype.myReduce = function (callbackFunction, initValue) {
  let startingIndex = 0;
  let totalAcc;

  if (initValue !== undefined) {
    startingIndex = 0;

  } else {
    initValue = this[0];
    startingIndex++;
  };

  for (let i = startingIndex; i < this.length; i++) {
    // console.log(this[i]);
    initValue = callbackFunction(initValue, this[i]);
    // console.log(initValue);
  }

  return initValue;
};

let arr = [1, 2, 3, 4, 5];

let sum = arr.myReduce(function (acc, element) {
  return  acc + element;
}, 15);

console.log(sum)

// 6)

Array.prototype.myTranspose = function (callbackFunction) {
  let grid = [];
  for (let i = 0; i < this[0].length; i++) {
    grid[i] = [];

    for (let j = 0; j < this.length; j++) {
      grid[i][j] = this[j][i];
      console.log("hi i " + this[i] + " hi j " + this[j]);
      console.log("boo i " + grid[i] + " yo j " + grid[j]);
    }
  }
  return grid;
};

// let mtx = [[1, 2], [3, 4], [5, 6]];
//
// let newMtx = mtx.myTranspose(function (element) {
//   return ;
// });
//
// console.log(newMtx);

// 7)

// let arr = [1, 2, 3, 4, 5];
//
// let incrementBy10 = arr.myMap(function (element) {
//   return element + 10;
// })
//
// console.log(incrementBy10);

// 8)

// let arr = [1, 'hi', 2, 3, 'bye', true];
//
// let emptyStringer = arr.myMap(function (element) {
//   if (typeof element !== 'string') {
//     return '';
//   } else {
//     return element;
//   }
// });
//
// console.log(emptyStringer);

// 9)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//
// let evenEl = arr.myFilter(element => element % 2 === 0);
//
// console.log(evenEl);

// 10)

// let arr = [20, 21, 24];
//
// let allSame = arr.myEvery((el) => {
//   return el % 2 === 0;
//
// });
//
// console.log(allSame);

// 11)

// let arr = [1, 2, 30, 4];
//
// let sum = arr.reduce((acc, el) => acc + el);
//
// console.log(sum);

// 12)

// let arr = [1, 2, 3, 4];
//
// let doubleProduct = arr
//   .myMap(el => el * 2)
//   .reduce((acc, el) => acc * el);
//
// console.log(doubleProduct);

// 13)

// let arr = [1, 2, 3, 4];
//
// let largestNum = arr.reduce((acc, el) => {
//   if (acc > el) {
//     return acc;
//   } else {
//     return el;
//   }
// });
//
// console.log(largestNum);

// 14)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// function elementDivisibleBy (divisor, arr) {
//   let newArr = arr.myFilter(function (element) {
//     if (element % divisor === 0) {
//       return element;
//     }
//   });
//   return newArr;
// }
//
// console.log(elementDivisibleBy(3, arr));

// 15)

Array.prototype.myJoin = function (separator) {
  let output = '';
  if (separator === undefined) {
    separator = ','
  }
  this.forEach(function (element) {
    return output = output + element + separator;
  });
  return output = output.slice(0, -1);
};

// let arr = ['apple', 'orange', 'banana'];
//
// let resultJoin = arr.myJoin(" ");
//
// console.log(resultJoin);

// 16)

Array.prototype.mySlice = function (start, end) {
  let output = [];
  if (start === undefined) {
    start = this[0];
  }

  if (end === undefined) {
    end = this[this.length - 1];
  } else {
    end = end - 1;
  };

  this.forEach(function (element, index) {
    if (start <= index && end >= index) {
      return output.push(element);
    }
  });

  return output;
};

// let arr = ['apple', 'orange', 'banana'];
//
// let resultSlice = arr.mySlice(2, 3);
//
// console.log(resultSlice);

//17)

function countZeroes (arr) {
  let counter = arr.reduce((acc, element) => {
    if (element === 0 ) {
      return acc + 1;
    } else {
      return acc + 0;
    }
  }, 0);
  return counter;
};

// let arr = [0, 20, 0, 40, 5, 60, 0, 80, 9, 0];
// console.log(countZeroes(arr));

// 18)

function numberTimesIdx(arr) {
  let multIdx = arr.map(function (element, index) {
    return element * index;
  });

  return multIdx;
};

// let arr = [1, 2, 3, 4, 5];

// console.log(numberTimesIdx(arr));


// Bonus)

// Array.prototype.myFlatten = function (callbackFunction) {
//   let output = [];
//   this.forEach((element) => {
//
//   });
//   return output;
// };

// let arr = [1, 2, [3, 4, 5, [6, 7, 8]]];

// let arr = [[1,2],[3,4]];
//
// let inOrder = arr.map(function (element) {
//   return element.join(',');
// }).join(',');
//
// console.log(inOrder);
