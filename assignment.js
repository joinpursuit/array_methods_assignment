// Question 1:

Array.prototype.myForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  };
};

let arr = [];

[1, 2, 3, 4].myForEach((el) => {
  // console.log(el * 2);
});

// Question 2:

Array.prototype.myMap = function(callback) {
  let resultArr = [];
  [this].myForEach((el) => {
    resultArr.push(callback(this[el]));
  });
};

let mapped = [2, 4, 6].myMap(el => {
  // console.log(el);
})

Array.prototype.myMap = function(callback) {
  let mappedArr = [];
  for (let i = 0; i < this.length; i++) {
    mappedArr.push(callback(this[i], i));
  };
  return mappedArr;
};

let mapped = [7, 6, 5, 4].myMap(el => {
  return el*2;
})

// console.log(mapped);


// Question 3:

// Array.prototype.myFilter = function(callback) {
//   let filteredArr = [];
//   [this].myForEach(el => {
//     if (callback(this[el])) {
//       filteredArr.push(this[el]);
//     }]]
//   })
//   return filteredArr;
// }

Array.prototype.myFilter = function(callback) {
  let myFilterArr = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i)) {
      myFilterArr.push(this[i]);
    }
  }
  return myFilterArr;
}

let odds = [1, 2, 3, 4, 5].myFilter(el => {
  return el % 2;
  // if (el % 2) {
  //   return el;
  // }
})
// console.log(odds);



// Question 4:

// Array.prototype.myEvery = function(callback) {
//   [this].myForEach(el => {
//     if (callback(this[el], el, this)) {
//       return true;
//     } else {
//       return false;
//     }
//   })
// }
//


// Array.prototype.myEvery = function(callback) {
//   for (let i = 0; i < this.length; i++) {
//     this = true;
//     return (callback(this[i], i)) ? false : true;
//     // if (callback(this[i])) {
//     //   return true;
//     // }
//   }
// }




//

// Question 5:

Array.prototype.myReduce = function(callback, startVal) {
  let startIdx = 0;
  if (!startVal) {
    startVal = this[0];
    startIdx++;
  }
  for (let i = startIdx; i < this.length; i++) {
    startVal = callback(startVal, this[i]);
  }
  return startVal;
}

let reduced = [1, 2, 3, 4].myReduce((el, currEl) => {
  return el + currEl;
})
// console.log(reduced);

// Question 6:

Array.prototype.myTranspose = function(callback) {

}

// Question 7:

let thisMap = [1, 2, 3, 4, 5].myMap(el => {
  return el + 10;
})
// console.log(thisMap);

// Question 8:
let randArr = [12, 'cat', 'dog', 34, 'ham', '45'];

// let emptyString = randArr.myMap(el => {
//   if (typeof el !== 'string') {
//     return String(el);
//   }
// })
// console.log(emptyString);



// Question 9:

let evenFilter = [11, 12, 13, 14, 15].myFilter(el => {
  if (el % 2 === 0) {
    return el;
  }
})

// console.log(evenFilter);

// Question 10:
const allTen = (ten) => {
 ten = 10;
}
let tenArr = [10, 10, 10, 10];

// console.log(tenArr.myEvery(allTen))


// Question 11:

let sum = [23, 4, 25, 8, 9].myReduce((el, currEl) => {
  return el + currEl;
})

// console.log(sum);

// Question 12:
let blehArr = [3, 4, 55, 44, 3, 2];

let doubleArr = blehArr.myMap(el => {
  return el * 2;
})

// console.log(doubleArr)


// Question 13:

const doubledArr = (arr) => {
  let doubled = arr.myMap(el => {
  return el * 2;
  })
  return doubled;
}
// console.log(doubledArr([2, 3, 4, 5]))

// Question 14:

const elementDivisibleBy = (divisor, arr) => {
  let divisibleBy = arr.myFilter((el) => {
    return el % divisor === 0
  })
  return divisibleBy;
}
// console.log(elementDivisibleBy(4, [4, 12, 11, 33, 2]));

// Question 14 part. 2:
// myJoin function

// Question 15:
//mySlice function

// Question 16:

const countZeroes = (arr) => {
  let tempArr = [0, 1, 12, 0, 3, 0, 0, 4, 5];
  let getZeros = arr.reduce((acc, currEl) => {
    let allZeros = [];
    if (acc === 0) {
      allZeros.push(acc.toString());
    }
    return allZeros;
  })
  // console.log(allZeros);
}
// console.log(countZeroes([0, 1, 12, 0, 3, 0, 0, 4, 5]));

// Question 17:

const numberTimesIdx = (arr) => {
  let timesIndex = arr.myMap((el, i) => {
    return el * i;
  })
  return timesIndex;
}
// console.log(numberTimesIdx([3, 4, 5, 6]));
