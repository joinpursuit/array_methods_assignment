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

Array.prototype.myReduce = function (callback,currentEl) {
  let acc = (currentEl === undefined) ? undefined :currentEl;
  for (let i = 0; i < this.length; i++) {
    if (acc !== undefined) {
      acc = callback.call(undefined,acc,this[i]);
    }
  } else {
    acc = this[i];
  }
  return acc;
};

let arr = [-3, -2, -1];
let largestNum = arr.myReduce((acc,currentEl) => {
  if (acc > currentEl) {
    return acc;
  } else {
    return currentEl;
  }
});
console.log(largestNum);

//Question 6


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
*/
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
