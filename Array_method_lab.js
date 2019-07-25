console.log(' ');
console.log('Question 1');
console.log(' ');

//1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.

let array = [1, 2, 3, 4, 5];

let newArray = array.map((el) => {
  return el + 10;
});

console.log(array);
console.log(newArray);

console.log(' ');
console.log('Question 2');
console.log(' ');

//2. Given an array, return a new array where every non-string element is converted to an empty string.

let mixedArray = ['a', 123, 'b', 'c', { name: 'cat' }];

const filteredArray = (array) => {
  return array.map(element => {
    if (typeof element !== typeof 'string') {
      return ' ';
    } else {
      return element;
    }
  });
};

console.log(filteredArray(mixedArray));

console.log(' ');
console.log('Question 3');
console.log(' ');

//3. Write a function that returns only the even elements in an array of numbers.

let listedArray = [1, 2, 3, 4, 5];

const onlyEvenArray = (array) => {
  return array.filter(elem => {
    return elem % 2 === 0;
  });
};

console.log(onlyEvenArray(listedArray));

console.log(' ');
console.log('Question 4');
console.log(' ');

//4. Write a function that checks if all elements in the array are the same.

let randomArray = [1, 1, 1, 1, 1];
let randomArray2 = [1, 1, 1, 1, 2];
// let arrayElemSame =

const arrayElemSame = (array) => {
  let pervElem = array[0];
  return array.every((elem)  => {
    if (elem === pervElem) {
      return true;
    } else {
      return false;
    }
  });
};

console.log(arrayElemSame(randomArray));

console.log(' ');
console.log('Question 5');
console.log(' ');

//5. Write a function that returns the sum of every element in an array.

let addThisArray = [1, 2, 3, 4, 5];

const addedArray = (array) => {
  return array.reduce((total, currentElem) => {
    return total + currentElem;
  });
};

console.log(addedArray(addThisArray));

console.log(' ');
console.log('Question 6');
console.log(' ');

//6. Write a function that finds largest number in an array.

let manyNumbers = [1, 2, 6, 3, 4, 5];

const largestNumber = (array) => {
  return array.reduce((acc, curr) => {
    if (acc > curr) {
      return acc;
    } else {
      return curr;
    }
  });
};

console.log(largestNumber(manyNumbers));

console.log(' ');
console.log('Question 7');
console.log(' ');

//7. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.

let moreArray = [1, 0, 0, 2, 0, 3, 0, 0, 0];

const countZeroes = (array) => {
  let counter = 0;
  array.forEach(element => {
    if (element === 0) {
      counter++;
    }
  });
  return counter;
};

console.log(countZeroes(moreArray));

console.log(' ');
console.log('Question 8');
console.log(' ');

//8. Write a function that doubles every element in an array.

let boringArray = [1, 2, 3, 4];

const doubleTheArray = (array) => {
  return array.map(element => {
    return element * 2;
  });
};

console.log(doubleTheArray(boringArray));

console.log(' ');
console.log('Question 9');
console.log(' ');

//9. Write a function that finds the sum of every element in an array doubled

let moreBoringArray = [1, 2, 3, 4];

const sumOfDoubledArray = (array) => {
  return array.map(element => {
    return element * 2;
  })
  .reduce((total, currentElem) => {
    return total + currentElem;
  });
};

console.log(sumOfDoubledArray(moreBoringArray));

console.log(' ');
console.log('Question 10');
console.log(' ');

//10. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.  Return a new array of every element of arr that can be evenly divided by divisor.

let togetherArray = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const elementDivisibleBy = (divisor, arr) => {
  let dividedArray = [];
  return dividedArray = arr.map(element => {
    if (element % divisor === 0) {
      return element;
    }
  })
  .filter(el => {
    return el !== undefined;
  });
};

console.log(elementDivisibleBy(5, togetherArray));

console.log(' ');
console.log('Question 11');
console.log(' ');

//11. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by its index.

let soSoArray = [6, 7, 8, 9];

const numberTimesIdx = (array) => {
  return array.map((el, i) => {
    return el * i;
  });
};

console.log(numberTimesIdx(soSoArray));

console.log(' ');
console.log('Question 12');
console.log(' ');

//12. Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.

let theseNumbers = [2, 4, 6, 8, 12];
let theseNumbers2 = [2, 4, 6, 8, 10];

const checkingValues = (array) => {
  return array.every(elem => {
    if (elem > 0 && elem % 10 !== 0 && elem !== 0) {
      return true;
    } else {
      return false;
    }
  });
};

console.log(checkingValues(theseNumbers2));

console.log(' ');
console.log('Question 13');
console.log(' ');

//13. Write a function that returns the sum of all odd numbers in an Array

let acuteArray = [2, 3, 4, 5];
let acuteArray2 = [1, 2, 3, 4, 5];

const sumOfOdd = (array) => {
  let sum = array.filter(el => {
    return el % 2 !== 0;
  })
  .reduce((total, currentElem) => {
    return total + currentElem;

  });
  return sum;
};

console.log(sumOfOdd(acuteArray));

console.log(' ');
console.log('Question 14');
console.log(' ');

//14. Write a function that returns a new array containing all of the strings in the original array uppercased.

let randomStuff = [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"];

const uppercaseMyStrings = (array) => {
  let grabStrings = array.filter(el => {
    return typeof el === typeof 'String';
  })
  .map(currentElem => {
    return currentElem.toUpperCase();
  });
  return grabStrings;
};

console.log(uppercaseMyStrings(randomStuff));
