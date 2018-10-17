// # Exercises

// __NOTE:__ DO NOT USE THE BUILT IN METHODS WHEN ASKED TO MAKE THEM!

// 1. Using Array.prototype add a new method `myForEach` that mimics the behaivor of the built in `forEach`.
Array.prototype.myForEach = function(callback) {

 for(let i = 0; i < this.length; i++) {
  callback(this[i])
   }
};

// [1,2,3].myForEach((el) => {
//  console.log(el)
// })

// 2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.
Array.prototype.myMap = function(callback) {
  let answer = [];
  this.myForEach((el) => {
    answer.push(callback(el))
  })
  return answer;
};



// 3. Write a 'myFilter` that behave's the same as `filter`.

Array.prototype.myFilter = function(callback) {
  let answer = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      answer.push(this[i])
    }
  }
  return answer;
}

// 4. Write a `myEvery`.

Array.prototype.myEvery = function(callback) {
  let result = true;
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i])) {
      result = false;
    }
  }
  return result;
}
let arr2 = [1,3,5];

arr2.myEvery( el => {
  return el % 2 !== 0
})

// 5. Write a `myReduce`. It should use the first element in the array if none is given.



Array.prototype.myReduce = function (cb, acc) {
  let startidx = 0
  if (!acc) {
    acc = this[0];
    startidx++
  }
  for (let i = startidx; i < this.length; i++) {
    acc = cb(acc, this[i])
  }
  return acc
}

let myRedArr = [1,2,3]

myRedArr.myReduce((acc, el) =>
  acc + el, 9)






// 6. Write a `myTranspose`. This function should transpose a matrix. Exp:
// ```js
// let mtx = [
//             [1, 2],
//             [3, 4],
//             [5, 6]
//           ]
//
// mtx.myTranspose();
//
// // => [
//         [1, 3, 5],
//         [2, 4, 6]
//        ]
// ```
function myTranspose (mtx) {

let grid = [];
  for (let i = 0; i < mtx[0].length; i++) {
    grid[i] = [];
    for (let j = 0; j < mtx.length; j++) {
      grid[i][j] = mtx[j][i];
    }
  }
  return grid;
}


let  mtx = [[1,2],[3,4],[5,6]];
myTranspose(mtx)





//
// 7. Use `myMap` to build a new array where every element is incremented by 10.
let arr4 = [1, 2, 3];
let arrByTen = [];
arr4.myMap(el => {
 arrByTen.push( el += 10);
});
arrByTen;



// 8. Use `myMap` to build a new array where every non-string element is converted to an empty string.

let arr6 = [1, 2, "angie", 3];
let noStrArr = [];
arr6.myMap(el => {
 if (typeof el === "number") {
   el = "";
 }
 noStrArr.push(el);
});
noStrArr;


// 9. Use `myFilter` to get only the even elements in an array.

let arr = [1,2,3,4,5];

arr.myFilter(el => el % 2 === 0)

// 10. Use `myEvery` to check if all elements in the array are the same.

let array = [0, 0, 0];
let sameElement = array[0];
array.myEvery( el => {

return el === sameElement;
})


// 11. Use `myReduce` to return the sum of every element in an array.


let array1 = [2,4,6]

array1.myReduce((acc, el) => {
  return acc + el
});


// 12. Use `myMap` to build a new array that doubles each element. Then chain `myReduce` to find the product of all the elements.

let myArr = [1, 2, 3];

myArr.myMap((el) => {
  return ( el * 2);
}).myReduce((el, acc) => {
  return el * acc
})



// 13. Use `myReduce` to find the largest number in an array.



let thisArray = [2,9,-12,4,5];

let largest = thisArray.myReduce((acc, currentEl) => {
    if (acc > currentEl) {
        return acc;
    } else {
        return currentEl;
    }
});

largest;





// 14. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.
// Use `myFilter` to return a new array of every element of arr that can be evenly divided by divisor.





// 14. Write a `myJoin` function.

Array.prototype.myJoin = function (str) {
  let joined = "";
  for (let i = 0; i < this.length; i++) {
    if (this.length - 1 === i) {
    joined += this[i]
    } else {
    joined += this[i] + str
    }
  }
  return joined
}


// 15. Write a `mySlice` function.

Array.prototype.mySlice = function (ind1, ind2) {
  let sliced = [];
  if (!ind2) {
    ind2 = this.length
  }
  for (let i = ind1; i < ind2; i++) {
    sliced.push(this[i])
  }
  return sliced
}


// 16. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.
// Use reduce.

const countZeros = (arrNum) => {
  let zer = arrNum.reduce((acc, currentel) => {
    if (currentel === 0) {
      acc++
    }
    return acc
  }, 0)
  return zer
}
countZeros([2,0,1,4,0,0,6])



// 17. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by it's index.

const numberTimesIdx = (arrayNum) => {
  let arrTimesInd = []
  for (let i = 0; i < arrayNum.length; i++){
    arrTimesInd.push((arrayNum[i]) * i)
  }
  return arrTimesInd

}


numberTimesIdx([1,2,3,4]);



// Bonus: Write a `myFlatten`. This should take a multi-dimensional array and return it as one array.
// ```js
// let arr = [1, 2, [3, 4, 5, [6, 7, 8]]]
//   arr.myFlatten();
//   // => [1, 2, 3, 4, 5, 6, 7, 8]
// ```
