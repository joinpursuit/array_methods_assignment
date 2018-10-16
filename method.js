//1.
Array.prototype.myForEach = function (callback) {
for (let i = 0; i < this.length; i++) {
callback((this[i]), i, this);
 }
}

let arr1 = [1, 2, 3, 4, 5]
let arr2 =["A", "B", "c"]

arr2.myForEach ((el) => {

console.log(el += 10);
});



//2.

Array.prototype.myMap = function (callback) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]))
  }
  return result;
};


let result = arr1.myMap ((el) => {
 return el * 10;

});

console.log(result);

//3.
Array.prototype.myFilter = function (callback) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    if ( callback(this[i]) ) {
    result.push(this[i]);
    }
  }
  return result;
};



//4.

Array.prototype.myEvery = function (callback) {
for (let i = 0; i < this.length; i++) {
  if (!callback(this[i])) {
    return false;
  }
}
  return true;
}

// let every = arr1.myEvery ((el) => {
// return el === 5;
// });
// console.log(every);

//5.
// Array.prototype.myReduce = function (callback, def) {
// let acc = undefined;
// let begin = 0;
//   if (def === undefined) {
//     acc = this[0];
//     begin = 1;
//   } else {
//     acc = def;
//     }
//   for (let i = begin; i < this.length; i++) {
//
//   acc = callback(acc, this[i]);
//
//   }
// return acc;
// }


Array.prototype.myReduce = function (callback, def) {
  let acc = def;
  for (let i = 0; i < this.length; i++) {
    if (acc === undefined) {
      acc = this[0];
    } else {
      acc = callback(acc, this[i]);
    }
  }
  return acc;
}

// let reduce = arr1.myReduce((acc, currEl) => {
//
// return acc + currEl;
//
// });
//
// console.log(reduce);




//7.

let newArray = arr1.myMap ((el) => {
 return el + 10;

});

console.log(newArray);

//8.
let arr8 =["A",  "B", "c", 23, [1,2,3]];

let newArray1 = arr8.myMap((el) => {
 if (typeof el !== "string") {
    return el = "";

 } else {
   return el;
 }

});

console.log(newArray1);

//9.

let filter = arr1.myFilter ((el) =>{
 return el % 2 === 0;
})

console.log(filter);

//10.
let every = arr1.myEvery ((el) => {
  let firstEl = arr1[0]
if (el === arr1[0]) {
  return true;
} else {
    return false;
  }

});

console.log(every);
//11.

let reduce = arr1.myReduce((acc, currEl) => {

return acc + currEl;

});

console.log(reduce);


//12.
let doublesProduct = arr1.myMap ((el) => {
  return el * 2;
})
.myReduce((acc, currEl) =>{
  return acc * currEl;
});

console.log(doublesProduct);

//13.
let myLargest = arr1.myReduce ((acc, currEl) => {
  if (acc > currEl) {
  return acc;
  } else {
    return currEl;
    }
  });
  console.log(myLargest);
