// # Exercises
//
// 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.
//
// ```
// Input: [1,2,3,4,5]
// Output: [11,12,13,14,15]
// ```

console.log("1._______________________________________");

let arr = [1, 2, 3, 4, 5];

let plusTen = arr.map((currentElem) => {
  return currentElem + 10;
})

console.log(plusTen);


// 2. Given an array, return a new array where every non-string element is converted to an empty string.
//
// ```
// Input: ["a", 123, "b", "c", {name: "cat"}]
// Output: ["a", "", "b", "c", ""]
// ```

console.log("2._______________________________________");

let arr1 = ["hello", "goodbye", {color: "purple"}, 54, "thank you"];

let emptyString = arr1.map((currentElem) => {
  if(typeof currentElem !== "string") {
    return "";
  } else {
    return currentElem;
  }
});

console.log(emptyString);

// 3. Write a function that returns only the even elements in an array of numbers.
//
// ```
// Input: [1,2,3,4,5]
// Output: [2,4]
// ```

console.log("3._______________________________________");

let arr2 = [44, 53, 77, 68, 200, 350];

function evenNums(num) {
  return arr2.filter(num => num % 2 === 0)
}

let evenStevens = evenNums(arr2)

console.log(evenStevens);

// 4. Write a function that checks if all elements in the array are the same.
//
// ```
// Input: [1,1,1,1,1]
// Output: true
//
// Input: [1,1,1,1,2]
// Output: false
// ```

console.log("4._______________________________________");

let arr3 = [5, 5, 5, 5, 5];
let arr3b = [1, 2, 3, 4];



function theSame(arr) {
  return arr.every(el => el === arr[0])
}

console.log(theSame(arr3));
console.log(theSame(arr3b));

// 5. Write a function that returns the sum of every element in an array.
//
// ```
// Input: [1,2,3,4,5]
// Output: 15
// ```

console.log("5._______________________________________");


let arr4 = [3, 6, 9];

function adder(arr) {
  return arr.reduce((total, currentElem) => total + currentElem);
}

let sum = adder(arr4);

console.log(sum);


// 6. Write a function that finds largest number in an array.
//
// ```
// Input: [1,2,6,3,4,5]
// Output: [6]
// ```

console.log("6._______________________________________");

let arr5 = [3, 41, 65, 17, 8, 66]

function biggestNum(arr){
  return arr.reduce((acc, currentElem) => {
   if (acc > currentElem) {
    return acc;
  } else {
    return currentElem;
    }
  })
}

let theBigNumber = biggestNum(arr5);

console.log(theBigNumber);

// 7. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.
//
// ```
// Input: [1,0,0,2,0,3,0,0,0]
// Output: 6
// ```

console.log("7._______________________________________");

let arr6 = [5, 0, 4, 0, 6, 1, 1, 0, 0, 3, 0, 0];

function countZeroes(arr) {
  return arr.filter((currentElem) => {
  if(currentElem === 0){
    return true;
    }
  }).length;
};


let howManyZeroes = countZeroes(arr6);


console.log(howManyZeroes);

// 8. Write a function that doubles every element in an array.
//
// ```
// Input: [1,2,3,4]
// Output: [2,4,6,8]
// ```
//

console.log("8._______________________________________");

let arr7 = [1, 2, 3, 4, 5];

function twiceTheNum(arr) {
  return arr.map((currentElem) => {
    return currentElem * 2;
  });
}

let doubled = twiceTheNum(arr7);

console.log(doubled);


// 9. Write a function that finds the sum of every element in an array doubled
//
// ```
// Input: [1,2,3,4]
// Output: 20
// ```

console.log("9._______________________________________");

let arr8 = [1, 2, 3, 4]

function sumSum(arr) {
  return arr.reduce((sum, currentElem) => {
    return sum + (currentElem * 2)
  }, 0);
}

let sumDoubled = sumSum(arr8);

console.log(sumDoubled);

// 10. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.  Return a new array of every element of arr that can be evenly divided by divisor.
//
// ```
// Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
// Output: [5,10,15]
// ```

console.log("10._______________________________________");

let arr9 = [12, 15, 23, 45, 100, 44, 54, 79, 95, 72]

function divideThis(divisor, arr) {
  return arr.filter(element => element % divisor === 0)
  }

let canIDivide = divideThis(5, arr9);

console.log(canIDivide);

// 11. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by its index.
//
// ```
// Input: [6,7,8,9]
// Output: [0,7,16,27]
// ```

console.log("11._______________________________________");

let arr10 = [1, 20, 10, 5]

function numberTimesIdx(arr) {
  return arr.map((num, index) => {
    return num * index;
  });
}

let times = numberTimesIdx(arr10);

console.log(times);

// 12. Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.
//
// ```
// Input: [2,4,6,8,12]
// Output: true
//
// Input: [2,4,6,8,10]
// Output: false
// ```

console.log("12._______________________________________");

let arr11 = [32, 35, 15, 22, 20]
let arr11b = [2, 4, 6, 8, 12]

function posi (arr) {
  return arr.every((num) => {
  if (num > 0 && (num % 2) === 0 && (num % 10) !== 0) {
    return true;
    }
  })
}

let strictNum = posi(arr11)
let strictNum1 = posi(arr11b)

console.log(strictNum)
console.log(strictNum1)

