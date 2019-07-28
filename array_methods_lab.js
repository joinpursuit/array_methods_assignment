// JOSEPH P. PASAOA
//



// global function declarations
const print = function(forDisplay, bool) {
  if (bool) { // for outputs
    console.log(forDisplay,'\n');
  } else { // for inputs
    console.log(`Input: [${forDisplay}]`);
  }
}



// 1 //
console.log("1 // Given an array of numbers, write a function that returns a new array where every element is incremented by 10.");
let input_1 = [1,2,3,4,5];
print(input_1);

let result_1 = input_1.map( function(el) {
    return el + 10;
} );
print(result_1, 1);
//


// 2 //
console.log("2 // Given an array, return a new array where every non-string element is converted to an empty string.");
let input_2 = ["a", 123, "b", "c", {name: "cat"}];
print('["a", 123, "b", "c", {name: "cat"}]');

let result_2 = [];
input_2.forEach( function(el) {
    if (typeof el === "string") {
      result_2.push(el);
    } else {
      result_2.push('');
    }
} );
print(result_2, 1);
//


// 3 //
console.log("3 // Write a function that returns only the even elements in an array of numbers.");
let input_3 = [1,2,3,4,5];
print(input_3);

const toOnlyEvens = (input_Arr) => {
  return (
    input_Arr.filter( (el) => !(el % 2) )
  );
}
let result_3 = toOnlyEvens(input_3);
print(result_3, 1);
//


// 4 //
console.log("4 // Write a function that checks if all elements in the array are the same.");
let input_4 = [1,1,1,1,"1"]; // [1,1,1,1,2]
print('[1,1,1,1,"1"]');

const areAllSame = (input_Arr) => {
  return (
    input_Arr.every( el => el === input_Arr[0] )
  );
}
let result_4 = areAllSame(input_4);
print(result_4, 1);
//


// 5 //
console.log("5 // Write a function that returns the sum of every element in an array.");
let input_5 = [1,2,3,4,5];
print(input_5);

const sumArr = function(input_Arr) {
  return (
    input_Arr.reduce( function(acc, curr) {
        return acc + curr;
    }, 0)
  );
}
let result_5 = sumArr(input_5);
print(result_5, 1);
//


// 6 //
console.log("6 // Write a function that finds largest number in an array.");
let input_6 = [1,2,6,3,4,8,5];
print(input_6);

const toFindLargest = function(input_Arr) {
  return (
    input_Arr.reduce( function(acc, curr) {
        if (curr > acc) {
          return curr
        }
        return acc
    } )
  );
}
let result_6 = toFindLargest(input_6);
print(result_6, 1);
//


// 7 //
console.log("7 // Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.");
let input_7 = [1,0,0,2,0,3,0,0,0];
print(input_7);

const countZeroes = (input_Arr) => {
  return (
    input_Arr.reduce( (acc, curr) => {
        if (!(curr)) {
          return acc += 1;
        }
        return acc;
    }, 0)
  );
}
let result_7 = countZeroes(input_7);
print(result_7, 1);
//


// 8 //
console.log("8 // Write a function that doubles every element in an array.");
let input_8 = [1,2,3,4];
print(input_8);

const doubleAll = (input_Arr) => {
  return (
    input_Arr.map(el => el * 2)
  );
}
let result_8 = doubleAll(input_8);
print(result_8, 1);
//


// 9 //
console.log("9. Write a function that finds the sum of every element in an array doubled");
let input_9 = [1,2,3,4];
print(input_9);

const doubleSumArr = function(input_Arr) {
  return (
    2 * input_Arr.reduce( function(acc, curr) {
        return acc += curr;
    }, 0)
  )
}
let result_9 = doubleSumArr(input_9);
print(result_9, 1);
//


