// JOSEPH P. PASAOA
//



// global function declarations
const print = function(vari, bool) {
  if (bool) { // for outputs
    console.log(vari,'\n');
  } else { // for inputs
    console.log(`Input: ${vari}`);
  }
}



// 1 //
console.log("1 // Given an array of numbers, write a function that returns a new array where every element is incremented by 10.");
let input_01 = [1,2,3,4,5];
print(`[${input_01}]`);

let result01 = input_01.map( function(num) {
    return num + 10;
} );
print(result01, 1);
//


// 2 //
console.log("2 // Given an array, return a new array where every non-string element is converted to an empty string.");
let input_02 = ["a", 123, "b", "c", {name: "cat"}];
print('["a", 123, "b", "c", {name: "cat"}]');

let result02 = [];
input_02.forEach( function(el) {
    if (typeof el === "string") {
      result02.push(el);
    } else {
      result02.push('');
    }
} );
print(result02, 1);
//


// 3 //
console.log("3 // Write a function that returns only the even elements in an array of numbers.");
let input_03 = [1,2,3,4,5];
print(`[${input_03}]`);

const onlyTheEvens = (arr) => {
  return (
    arr.filter( (el) => !(el % 2) )
  );
}
let result03 = onlyTheEvens(input_03);
print(result03, 1);
//


// 4 //
console.log("4 // Write a function that checks if all elements in the array are the same.");
let input_04 = [1,1,1,1,"1"]; // [1,1,1,1,2]
print('[1,1,1,1,"1"]');

const allTheSame = (arr) => {
  return (
    arr.every( el => el === arr[0] )
  );
}
let result04 = allTheSame(input_04);
print(result04, 1);
//


// 5 //
console.log("5 // Write a function that returns the sum of every element in an array.");
let input_05 = [1,2,3,4,5];
print(`[${input_05}]`);

const arrSum = function(arr) {
  return (
    arr.reduce( function(acc, curr) {
        return acc + curr;
    }, 0)
  );
}
let result05 = arrSum(input_05);
print(result05, 1);
//


// 6 //
console.log("6 // Write a function that finds largest number in an array.");
let input_06 = [1,2,6,3,4,8,5];
print(`[${input_06}]`);

const largestOfArr = function(arr) {
  return (
    arr.reduce( function(acc, curr) {
        // console.log(acc); // debug
        if (curr > acc) {
          return curr;
        }
        return acc;
    } )
  );
}
let result06 = largestOfArr(input_06);
print(result06, 1);
//


// 7 //
console.log("7 // Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.");
let input_07 = [1,0,0,2,0,3,0,0,0];
print(`[${input_07}]`);

const zeroCounter = (arr) => {
  return (
    arr.reduce( (acc, curr) => {
        //console.log(acc); // debug
        if (!(curr)) {
          acc += 1;
        }
        return acc;
    }, 0)
  );
}
let result07 = zeroCounter(input_07);
print(result07, 1);
//


// 8 //
console.log("8 // Write a function that doubles every element in an array.");
let input_08 = [1,2,3,4];
print(`[${input_08}]`);

const doubleTheEls = (arr) => {
  return (
    arr.map(el => el * 2)
  );
}
let result08 = doubleTheEls(input_08);
print(result08, 1);
//


// 9 //
console.log("9. Write a function that finds the sum of every element in an array doubled");
let input_09 = [1,2,3,4];
print(`[${input_09}]`);

const doubleArrSum = function(arr) {
  return (
    2 * arr.reduce( function(acc, curr) {
        return acc += curr;
    }, 0)
  )
}
let result09 = doubleArrSum(input_09);
print(result09, 1);
//


// 10 //
console.log("10 // Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.  Return a new array of every element \nof arr that can be evenly divided by divisor.");
let input_10_div = 5;
let input_10_arr = [4,5,6,7,8,9,10,11,12,13,14,undefined,15];
print(`${input_10_div} and [${input_10_arr}]`);

const elementDivisibleBy = function(divisor, arr) {
  return (
    arr.filter( function(el) {
        return (!!el && !(el % divisor));
    } )
  )
}
let result10 = elementDivisibleBy(input_10_div, input_10_arr);
print(result10, 1);
//


// 11 //
console.log("11 // Write a `numberTimesIdx` that uses `map` and multiples each number in the array by its index.");
let input_11 = [6,7,8,9];
print(`[${input_11}]`);

const numberTimesIdx = (arr) => {
  return (
    arr.map( (el, i) => el * i )
  )
}
let result11 = numberTimesIdx(input_11);
print(result11, 1);
//


// 12 //
console.log("12 // Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.");
let input_12 = [2,4,6,8,12]; // [2,4,6,8,10]
print(`[${input_12}]`);

