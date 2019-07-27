//# Exercises

//1. Given an array of numbers, write a function that returns a new array
//where every element is incremented by 10.

// ```
// Input: [1,2,3,4,5]
// Output: [11,12,13,14,15]
// ```
console.log('----Q1----');
let arr1 = [1, 2, 3, 4, 5];
let result1 = arr1.map((currentElem) => {
  return currentElem + 10;
});
console.log(result1);

//2. Given an array, return a new array where every non-string element is
//converted to an empty string.

// ```
// Input: ["a", 123, "b", "c", {name: "cat"}]
// Output: ["a", "", "b", "c", ""]
// ```
console.log('----Q2----');
let arr2 = ["a", 123, "b", "c", {name: "cat"}];
let result2 = arr2.map((el) => {
  if(typeof el !== 'string') {
    return '';
  } else {
    return el;
  }
});
console.log(result2);

//3. Write a function that returns only the even elements in an array
//of numbers.

// ```
// Input: [1,2,3,4,5]
// Output: [2,4]
// ```
console.log('----Q3----');
let arr3 = [1, 2, 3, 4, 5];
let result3 = arr3.filter((el) => {
  return el % 2 === 0;
});

console.log(result3);

//4. Write a function that checks if all elements in the array are the same.

// ```
// Input: [1,1,1,1,1]
// Output: true
//
// Input: [1,1,1,1,2]
// Output: false
// ```
console.log('----Q4----');
let arr4 = [1, 1, 1, 1, 1];
let allSameRes = arr4.every(el => {

  if (el === arr4[0]) {
    return true;
  }

  return false;
});
console.log(allSameRes);

// 5. Write a function that returns the sum of every element in an array.

// ```
// Input: [1,2,3,4,5]
// Output: 15
// ```
console.log('----Q5----');
let arr5 = [1, 2, 3, 4, 5];
let result5 = arr5.reduce((total5, el) => total5 + el, 0);

console.log(result5);

// 6. Write a function that finds largest number in an array.
//
// ```
// Input: [1,2,6,3,4,5]
// Output: [6]
// ```
console.log('----Q6----');
let arr6 = [1, 2, 6, 3, 4, 5];
let result6 = arr6.reduce((acc, currentEl) => {
    if (currentEl > acc) {
      return currentEl;
    } else {
      return acc;
    }
  });
console.log(result6);

// 7. Write a function `countZeroes`, which takes an array of numbers as its
// argument and returns the amount of zeroes that occur in it.
//
// ```
// Input: [1,0,0,2,0,3,0,0,0]
// Output: 6
// ```
console.log('----Q7----');

let arr7 = [1, 0, 0, 2, 0, 3, 0, 0, 0];
let result7  = arr7.reduce((acc, el) => (el === 0) ? ++acc : acc, 0);

console.log(result7);

// 8. Write a function that doubles every element in an array.
//
// ```
// Input: [1,2,3,4]
// Output: [2,4,6,8]
// ```
console.log('----Q8----');
let arr8 = [1, 2, 3, 4];
let result8 = arr8.map((el) => el * 2);

console.log(result8);

// 9. Write a function that finds the sum of every element in an array doubled
//
// ```
// Input: [1,2,3,4]
// Output: 20
// ```
console.log('----Q9----');
let arr9 = [1, 2, 3, 4];
let result9 = arr9.reduce((total, el) => {
  return total + el * 2;
}, 0);

console.log(result9);

// 10. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.
// Return a new array of every element of arr that can be evenly
// divided by divisor.
//
// ```
// Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
// Output: [5,10,15]
// ```
console.log('----10----');
let arr10 = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let divisor = 5

const elementDivBy = (divisor, arr) => {
  return arr.filter((el) => {
    if (!(el % divisor)) {
      return el;
    };
  });
};

console.log(elementDivBy(divisor, arr10));

// 11. Write a `numberTimesIdx` that uses `map` and multiples each number in
// the array by its index.
//
// ```
// Input: [6,7,8,9]
// Output: [0,7,16,27]
// ```
console.log('----11----');
let arr11 = [6, 7, 8, 9];
let  result11 = arr11.map(numberTimesIdx = (currentValue) => {
  return currentValue * arr11.indexOf(currentValue);
})
console.log(result11);

// 12. Write a function that returns whether or not every value in an array is
// a positive even number that doesn't end in 0.
//
// ```
// Input: [2,4,6,8,12]
// Output: true
//
// Input: [2,4,6,8,10]
// Output: false
// ```
console.log('----12----');
let arr12 = [2, 4, 6, 8, 12];
let result12 = arr12.every(elem => {
	if (elem % 10 === 0 && elem > 0) {
		return false;
	} else if (elem % 2 === 0 && elem > 0) {
	return true;
	}
});
console.log(result12);

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
console.log('----13----');
let arr13 = [2, 3, 4, 5];

let result13 = arr13.filter((el) => {
  if (el % 2 !== 0) {
return el;
}
}).reduce((acc, el) => {
	return acc + el
}, 0);

console.log(result13);

// 14. Write a function that returns a new array containing all of the strings
// in the original array uppercased.
//
// ```
// Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
// Output: ["CAT", "DOG", "BEAR"]
// ```
console.log('----Q14----');
let arr14 = [{}, 1, 'cat', 3, ['hi'], { name: 'dog' }, 'dog', 'bear'];
let result14 = arr14.filter((el) => {
  if (typeof el === 'string') {
    return el;
  }
}).map(el => {
    return el.toUpperCase()
});
console.log(result14);
