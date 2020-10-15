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
