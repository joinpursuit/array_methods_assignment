# Exercises

__NOTE:__ DO NOT USE THE BUILT IN METHODS WHEN ASKED TO MAKE THEM!

<!-- 1. Using Array.prototype add a new method `myForEach` that mimics the behaivor of the built in `forEach`. -->


1.
let arr = [1, 2, 3, 4];

Array.prototype.myForEach = function(jokes){
  for (let i = 0; i < this.length; i++){
    jokes(this[i]);
  }
};

arr.myForEach(arr => {
  // console.log(name)
})



<!-- 2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.  -->

2.
Array.prototype.myMap = function(callback){
  let result = [];

  this.myForEach(el => {
    result.push(callback(el));
  });
  return result
};

let arr2 = arr.myMap(el => {
  return el * 2;
});

console.log(arr2);

arr.myMap(arr => {
  // console.log(arr)
})






<!-- 3. Write a 'myFilter` that behave's the same as `filter`.  -->


3.
Array.prototype.myFilter = function(callback){
  let filtered = [];
  for(let i = 0; i < this.length; i++){
    let result = func(this[i]);
     if(result){
    filtered.push(this[i])
    }
  }
  return filtered;
};
const idk = function(num){
  return num % 2 === 0
}

let arr3 = arr.myFilter(cur => {
  return cur % 2 !== 1;
});

console.log([1, 2, 3, 4].myFilter(idk))



<!-- 4. Write a `myEvery`.  -->

4.
Array.prototype.myEvery = function (callback) {
  let result = [];
  for(let i = 0; i < this.length; i++){
    let answer = func(this[i]);
    if(answer){
      result.push(this[i])
    }
    // if(!callback(this[i]))
  }
   return (result.length === this.length);
}

console.log(idk(4))
console.log([1, 2, 3, 4].myEvery(idk))

let example = arr.myEvery((el, i, a) => a[0] === el)
console.log(example)
let arr4 = arr.myEvery(el => {
  return el;
})
// console.log(arr4)



<!-- 5. Write a `myReduce`. It should use the first element in the array if none is given.  -->

5.

let arr = [1, 2, 3, 4, 5];

Array.prototype.myReduce = function (callback, element) {

  let acc = element || 0;
  for(let i = element? 0:1 ; i < this.length; i++){
    acc = callback(acc, this[i], i);
  }
  return acc;
}

let sum = arr.myReduce((total, el, i) => total + el);
console.log(sum)

// console.log(array.myReduce((a, b) => {return a + b;}))




<!-- 6. Write a `myTranspose`. This function should transpose a matrix. Exp:
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
``` -->

6.
let matrix = [
                [1, 2],
                [3, 4],
                [5, 6]
]

Array.prototype.myTranspose = function () {
  let newArray = [[],[]];
  for(let i = 0; i < this.length; i++) {
    newArray[0].push(this[i][0]);
    newArray[1].push(this[i][1]);
    console.log(newArray)
  }
  return newArray;
}

console.log(matrix.myTranspose())





<!-- 7. Use `myMap` to build a new array where every element is incremented by 10. -->


7.
let arr = [1, 2, 3, 4, 5]
let sum = arr.myMap(el => {return el + 10;})

console.log(sum)


<!-- 8. Use `myMap` to build a new array where every non-string element is converted to an empty string.  -->


8.
let newArray = arr.myMap(el => {return el.toString();})
console.log(newArray)


<!-- 9. Use `myFilter` to get only the even elements in an array. -->

9.
let arr = [1, 2, 3, 4, 5];
let newArr = arr.myFilter(el => {return el % 2 === 0})
console.log(newArr)


<!-- 10. Use `myEvery` to check if all elements in the array are the same.  -->


10.
let arr = [2, 3, 4, 5, 6]
console.log(arr.myEvery(el => {return el === el[0]}))



<!-- 11. Use `myReduce` to return the sum of every element in an array.  -->


11.
let arr = [2, 3, 4, 5, 6]
console.log(arr.myReduce((sum, el) => {return sum + el;}))

<!-- 12. Use `myMap` to build a new array that doubles each element. Then chain `myReduce` to find the product of all the elements.  -->


12.
let arr = [4, 5, 6, 7, 8]
let doubArr = arr.myMap(el => {return el * 2; }).myReduce((acc, num)) => {return acc * num;}
console.log(doubArr)


<!-- 13. Use `myReduce` to find the largest number in an array.  -->

13.
let arr = [7, 8, 9, 6, 3]
let nums = arr.myMap(num => {return num * 2;}).myReduce((total, num) => {return total * num;})


<!-- 14. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.
Use `myFilter` to return a new array of every element of arr that can be evenly divided by divisor. -->

14.
const elementDivisibleBy = (divisor, arr) => {
  return arr.myFilter(el => {return el % divisor === 0;})
}

console.log(elementDivisibleBy(2, [1, 5, 8, 9]))


<!-- 15. Write a `myJoin` function.  -->

15.
const myJoin = (arr, s = ',') => {
  return arr.myReduce((acc, el) => {return acc + s + el.toString();})
}

console.log(myJoin(['w', 't', 'h'], ','))

<!-- 16. Write a `mySlice` function. -->

16.
Array.prototype.mySlice = function (i, j) {
  return this.filter(el => {
    return (this.indexOf(el) < this.indexOf(this[j]) && this.indexOf(el) >= this.indexOf(this[i]));

  });
}

let arr = ['a', 't', 'r', 'c', 'm'];
let things = arr.mySlice(1, 4);
console.log(things)


<!-- 17. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.
Use reduce. -->


17.
const countZeroes = (arr) => {
  return arr.reduce((stuff, el) => {
    if (el === 0) {
      stuff += 1;
    }
    return stuff;
  }, 0);
}

console.log(countZeroes([0, 5, 9, 0, 4, 0, 3, 2]))

<!-- 18. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by it's index.  -->



18.
const numberTimesIdx = (arr) => {
  return arr.map(el => {return el * arr.indexOf(el)});
}

console.log(numberTimesIdx(arr))



Bonus: Write a `myFlatten`. This should take a multi-dimensional array and return it as one array.
```js
let arr = [1, 2, [3, 4, 5, [6, 7, 8]]]
  arr.myFlatten();
  // => [1, 2, 3, 4, 5, 6, 7, 8]
```
