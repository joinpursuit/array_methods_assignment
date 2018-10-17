# Exercises

__NOTE:__ DO NOT USE THE BUILT IN METHODS WHEN ASKED TO MAKE THEM!

1. Using Array.prototype add a new method `myForEach` that mimics the behaivor of the built in `forEach`.

Array.prototype.myForEach = function(callback) {
for(let i = 0; i < names.length; i++) {
   callback(this[i]);
}
}
Array(1,2,3)

2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.

Array.prototype.myMap = function(callback) {
  let output = []
for(let i = 0; i < arr.length; i++) {
    callback(output.push(this[i]));
}return output
}

Array(1,2,3)

//I don't understand what map does, I can parrot that it takes an array, performs a function, and returns a new array; but this does not equate understanding.

3. Write a 'myFilter' that behaves the same as filter.

Array.prototype.myFilter = function(callback){
  let output = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i]){
      output.push(i)
    }
  }
}

4. Write a `myEvery`.
Array.prototype.myEvery = function(callback){
  for(i = 0; i < arr.length; i++){
    if( arr[i] === arr[j]){
      return true
    }
  }
}
//don't understand the assignment

5. Write a `myReduce`. It should use the first element in the array if none is given.

Array.prototype.myReduce = function(callback){
  let output =[]
  for(i=0;i<arr.length;i++){
    for(j=0; j<arr.length;j++){
      if(arr[i]===arr[j])
      return output+=arr[i]
    }
  }
}



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
const myTranspose = function(mtx){
  let result = []
  for(i=0; i< mtx.length; i+2){
    result.push(mtx[i])
  }
}

7. Use `myMap` to build a new array where every element is incremented by 10.

let arr = [1,2,3];
arr.map(el => {
  return el + 10;
  });

8. Use `myMap` to build a new array where every non-string element is converted to an empty string.

let arr = ['a', 2, 5, 'b']

arr.map(el=> {
  let result = []
  if (arr[i] != number){
  return result.push(arr[i])
  } else {
    return result.push("")
{
    })

9. Use `myFilter` to get only the even elements in an array.

Array.prototype.myFilter = function(arr) {
  let output = [];
  if(arr[i]%2 === 0){
    output.push(arr[i])
  }
  return output
}

10. Use `myEvery` to check if all elements in the array are the same.

Array.prototype.myEvery = function(arr){
  for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
      if(arr[i]===arr[j]){
        return true
      }
    }
  }
}


11. Use `myReduce` to return the sum of every element in an array.

Array.prototype.myReduce = function(arr){
  result = 0
  for(i=0;i<arr.length;i++){
    result += arr[i]
  }
}

12. Use `myMap` to build a new array that doubles each element. Then chain `myReduce` to find the product of all the elements.

Array.prototype.myMap.myReduce = function(arr){
let sum = 0
  let output = []
  for(i=0;i < arr.length; i++){
    output.push(arr[i] * 2 )
    for(i = 0; i < arr.length; i++{
      sum+= output.length
      })
  }return sum
}

13. Use `myReduce` to find the largest number in an array.

Array.prototype.myReduce = function(arr){
  let result = 0
  for(i=0;i<arr.length;i++){
  if(arr[i]>result){
    result = arr[i]
  }
}return result
}

15. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.

let elementDivisibleBy = function(divisor, arr){

}

Use `myFilter` to return a new array of every element of arr that can be evenly divided by divisor.

let elementDivisibleBy = function(divisor, arr){
  let output = [];
  arr.myFilter(divisor =>{
    if(arr[i]%divisor === 0){
    output.push(arr[i])
  }
    })
    return output
}


16. Write a `myJoin` function.

let myJoin = function(arr){
result = ""
  result+= arr[i]
}
return result

17. Write a `mySlice` function.

let mySlice = function(arr, num1, num2){
  result = []
  for(i=num1; i<num2; i++){
    result.push(arr[i])
  }return result
}

18. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.

let countZeroes = function(arr){
  let count = 0
  for(i=0; i<arr.length;i++){
    if(arr[i]===0){
      count++
    }
  }return count
}

Use reduce.//huh?
19. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by it's index.

let numberTimesIdx = arr.map(arr =>{
  return (arr[i] * i)
})

Bonus:newp Write a `myFlatten`. This should take a multi-dimensional array and return it as one array.
```js
let arr = [1, 2, [3, 4, 5, [6, 7, 8]]]
  arr.myFlatten();
  // => [1, 2, 3, 4, 5, 6, 7, 8]
```
