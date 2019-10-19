# Exercises

1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.

```
const addTenToArrray = (arr) => arr.map(num => num + 10)
addTenToArrray([1, 2, 3, 4, 5]));

___________________________________________________________________________________________________

//Another format

const addTen = (arr) => {
 return arr.map((el, i) => {
   return el + 10
 })
}

```

2. Given an array, return a new array where every non-string element is converted to an empty string.

```

const result = (arr) => arr.map(el => typeof el === `string` ? el : el = ``)
console.log(result(["a", 123, "b", "c", {name: "cat"}]));


```

3. Write a function that returns only the even elements in an array of numbers.

```
const evenReturn = (arr) => arr.filter(num => !(num % 2))
evenReturn([1, 2, 3, 4, 5]);
__________________________________________________________________________________________________

//Another format

const evenNum = (arr) => {
  return arr.filter((el) => {
    return el % 2 === 0
  })
}

evenNum([1, 2, 3, 4, 5, 6, 7])


```

4. Write a function that checks if all elements in the array are the same.

```
const allSame = (arr) => arr.every(el => el === arr[0])
console.log(allSame([1, 1, 1, 1, 10]));
___________________________________________________________________________________________________


const allSame = (arr) => {
  return arr.every(el => {
    return el === arr[0]
  })
}
allSame([1, 1, 1, 1, 1]);

```


5. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.

```
const countZeroes = (arr) => {
   let count = 0;
   arr.forEach( (el) => {
       if (el === 0){
           count += 1;
       }
   })
   return count;
}
   
```

6. Write a function that doubles every element in an array.

```
const doubleAllElem = (arr) => arr.map(num => num * 2)

___________________________________________________________________________________________________

const doubleNum = (arr) => {
  return arr.map ((el, i) => {
    return el * 2
  })
}

```


7. Write a function that whether every tripled number in an array is less than 20.

```
const tripleNum = (arr) => {
   let newArr = arr.map((el) => {
       return el * 3;
   })
   return newArr.every((el)=> el < 20)
}


```

8. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.  Return a new array of every element of arr that can be evenly divided by divisor.

```
const elementDivisibleBy = (divisor, arr) => arr.filter(el => !(el % divisor))

```

9. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by its index.

```
const numberTimesIndex = (arr) => arr.map((el, i) => el * i)


```

10. Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.

```
Input: [2,4,6,8,12]
Output: true

Input: [2,4,6,8,10]
Output: false
```w


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
