# Exercises

__NOTE:__ DO NOT USE THE BUILT IN METHODS WHEN ASKED TO MAKE THEM!

1. Using Array.prototype add a new method `myForEach` that mimics the behaivor of the built in `forEach`.

```js
Array.prototype.myForEach = function(myFunc) {
  for (let i = 0; i < this.length; i++) {
    myFunc(this[i])
  }
}
```

2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.
```js
Array.prototype.myForEach = function(myFunc) {
  for (let i = 0; i < this.length; i++) {
    myFunc(this[i])
  }
}
Array.prototype.myMap = function(callback) { //callback - is the name of the function to be called
let result = [];
 this.myForEach(el => {
  result.push(callback(el));
 })
return result;
}
const double = function(item) {
  return item*2;
}
console.log([1,2,3].myMap(double))
```

3. Write a `myFilter` that behaves the same as `filter`.
```js
//myFilter is testing a condition for Each of the elements in the array, and creates a new array with those who answered the condition (returned true). the condition can be stored as a function, and then be called back.
const isOdd = function(num) {
  return num%2!==0;
}
Array.prototype.myFilter = function(func) {
let output = [];
 for (let i = 0; i<this.length; i++) {
   let result = func(this[i]);
   if (result) {
     output.push(this[i]);
   }
 }
 return output;
}
console.log(isOdd(4))
console.log([1,2,3,4].myFilter(isOdd))
```

4. Write a `myEvery`.
```js
const isOdd = function(num) {
  return num%2!==0;
}
Array.prototype.myEvery = function(func) {
let output = [];
 for (let i = 0; i<this.length; i++) {
   let result = func(this[i]);
   if (result) {
     output.push(this[i]);
   }
 }
 return (output.length===this.length);
}
console.log(isOdd(4))
console.log([1,2,3,4].myEvery(isOdd))
```

Another attempt:
```js
const isOdd = function(num) {
  return num%2!==0;
}
Array.prototype.myEvery = function(func) {
let output = [];
 for (let i = 0; i<this.length; i++) {
   let result = func(this[i]);
   if (!result) {
     return false;
   }
 }
 return true;
}
console.log(isOdd(4))
console.log([1,3,3,5].myEvery(isOdd))
```
5. Write a `myReduce`. It should use the first element in the array if none is given.
(It works but I wasn't really able to understand what I did)
```js
Array.prototype.myReduce = function(func, el = this[0]) {
let acc = el;
  for (let i = 0; i < this.length; i++) {
    acc = func(acc,this[i])
  }
  return acc;
}
let array = [1,2,3,4,5];
console.log(array.myReduce((a,b) => {return a+b;}))
```
6. Write a `myTranspose`. This function should transpose a matrix. Exp:
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
Not sure that this is what you wanted -
```js
Array.prototype.myTranspose = function() {
  let result = [[],[]];
  for (let i = 0; i<this.length; i++) {
  result[0].push(this[i][0]);
  result[1].push(this[i][1]);
  console.log(result)
}
return result;
}

console.log(mtx.myTranspose());
```

7. Use `myMap` to build a new array where every element is incremented by 10.
```js
let arr = [1,2,3,4,5];
let newArr = arr.myMap(el => {return el + 10;})
console.log(newArr)
```
8. Use `myMap` to build a new array where every non-string element is converted to an empty string.
```js
let arr = [1,2,3,4,5];
let newArr = arr.myMap(el => {return el.toString();})
console.log(newArr)
```
9. Use `myFilter` to get only the even elements in an array.
```js
let arr = [1,2,3,4,5];
let newArr = arr.myFilter(el => {return el%2===0})
console.log(newArr)
```
10. Use `myEvery` to check if all elements in the array are the same.
```js
let arr = [1,1,1,1,4];
console.log(arr.myEvery(el => {return el===el[0]}))
```
11. Use `myReduce` to return the sum of every element in an array.
```js
let arr = [1,1,1,1,4];
console.log(arr.myReduce((sum, el) => { return sum+el; }))
```
12. Use `myMap` to build a new array that doubles each element. Then chain `myReduce` to find the product of all the elements.
```js
let arr = [1,1,1,1,4];
let doubleProductArr = arr.myMap( el => { return el*2; }).myReduce((acc, num)) => { return acc*num; }
console.log(doubleProductArr)

```
13. Use `myReduce` to find the largest number in an array.
```js
let arr = [1,1,1,1,4];
let doubleProduct = arr
    .map(num => {return num*2; })
    .reduce((total,num) => {return total*num; })
console.log(doubleProduct)
```
14. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.
Use `myFilter` to return a new array of every element of arr that can be evenly divided by divisor.
```js
const elementDivisibleBy = (divisor,arr) => {
  return arr.myFilter(el => {return el%divisor===0; })
}
console.log(elementDivisibleBy(2,[1,3,6,5]))
```
14. Write a `myJoin` function.
(disclaimer: it works but it happened by mistake. I don't understand fully why this works)
Function:
```js
const myJoin = (arr,s=',') => {
  return arr.reduce((acc,el) => {return acc+s+el.toString();})
}
console.log(myJoin(['w','t','h'],','))
```

Method:
```js
Array.prototype.myJoin = function(s) {
  return this.reduce((acc,el) => {return acc+s+el.toString();});
}
let arr = ['w','t','h'];
let joined = arr.myJoin('');
console.log(joined)
```
15. Write a `mySlice` function.
```js
Array.prototype.mySlice = function(i,j) {
  return this.filter( el => {
    return (this.indexOf(el)<this.indexOf(this[j])
            && this.indexOf(el)>=this.indexOf(this[i]));
  });
}
let arr = ['b','u','l','z','i'];
let ulz = arr.mySlice(1,4);
console.log(ulz)
```
16. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.
Use reduce.

I had to use here Initial value=0, and not sure why-please explain!
```js
const countZeroes = (arr) => {
  return arr.reduce((totalC,el) => {
  if (el===0) {
    totalC+=1;
  }
  return totalC;
},0);
}
console.log(countZeroes([0,0,0,0,4,3]))
```
17. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by it's index.
```js
const numberTimesIdx = (arr) => {
  return arr.map(el => {return el*arr.indexOf(el)});
}
let arr = [1,2,3,4,5];
console.log(numberTimesIdx(arr))
```
Bonus: Write a `myFlatten`. This should take a multi-dimensional array and return it as one array.
```js
let arr = [1, 2, [3, 4, 5, [6, 7, 8]]]
  arr.myFlatten();
  // => [1, 2, 3, 4, 5, 6, 7, 8]
```
My best attempt is cutting close but doesn't work:

```js
let arr = [1, 2, [3, 4, 5, [6, 7, 8]]]

const myFlatten = (arr) => {
  let output = [];
  for (let i=0; i<arr.length; i++){
    if (arr[i].length>1) {
      output.push(...arr[i])
    } else {
      output.push(arr[i]);
    }
  }
  return output;
   }

console.log(myFlatten(arr));
```
