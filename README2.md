# Exercises

<!-- __NOTE:__ DO NOT USE THE BUILT IN METHODS WHEN ASKED TO MAKE THEM!

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
Array.prototype.myMap = function (callback) {
  let output = [];
  this.myForEach (el => {
    output.push(callback(el));
  })
  return output;
}






<!-- 3. Write a 'myFilter` that behave's the same as `filter`.  -->


3.
Array.prototype.myFilter = function (callback) {
  let output = [];
  this.myForEach (el => {
    if(callback(this[el])) {
      output.push(this[el])
    }
  })
  return output
}



<!-- 4. Write a `myEvery`.  -->

4.
Array.prototype.myEvery = function (callback) {
  this.myForEach(el => {
    if(!callback(this[el])) {
      return false;
    }
  })
  return true
}



<!-- 5. Write a `myReduce`. It should use the first element in the array if none is given.  -->

5.
Array.prototype.myReduce = function (callback, acc) {
  let startingIdx = 0;
  if(!acc) {
    acc = this[0];
    startingIdx++
  }
  for(let i = startingIdx; i < this.length; i++) {
    acc = callback(acc, this[i])
  }
  return acc;
}




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
Array.prototype.myTranspose = function (callback) {
  let box = [];
  for(let i = 0; i < this[0].length; i++) {
    box[i] = []
    for(let j = 0; j < this.length; j++) {
      box[i][j] = this[j][i]
    }
  }
  return box
}





<!-- 7. Use `myMap` to build a new array where every element is incremented by 10. -->


7.
let arr = [1, 2, 3, 4, 5]
let sum = arr.myMap(el => { return el + 10;})
// console.log(sum)


<!-- 8. Use `myMap` to build a new array where every non-string element is converted to an empty string.  -->


8.
let newArr = arr.myMap(el => {return el.toString(); })
// console.log(newArr)


<!-- 9. Use `myFilter` to get only the even elements in an array. -->

9.
let even = arr.myFilter(el => {return el % 2 === 0; })
// console.log(even)


<!-- 10. Use `myEvery` to check if all elements in the array are the same.  -->


10.
let sameEl = arr.myEvery(el => {return el})
// console.log(sameEl)



<!-- 11. Use `myReduce` to return the sum of every element in an array.  -->


11.
let sumArr = arr.myReduce(el => {return el + el})
// console.log(sumArr)

<!-- 12. Use `myMap` to build a new array that doubles each element. Then chain `myReduce` to find the product of all the elements.  -->


12.
let doubles = arr.myMap(el => {return el * 2;}).myReduce((acc, el) => {return acc * el})
// console.log(doubles)


<!-- 13. Use `myReduce` to find the largest number in an array.  -->

13.
let largestNum = arr.myReduce((acc, el) => {
  if(acc > el) {
    return acc;
  }else {
    return el
  }
})
// console.log(largestNum)


<!-- 14. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.
Use `myFilter` to return a new array of every element of arr that can be evenly divided by divisor. -->

14.
function elementDivisbleBy (divisor, arr) {
  let newNew = arr.myFilter(el => {return el % divisor === 0;
    });
    return newNew
}

// console.log(elementDivisbleBy(3, [1, 2, 3]))


<!-- 15. Write a `myJoin` function.  -->

15.
Array.prototype.myJoin = function (arg = '') {
  let output = '';
  for(let i = 0; i < this.length; i++) {
    output += this[i]
    if(i !== this.length - 1) {
      output += arg
    }
  }
    return output
}

let arg1 = ['hi', 'you']
// console.log(arg1.myJoin('$'))

<!-- 16. Write a `mySlice` function. -->

16.
Array.prototype.mySlice = function (begin, end) {
  let slice = '';
  if(typeof end === 'undefined') {
    end = this.length;
  }
  for(let i = begin; i < end && i < this.length; i++) {
    slice += this[i];
  }
  return slice;
}

let str = ['hello', 'hi', 'goodbye']
// console.log(str.mySlice(0))


<!-- 17. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.
Use reduce. -->


17.
function countZeroes (arr) {
  let counter = 0;
  for(let i = 0; i < arr.length; i++) {
  if(arr[i] === 0)
  counter++;
}
return counter;

//another way
  // return arr.reduce((acc, el) => {
  //   if(el === 0) {
  //     acc++
  //   }
  //   return acc
  // }, 0)
}

// console.log(countZeroes([0, 0, 1, 2]))

<!-- 18. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by it's index.  -->



18.
function numberTimesIdx (nums) {
  return nums.map((el , i) => {
    return el * i
  })
}



Bonus: Write a `myFlatten`. This should take a multi-dimensional array and return it as one array.
```js
let arr = [1, 2, [3, 4, 5, [6, 7, 8]]]
  arr.myFlatten();
  // => [1, 2, 3, 4, 5, 6, 7, 8]
``` -->
