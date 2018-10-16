/*
//Quesion 1

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}
let arr = ["apple", "orange","banana","pear"];
arr.myForEach(el => {
  console.log(el);
})

//Question 2

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

Array.prototype.myMap = function (callback) {
  let output = [];
  this.myForEach(el => {
    output.push(callback(el));
  })
  return output;
}

let arr = [1,3,4,7];
console.log(arr.myMap(el => {
  return el * 2;
})
)

//Question 3

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

Array.prototype.myFilter = function (callback) {
  let output = [];
  this.myForEach(el => {
    if (callback(el)) {
      output.push(el);
    }
  });
  return output;
}

let arr = [1, 2, 3, 4, 5];
console.log(arr.myFilter(el => {
  return el % 2 === 0;
})
)

//Question 4

Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) === false) {
      return false;
    }
  }
  return true;
}

let arr = [4, 5, 6];
let result = arr.myEvery(el => {
   return el % 2 === 0;
});
console.log(result);

//Question 5

Array.prototype.myReduce = function (callback,acc) {
    let startingInx = 0;
    if (!acc) {
      acc = this[0];
      startingInx++;
    }
    for (let i = startingInx; i < this.length; i++) {
        acc = callback(acc,this[i]);
    }
  }
  return acc;
};

//Question 6

function myTranspose(mtx) {
  let grid = [];
  for (let i = 0; i < mtx[0].length; i++) {
      grid[i] = [];
    for (let j = 0; j < mtx.length; j++) {
      grid[i][j] = mtx[j][i];
    }
  }
  return grid;
}

let mtx = [[1,2,3],[4,5,6]];
console.log(myTranspose(mtx));
// [1,4,7]
// [2,5,8]
// [3,6,9]

//Question 7

Array.prototype.myMap = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i]));
  }
  return arr;
}

let arr = [3,4,7];
console.log(arr.myMap(el => {
  return el + 10;
})
)

//Question 8

Array.prototype.myMap = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i]));
  }
  return arr;
}

let arr = [3,6,8,"NYC","Chicago"];
console.log(arr.myMap(el => {

}))

//Question 9

Array.prototype.myFilter = function (callback) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      output.push(this[i]);
    }
  };
  return output;
}

let arr = [1,2,3,4,5];
let evenNum = arr.myFilter(el => {
  return el % 2 === 0;
});
console.log(evenNum);

//Question 10

Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) === false) {
      return false;
    }
  }
  return true;
}

let arr = [4, 4, "a"];
let result = arr.myEvery(el => {
   return el === arr[0];
});
console.log(result);

//Question 11

Array.prototype.myReduce = function (callback,acc) {
    let startingInx = 0;
    if (!acc) {
      acc = this[0];
      startingInx++;
    }
    for (let i = startingInx; i < this.length; i++) {
        acc = callback(acc,this[i]);
    }
  }
  return acc;
};

let arr = [-3, -2, -1];
let sum = arr.myReduce((acc,currentEl) => {
    return acc + currentEl;
  }
);
console.log(sum);

//Question 12

Array.prototype.myMap = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i]));
  }
  return arr;
}

Array.prototype.myReduce = function (callback,acc) {
    let startingInx = 0;
    if (!acc) {
      acc = this[0];
      startingInx++;
    }
    for (let i = startingInx; i < this.length; i++) {
        acc = callback(acc,this[i]);
    }
  return acc;
}

let arr = [-3,-4,2];
let doubleArr = arr.myMap(el => {
  return el * 2;
})
console.log(doubleArr);

let result = arr.myMap(el => el * 2).myReduce((product,acc) => product * acc);
console.log(result);

//Question 13

Array.prototype.myReduce = function (callback,acc) {
    let startingInx = 0;
    if (!acc) {
      acc = this[0];
      startingInx++;
    }
    for (let i = startingInx; i < this.length; i++) {
        acc = callback(acc,this[i]);
    }
  return acc;
}

let arr = [1,5,10,8,3];
let largest = arr.myReduce((acc,el) => acc > el ? acc : el );
console.log(largest);


//Question 14

Array.prototype.myFilter = function (callback) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      output.push(this[i]);
    }
  };
  return output;
}

function elementDivisibleBy (divisor,arr) {
  return arr.myFilter(el => el % divisor === 0 );
}

console.log(elementDivisibleBy(2,[3,4,6,9,12,10]));

*/
//Question 15

Array.prototype.myJoin = ((str) => {
  for (let i = 0; i < this.length; i++) {
    this[i] += str;
  }
  return this;
});

let arr = ["hey", "dude", "sup"];
let joinedArr = arr.myJoin(" ");
console.log(joinedArr);


//Question 16

// Array.prototype.mySlice = function (start,end) {
//   let slicedArr = [];
//   if (end) {
//     for (let i = start; i < end; i++) {
//       slicedArr.push(this[i]);
//     }
//   } else {
//     for (let i = start; i < this.length; i++) {
//       slicedArr.push(this[i]);
//     }
//   }
//   return slicedArr;
// }
//
// let arr = [1,3,4,5,6];
// console.log(arr.mySlice(2));

//Question 17

// function countZeros (arr) {
//   return arr.reduce((acc,el) => {
//     if (el === 0) {
//       acc ++;
//     }
//     return acc;
//   },0);
// }
//
// let arr = [1,0,10,8,3];
// console.log(countZeros(arr));

//Question 18

// let arr = [2,4,5];
//
// let numberTimeIdx = arr.map((el) => {
//   return el * arr.indexOf(el);
// });
// console.log(numberTimeIdx);
