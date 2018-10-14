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

// Array.prototype.myMap = function(callback) {
//   [this].myForEach(el => {
//     callback(el);
//   });
// };
//
// let mapped = [2, 4, 6].myMap(el => {
//   console.log(el*2);
// })

Array.prototype.myMap = function(callback) {
  let mappedArr = [];
  for (let i = 0; i < this.length; i++) {
    mappedArr.push(callback(this[i]));
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
    if (callback(this[i], i, this)) {
      myFilterArr.push(this[i]);
    }
  }
  return myFilterArr;
}

let odds = [1, 2, 3, 4, 5].myFilter(el => {
  if (el % 2) {
    return el;
  }
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
//     if (callback(this[i], i, this)) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }



function greaterThan10(num) {
  return num > 10;
}

let anArr = [1, 12, 13, 14];

// console.log(anArr.myEvery(greaterThan10));


// Question 5:

Array.prototype.myReduce = function(callback, startVal = 1) {

}

// Question 6:

Array.prototype.myTranspose = function(callback) {

}

// Question 7:

// Question 8:

// Question 9:

// Question 10:

// Question 11:

// Question 12:

// Question 13:

// Question 14:

// Question 15:

// Question 16:

// Question 17:
