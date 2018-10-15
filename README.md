# Exercises

__NOTE:__ DO NOT USE THE BUILT IN METHODS WHEN ASKED TO MAKE THEM!

1. Using Array.prototype add a new method `myForEach` that mimics the behavior of the built in `forEach`.

```js
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++)
  callback(this[i]);
};
```

2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.

```js
Array.prototype.myMap = function (call) {
  let array = [];
  this.myForEach((el) => {
    array.push(call(el))
  })
  return array;
};
```

3. Write a `myFilter` that behave's the same as `filter`.

```js
Array.prototype.myFilter = function (callback2) {
  let array = [];
  this.myForEach((element) => {
    if (callback2(element)) {
      array.push(element)
    }
  })
  return array;
};
```

4. Write a `myEvery`.

```js
Array.prototype.myEvery = function (callback3) {
 let truthyCounter = 0
 this.myForEach((element) =>  {
   if (callback3(element)) {
     return true;
   } else {
     truthyCounter++
     return false;
   }   
 });
 if (truthyCounter > 0) {
   return false;
 } else {
   return true;
 }
};
```

5. Write a `myReduce`. It should use the first element in the array if none is given.

```js
Array.prototype.myReduce = function (callbackReduce, acc) {
  if (!(acc)) {
    acc = 0;
  }
  this.forEach((currentValue) => {
     acc = callbackReduce(acc, currentValue);

   })
   return acc;
 };
 ```

6. Write a `myTranspose`. This function should transpose a matrix. Exp:
```js
let mtx = [
            [1, 2],
            [3, 4],
            [5, 6]
          ]

mtx.myTranspose();

=> [
        [1, 3, 5],
        [2, 4, 6]
       ]

const myTranspose = (matrix) => {
  let transposedArr = [];
  let transposedLength = matrix[0].length;
  let addCount = 0;

  while (addCount < transposedLength) {
    transposedArr.push([]);
    addCount++;
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      transposedArr[j].push(matrix[i][j]);
    }
  }
return transposedArr;
};

```

7. Use `myMap` to build a new array where every element is incremented by 10.

```js
let newArray = array.myMap((element) => {
  return element * 10;
});
```

8. Use `myMap` to build a new array where every non-string element is converted to an empty string.

```js
let elToString = array.myMap((el) => {
  return el.toString();
});
```

9. Use `myFilter` to get only the even elements in an array.

```js
let onlyEven = array.myFilter((el) => {
  return el % 2 === 0;
});
```
10. Use `myEvery` to check if all elements in the array are the same.

```js
array.myEvery((el, i) => {
  return el === array[i]
});
```
11. Use `myReduce` to return the sum of every element in an array.

```js
let sumOfEl = arr.myReduce((acc, currentValue) => {
  return acc + currentValue;
});
```

12. Use `myMap` to build a new array that doubles each element. Then chain `myReduce` to find the product of all the elements.

```js
let doubledArraySum = array.myMap((el) => {
  return el * 2;
}).myReduce((acc, currentValue) => {
  return acc + currentValue;
});
```

13. Use `myReduce` to find the largest number in an array.

```js
let largest = array.myReduce((acc, currentValue) => {
  if(acc > currentValue) {
    return acc;
  } else {
    return currentValue;
  }
});
```

14. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.
Use `myFilter` to return a new array of every element of arr that can be evenly divided by divisor.

```js
function elementDivisibleBy (divisor, arr) {
  let divisibleElArray = arr.myFilter((el) => {
    return el % divisor === 0;
  })
  return divisibleElArray;
};
```
14. Write a `myJoin` function.

```js
Array.prototype.myJoin = function (splittingArg) {
  let jointString = '';
  for (let i = 0 ; i < this.length; i++) {
    let jointString += this[i] + splittingArg;
  }
  return jointString;
};
```

15. Write a `mySlice` function.

```js
Array.prototype.mySlice = function (beginningIdx, endingIdx) {
  let copyArr = [];
  for (let i = beginningIdx; i < endingIdx; i++) {
    copyArr.push(this[i]);
  }
  return copyArr;
};
```
16. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.
Use reduce.

```js
const countZeroes = (array) => {
  let zeroCounter = 0;
  array.reduce((acc, currentEl) => {
    let acc = 0;
    if (currentEl === acc) {
      zeroCounter++;
    }
  })
  return zeroCounter;
};
```
17. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by it's index.

```js
const numberTimesIdx = (array) => {
  let newArray = array.map((el,i) => {
    return el * i
  })
  return newArray;
};
```

Bonus: Write a `myFlatten`. This should take a multi-dimensional array and return it as one array.
```js
let arr = [1, 2, [3, 4, 5, [6, 7, 8]]]
  arr.myFlatten();
  // => [1, 2, 3, 4, 5, 6, 7, 8]
```
