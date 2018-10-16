# Exercises

__NOTE:__ DO NOT USE THE BUILT IN METHODS WHEN ASKED TO MAKE THEM!

1. Using Array.prototype add a new method `myForEach` that mimics the behaivor of the built in `forEach`.

Array.prototype.myForEach = function(callback) {
 for (let i = 0; i < this.length; i++) {
  callback(this[i])
 }
};

2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.

Array.prototype.myMap = function(callback){
  let arr =[];
 this.myForEach((el) => {
  arr.push(callback(el));
});
return arr
};

3. Write a 'myFilter` that behave's the same as `filter`.

Array.prototype.myFilter=function(callback){
  let filteredArr = [];
  for(let i=0;i<this.length;i++){
    if (callback(this[i])===true){
      filteredArr.push(this[i])
    }
  }return filteredArr
}

4. Write a `myEvery`.

Array.prototype.myEvery=function(callback){
  for(let i=0;i<this.length;i++){
    if (callback(this[i])!==true){
      return false
    }
  } return true
}

5. Write a `myReduce`. It should use the first element in the array if none is given.

// unable to answer

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

// unable to answer

7. Use `myMap` to build a new array where every element is incremented by 10.

console.log(arr.myMap((el)=>{
  return el + 10
}))

8. Use `myMap` to build a new array where every non-string element is converted to an empty string.

let test = [1,2,3,4,"a","b","c"]

test.myMap((el)=>{
  if(typeof(el) !== "string") {
    return("")}
      else{
        return(el)}
});

9. Use `myFilter` to get only the even elements in an array.

arr.myFilter((el)=>{
  return el%2 === 0
})

10. Use `myEvery` to check if all elements in the array are the same.

// because we're testing to see if all the elements to see if they're the same it should be the same as just testing the first //element.

let arr = [1,2,3,4]

arr.myEvery((el)=>{
  return el === this[0]
});

//results in false

11. Use `myReduce` to return the sum of every element in an array.


12. Use `myMap` to build a new array that doubles each element. Then chain `myReduce` to find the product of all the elements.

13. Use `myReduce` to find the largest number in an array.
14. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.
Use `myFilter` to return a new array of every element of arr that can be evenly divided by divisor.
14. Write a `myJoin` function.

Array.prototype.myJoin = function(callback){
  let joinedStr = ""
  for (let i=0;i<this.length;i++){
    if (this[i]){
      joinedStr+=this[i]
    }
  }return joinedStr
}

let exp = ["banana","","words",""]
exp.myJoin()

15. Write a `mySlice` function.

let str = "this is a lot of random words"

// because slice can work without a second argument we have to set a default to the end of the string
String.prototype.mySlice = function(ar1,ar2=this.length-1){
  let sliced = '';
  for(let i=ar1;i<ar2;i++){
    sliced += str[i]
  }return sliced
}

str.mySlice(3,10)

16. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.

function countZeroes (el){
  let count = 0
  for (let i=0; i<arr.length;i++){
    if (arr[i] === 0){
      count++
    }
  }return count
};


17. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by it's index.

let test = [1,2,3,4,5]
// unsure how to use map in this situation
// i would create an empty array let ans = []
//use a for loop that runs through an array
//for (let i=0;i<test;i++){
  ans.push (i*test[i])
}
//return ans

Bonus: Write a `myFlatten`. This should take a multi-dimensional array and return it as one array.
```js
let arr = [1, 2, [3, 4, 5, [6, 7, 8]]]
  arr.myFlatten();
  // => [1, 2, 3, 4, 5, 6, 7, 8]
```