// 13. Write a function that returns the sum of all odd numbers in an Array
//
// Hint: What is the second argument in `reduce`?
//
// ```
// Input: [2,3,4,5]
// Output: 8
//
// Input: [1,2,3,4,5]
// Output: 9
// ```
console.log("13._______________________________________");

let arr12 = [33, 34, 35, 36]
let arr12b = [2, 3, 4, 5, 6, 7]

function oddSums(arr){
  return arr.reduce((total, currentElem) => {
    if(currentElem % 2 !== 0) {
    total += currentElem
  }
  return total
}, 0)
}


let addOdd = oddSums(arr12)
let addOddb = oddSums(arr12b)

console.log(addOdd)
console.log(addOddb)

// 14. Write a function that returns a new array containing all of the strings in the original array uppercased.
//
// ```
// Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
// Output: ["CAT", "DOG", "BEAR"]
// ```

console.log("14._______________________________________");

let mixedArr = [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"];

function takeString(arr) {
  function makeItBig(str) {
  let big = str.toUpperCase();
  return big;
}
  return arr.filter((string) => {
    if( typeof string === "string") {
    return string;
    }
  }).map(makeItBig)
}


let newArr = takeString(mixedArr);

console.log(newArr)

// 1. Using Array.prototype add a new method `myForEach` that mimics the behavior of the built in `forEach`.

console.log("Bonus 1. _______________________________________");

let myArr = [1,2,3,4]

Array.prototype.myForEach = function(x) {
  for (let i of this){
    x(i)
  }
};

myArr.myForEach(console.log);

// 2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.

console.log("Bonus 2._______________________________________");

Array.prototype.myMap = function (x) {
  let newArr = [];
  for (let i of this) {
    newArr.push(x(i))
  }
  return newArr;
};

console.log(myArr.myMap((num) => num * 2));

// 3. Write a `myFilter` that behaves the same as `filter`.

console.log("Bonus 3._______________________________________");

Array.prototype.myFilter = function (x) {
  let newArr = [];
  for (let i of this) {
    if (x(i)){
      newArr.push(i)
    }
  }
  return newArr;
}

console.log(myArr.myFilter((num) => num % 2 === 0))

// 4. Write a `myEvery` that behaves the same as `every`.

console.log("4._______________________________________");

let trueArr = [6, 7, 8, 9];
let falseArr = [6, 7, 8, 9, 4];

Array.prototype.myEvery = function (x) {
  let falseNum = 0;
  for (let i of this) {
    if (x(i)) {
    } else {
      falseNum += 1;
    }
  } if (falseNum > 0) {
    return false;
  } else {
    return true;
  }
}

console.log(trueArr.myEvery((num) => num > 5))
console.log(falseArr.myEvery((num) => num > 5))

// 5. Write a `myReduce`. It should use the first element in the array if none is given.

console.log("Bonus 5._______________________________________");

Array.prototype.myReduce = function (x, total, num) {
  total = 0;
  for (let i of this) {
    if (x(i)) {
      total += i
    }
  }
  return total
}

console.log(myArr.myReduce((num) => num % 2 === 0))

// 6. Write a `myJoin` function.

console.log("Bonus 6._______________________________________");

let strArr = ["smells", "like", "teen", "spirit"];

Array.prototype.myJoin = function (spacer) {
  let newStr = "";
  for (let i of this) {
    if (this.indexOf(i) === 0){
    newStr += i;
  } else {
    newStr += (spacer + i);
  }
} return newStr
}

console.log(strArr.myJoin(" and "))

// 7. Write a `mySlice` function.

console.log("Bonus 7._______________________________________");

let sliceArr = [13, 14, 15, 16, 17, 18, 19, 20]

Array.prototype.mySlice = function (start, end) {
  for (let i = start; i < end; i++){
    console.log(this[i]);
  }
}

sliceArr.mySlice(3, 5)

// 8. Write a `myTranspose`. This function should transpose a matrix.
//
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

console.log("Bonus 8._______________________________________");

let matrix0 = [[1,2],[3,4],[5,6]]

Array.prototype.myTranspose = function () {

  let thisMatrix = [];
  let firstIn = [];
  let secIn = [];
  for (let i of this) {
    for (let x of i) {
      if (i.indexOf(x) === 0) {
        firstIn.push(x)
      } else {
        secIn.push(x)
      }
    }
  }
  thisMatrix.push(firstIn);
  thisMatrix.push(secIn);
  return thisMatrix
}

console.log(matrix0.myTranspose())

// 9. Write a `myFlatten`. This should take a multi-dimensional array and return it as one array.
//
// ```js
// let arr = [1, 2, [3, 4, 5, [6, 7, 8]]]
//   arr.myFlatten();
//   // => [1, 2, 3, 4, 5, 6, 7, 8]
// ```

console.log("Bonus 9._______________________________________");

let arrInArr = [1, 2, [3, 4, 5, [6, 7, 8]]]

Array.prototype.myFlatten = function() {
  let newArr = [];
  for (let i of this) {
    if (typeof i === "number") {
      newArr.push(i)
    } else {
      for (x of i) {
        if (typeof x === "number") {
        newArr.push(x)
      } else {
        for (y of x) {
          newArr.push(y)
        }
      }
      }
    }
  } return newArr;
}

console.log(arrInArr.myFlatten())