// 10 //
console.log("10 // Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.  Return a new array of every element \nof arr that can be evenly divided by divisor.");
let input_10_div = 5;
let input_10_arr = [4,5,6,7,8,9,10,11,12,13,14,undefined,15];
console.log(`${input_10_div} and [${input_10_arr}]`);

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
print(input_11);

const numberTimesIdx = (input_Arr) => {
  return (
    input_Arr.map( (el, i) => el * i )
  )
}
let result11 = numberTimesIdx(input_11);
print(result11, 1);
//


// 12 //
console.log("12 // Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.");
let input_12 = [2,4,6,8,12]; // [2,4,6,8,10]
print(input_12);

// input_12.forEach( el => console.log( el > 0, !(el % 2), el % 10 )); // debug
const areAllEvenPosNoZeroEnd = (input_Arr) => {
  return (
    input_Arr.every( el => el > 0 && !(el % 2) && el % 10 )
  )
}
let result12 = areAllEvenPosNoZeroEnd(input_12);
print(result12, 1);
//


// 13 //
console.log("13 // Write a function that returns the sum of all odd numbers in an Array");
let input_13 = [2,3,4,346,-10.2,10001,5]; // [1,2,3,4,5]
print(input_13);

const sumTheOdds = function(input_Arr) {
  return (
    input_Arr.reduce( function(acc, curr) {
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

const onlyStrsCapped = function(input_Arr) {
  return (
    input_Arr.filter( function(el) {
        return (typeof el === "string")
    })
    .map( str => str.toUpperCase() )
  )
}
let result14 = onlyStrsCapped(input_14);
print(result14, 1);
//


// BONUS QUESTIONS //
console.log('\n\n=== BONUS QUESTIONS ===\n');


// b1 //
console.log("b1 // Using Array.prototype add a new method `myForEach` that mimics the behavior of the built in `forEach`.");
let input_b1 = [2,3,4,6,7,8];
console.log(`Input: [${input_b1}]\nOutputting console.log with no return`);

Object.defineProperty(Array.prototype, 'myForEach', {
    value: function(toSelectEach) {
      for (let i of this) {
        toSelectEach(i);
      }
    }
} );
let result_b1 =
  input_b1.myForEach( function(el) {
      console.log(el)
  } );
print(result_b1, 1);
//


// b2 //
console.log("b2 // Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.");
console.log(`Input: [${input_b1}]\nOutputting mapping to (el * 5)`);

Object.defineProperty(Array.prototype, 'myMap', {
    value: function(toApplyMap) {
      let outputMappedArray = [];
      this.myForEach( function(toSelectEach) {
          outputMappedArray.push(toApplyMap(toSelectEach));
      } );
      return outputMappedArray;
    }
} );
let result_b2 =
  input_b1.myMap( function(el) {
      return el * 5;
  } );
print(result_b2, 1);
//


// b3 //
console.log("b3 // Write a `myFilter` that behaves the same as `filter`.");
console.log(`Input: [${input_b1}]\nOutputting filtering to only (el > 6)`);

Object.defineProperty(Array.prototype, 'myFilter', {
    value: function(isWhat) {
      let outputFilteredArray = [];
      this.myForEach( (toSelectEach) => {
          if (isWhat(toSelectEach)) {
              outputFilteredArray.push(toSelectEach);
          }
      } );
      return outputFilteredArray;
    }
} );
let result_b3 = input_b1.myFilter( (el) => (el > 6) );
print(result_b3, 1);
//


// b4 //
console.log("b4 // Write a `myEvery` that behaves the same as `every`.");
let input_b4 = [1,2,'downbeat',4] // 5,6,7,8]
console.log(`Input: [1,2,'downbeat',4]\nOutputting checking if all elements are numbers`);

Object.defineProperty(Array.prototype, 'myEvery', {
    value: function(areAllWhat) {
      for (let el of this) {
        if (areAllWhat(el) === false) {
          return false;
        }
      }
      return true;
    }
} );
let result_b4 = input_b4.myEvery( (el => (typeof el === 'number')) );
print(result_b4, 1);
//


// b5 //
console.log("b5 // Write a `myReduce`. It should use the first element in the array if none is given.");
let input_b5 = [4,8,12,16];
console.log(`Input: [${input_b5}]\nOutputting sum of all elements`);

Object.defineProperty(Array.prototype, 'myReduce', {
    value: function(toReduceHow, initValue) {
      let acc;
      if (initValue === undefined) {
        acc = this[0];
        for (let i = 1; i < this.length; i++) {
          acc = toReduceHow(acc, this[i]);
        }
      } else {
        acc = initValue;
        for (let i = 0; i < this.length; i++) {
          acc = toReduceHow(acc, this[i]);
        }
      }
      return acc;
    }
} );
let result_b5 =
  input_b5.myReduce( function(sum, currentEl) {
      return sum += currentEl;
} );
print(result_b5, 1);
//


// b6 //
console.log("b6 // Write a `myJoin` function.");
let input_b6 = ['ichi', 'ni', 'san', 'shi'];
console.log(`Input: ${input_b6}. Join with '-'`);

Object.defineProperty(Array.prototype, 'myJoin', {
    value: function(separator) {
      let outputStr = this[0];
      separator === undefined
        ? separator = ','
        : false;
      for (let i = 1; i < this.length; i++) {
        outputStr += (separator + this[i]);
      }
      return outputStr;
    }
} );
let result_b6 = input_b6.myJoin('-');
print(result_b6, 1);
//


// b7 //
console.log("b7 // Write a `mySlice` function.");
let input_b7 = ['a','b','l','i','o','n','c'];
console.log(`Input: ['a','b','l','i','o','n','c']`);

Object.defineProperty(Array.prototype, 'mySlice', {
    value: function(startIdx, endIdx) {
      let outputArray = [];

      // // formalize startIdx
      if (startIdx === undefined) {
        startIdx = 0;
      }
      if (startIdx > this.length) {
        return outputArray;
      }
      if (startIdx < 0) {
        startIdx = this.length + startIdx;
      }

      // // formalize endIdx
      if (endIdx === undefined || endIdx > this.length) {
        endIdx = this.length;
      }
      if (endIdx < 0) {
        endIdx = this.length + endIdx;
      }

      for (let i = startIdx; i < endIdx; i++) {
        outputArray.push(this[i]);
      }
      return outputArray;
    }
} );
let result_b7 = input_b7.mySlice(-5,-1);
print(result_b7, 1);
//


// b8 //
console.log("b8 // Write a `myTranspose`. This function should transpose a matrix.");
let input_b8 = [
  [1, 2], [3, 4], [5, 6]
];
console.log('[ [1, 2], [3, 4], [5, 6] ]');

Object.defineProperty(Array.prototype, 'myTranspose', {
    value: function() {
      let xOutput_Lefts = [];
      let xOutput_Rights = [];
      let outputArray = [xOutput_Lefts, xOutput_Rights];
      for (let i of this) {
        xOutput_Lefts.push(i[0]);
        xOutput_Rights.push(i[1]);
      }
      return outputArray;
    }
} );
let result_b8 = input_b8.myTranspose();
print(result_b8, 1);
//


// b9 //
console.log("b9 // Write a `myFlatten`. This should take a multi-dimensional array and return it as one array.");
let input_b9 = [[[-3, -2], -1, 0], 1, 2, [3, 4, 5, [6, 7, 8]]];
console.log('[[[-3, -2], -1, 0], 1, 2, [3, 4, 5, [6, 7, 8]]]');

Object.defineProperty(Array.prototype, 'myFlatten', {
    value: function() {
      let outputArray = [];
      for (let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i])) {
          outputArray = outputArray.concat(this[i].myFlatten());
        } else {
          outputArray.push(this[i]);
        }
      }
      return outputArray;
    }
} );
let result_b9 = input_b9.myFlatten();
print(result_b9, 1);
//
