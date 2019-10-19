# Exercises

1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.

```
let qar1 = [1, 2, 3, 4, 5]
const addTenToArrray = (arr) => arr.map(num => num + 10)
console.log(addTenToArrray(qar1));

```

2. Given an array, return a new array where every non-string element is converted to an empty string.

```
const result = (arr) => arr.map(a => typeof a === `string` ? a : a = ``)
console.log(result(["a", 123, "b", "c", {name: "cat"}]));

```

3. Write a function that returns only the even elements in an array of numbers.

```
const evenReturn = (arr) => arr.filter(i => !(i % 2))
evenReturn([1, 2, 3, 4, 5]);

```

4. Write a function that checks if all elements in the array are the same.

```
let test1 = [1, 1, 1, 1, 1]
const allSame = (arr) => arr.every(i => i === arr[0])
console.log(allSame(test1));

let test2 = [1, 1, 1, 1, 2]
console.log(allSame(test2));

```

5. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.

```
let qar6 = [1, 0, 0, 2, 0, 3, 0, 0, 0]
const howMany0s = (arr) => arr.reduce((i, j) => j === 0 ? i += 1 : i, 0)
console.log(howMany0s(qar6));

```

6. Write a function that doubles every element in an array.

```
let qar7 = [1, 2, 3, 4]
const doubleAllElem = (arr) => arr.map(i => i * 2)
console.log(doubleAllElem(qar7));

```

7. Write a function that whether every tripled number in an array is less than 20.

```
Input: [1,2,4,7]
Output: false (7 * 3 = 21)

Input: [3,4,5]
Output: true
```

8. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.  Return a new array of every element of arr that can be evenly divided by divisor.

```
Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
Output: [5,10,15]
```

9. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by its index.

```
const numberTimesIndex = (arr) => arr.map((el, i) => el * i)
console.log(numberTimesIndex([1, 2, 3, 4]));


```

10. Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.

```
Input: [2,4,6,8,12]
Output: true

Input: [2,4,6,8,10]
Output: false
```


11. Write a function that returns a new array containing all of the strings in the original array uppercased.

```
Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
Output: ["CAT", "DOG", "BEAR"]
```

## Bonus:

You can write your own array methods!

```js
Array.prototype.sayHi = function() {
  console.log("Hi")
}
```

Now every array that you write has a `sayHi` method that you can call.

```js
let myArr = [1,2,3]
myArr.sayHi() //Logs "Hi" to the console
```


1. Using Array.prototype add a new method `myForEach` that mimics the behavior of the built in `forEach`.


2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.


3. Write a `myFilter` that behaves the same as `filter`.


4. Write a `myEvery` that behaves the same as `every`.


5. Write a `myReduce`. It should use the first element in the array if none is given.


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

10. Write a function that returns the sum of every element in an array.

```
Input: [1,2,3,4,5]
Output: 15
```

11. Write a function that finds largest number in an array.

```
Input: [1,2,6,3,4,5]
Output: [6]
```

12. Write a function that returns the sum of all odd numbers in an Array

Hint: What is the second argument in `reduce`?

```
Input: [2,3,4,5]
Output: 8

Input: [1,2,3,4,5]
Output: 9
```