// input_12.forEach( el => console.log( el > 0, !(el % 2), el % 10 )); // debug
const checkAllEvenPosNoZeros = (arr) => {
  return (
    arr.every( el => el > 0 && !(el % 2) && el % 10 )
  )
}
let result12 = checkAllEvenPosNoZeros(input_12);
print(result12, 1);
//


// 13 //
console.log("13 // Write a function that returns the sum of all odd numbers in an Array");
let input_13 = [2,3,4,346,-10.2,10001,5]; // [1,2,3,4,5]
print(`[${input_13}]`);

const sumTheOdds = function(arr) {
  return (
    arr.reduce( function(acc, curr) {
        // console.log(curr) // debug
        if (curr % 2 && !(curr % 1)) {
          return acc += curr
        }
        return acc
    }, 0)
  )
}
let result13 = sumTheOdds(input_13);
print(result13, 1);
//


// 14 //
console.log("14 // Write a function that returns a new array containing all of the strings in the original array uppercased.");
let input_14 = [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"];
console.log('[{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]');

const onlyToCap = function(arr) {
  return (
    arr.filter( function(el) {
        return (typeof el === "string")
    })
    .map( el => el.toUpperCase() )
  )
}
let result14 = onlyToCap(input_14);
print(result14, 1);
//


// BONUS QUESTIONS //


// b1 //
console.log("1. Using Array.prototype add a new method `myForEach` that mimics the behavior of the built in `forEach`.");
let input_b01 = [2,3,4,6,7,8];
print(`[${input_b01}]\nOutputting console.log with no return`);

Object.defineProperty(Array.prototype, 'myForEach', {
    value: function(callback) {
      for (let i of this) {
        callback(i);
      }
    }
} );
let resultb01 =
  input_b01.myForEach( function(el) {
      console.log(el)
  } );
print(resultb01, 1);
//


// b2 //
console.log("2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.");
print(`[${input_b01}]\nOutputting mapping to (el * 5)`);

Object.defineProperty(Array.prototype, 'myMap', {
    value: function(callback) {
      let outputArray = [];
      this.myForEach( function(myForEachThing) {
          outputArray.push(callback(myForEachThing));
      } );
      return outputArray;
    }
} );
let resultb02 =
  input_b01.myMap( function(el) {
      return el * 5;
  } );
print(resultb02, 1);
//


// b3 //
console.log("3. Write a `myFilter` that behaves the same as `filter`.");
print(`[${input_b01}]\nOutputting filtering to only (el > 6)`);

Object.defineProperty(Array.prototype, 'myFilter', {
    value: function(callback) {
      let outputArray = [];
      this.myForEach( (myForEachThing) => {
          if (callback(myForEachThing)) {
              outputArray.push(myForEachThing);
          }
      } );
      return outputArray;
    }
} );
let resultb03 = input_b01.myFilter( (el) => (el > 6) );
print(resultb03, 1);
//


// b4 //
console.log("4. Write a `myEvery` that behaves the same as `every`.");
let input_b04 = [1, 2, 'downbeat', 4] // 5,6,7,8]
print(`[${input_b04}]\nOutputting checking if all elements are numbers`);

Object.defineProperty(Array.prototype, 'myEvery', {
    value: function(callback) {
      for (let i of this) {
        if (callback(i) === false) {
          return false;
        }
      }
      return true;
    }
} );
let resultb04 = input_b04.myEvery( (el => (typeof el === 'number')) );
print(resultb04, 1);
//


// b5 //
console.log("5. Write a `myReduce`. It should use the first element in the array if none is given.");
let input_b05 = [4,8,12,16];
print(`[${input_b05}]\nOutputting sum of all elements`);

Object.defineProperty(Array.prototype, 'myReduce', {
    value: function(callback, initValue) {
      // for (let i = 0; i < this.length; i++) {
      if (initValue === undefined) {
        let acc = this[0];
        for (let i = 1; i < this.length; i++) {
          callback(this[i]);
        }
        return acc;
      } else {
        let acc = initValue;
        for (let i = 0; i < this.length; i++) {
          callback(this[i]);
        }
        return acc;
      }
    }
} );
let resultb05 =
  input_b05.myReduce( function(acc, curr) {
      return acc += curr;
}, 0);
print(resultb05, 1);


/*
6. Write a `myJoin` function.

7. Write a `mySlice` function.

8. Write a `myTranspose`. This function should transpose a matrix.

```js
let mtx = [
            [1, 2],
            [3, 4],
            [5, 6]
          ]

mtx.myTranspose();

// => [
        [1, 3, 5],
        [2, 4, 6]
       ]
```

9. Write a `myFlatten`. This should take a multi-dimensional array and return it as one array.

```js
let arr = [1, 2, [3, 4, 5, [6, 7, 8]]]
  arr.myFlatten();
  // => [1, 2, 3, 4, 5, 6, 7, 8]
```
*/
