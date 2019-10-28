// # Exercises

// 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.

// ```
// Input: [1,2,3,4,5]
// Output: [11,12,13,14,15]
// ```
const incTen = (arr) => {
    let newArr = [];
    arr.forEach( (el) => {
        newArr.push(el += 10);
    })
    return newArr;
}
console.log(incTen([1,2,3,4,5]))

// 2. Given an array, return a new array where every non-string element is converted to an empty string.

// ```
// Input: ["a", 123, "b", "c", {name: "cat"}]
// Output: ["a", "", "b", "c", ""]
// ```
const emptyStr = (arr) => {
    return arr.map( (el) => {
        if (typeof el === 'string'){
            return el;
        } else {
            return "";
        }
    })
}
console.log(emptyStr(["a", 123, "b", "c", {name: "cat"}]))

// 3. Write a function that returns only the even elements in an array of numbers.

// ```
// Input: [1,2,3,4,5]
// Output: [2,4]
// ```
const evenNums = (arr) =>{
    return arr.filter((el) => {
        if ( el % 2 === 0){
            return el;
        }
    })
}
console.log(evenNums([1,2,3,4,5]));

// 4. Write a function that checks if all elements in the array are the same.

// ```
// Input: [1,1,1,1,1]
// Output: true

// Input: [1,1,1,1,2]
// Output: false
// ```
const sameElements = (arr) =>{
    return arr.every((el) => {
        if(el === arr[el]){
            return true;
        }
    })
}
console.log(sameElements([1,1,1,1,1]));
console.log(sameElements([1,1,1,1,2]));

// 5. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.

// ```
// Input: [1,0,0,2,0,3,0,0,0]
// Output: 6
// ```
const countZeroes = (arr) => {
    let count = 0;
    arr.forEach( (el) => {
        if (el === 0){
            count += 1;
        }
    })
    return count;
}
console.log(countZeroes([1,0,0,2,0,3,0,0,0]));

// 6. Write a function that doubles every element in an array.

// ```
// Input: [1,2,3,4]
// Output: [2,4,6,8]
// ```
const double = arr => {
    return arr.map((el) =>{
        return el * 2
    })
}
console.log(double([1, 2, 3, 4]));

// 7. Write a function that whether every tripled number in an array is less than 20.

// ```
// Input: [1,2,4,7]
// Output: false (7 * 3 = 21)

// Input: [3,4,5]
// Output: true
// ```
const tripleNum = (arr) => {
    let newArr = arr.map((el) => {
        return el * 3;
    })
    return newArr.every((el)=> el < 20)
}
console.log(tripleNum([1,2,4,7]));  //false
console.log(tripleNum([3,4,5]));  //true

// 8. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.  Return a new array of every element of arr that can be evenly divided by divisor.

// ```
// Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
// Output: [5,10,15]
// ```
const elementDivisibleBy = (divisor, arr) => {
    return arr.filter((el) => {
        if(el % divisor === 0){
            return el;
        }
    })
}
console.log(elementDivisibleBy(5, [4,5,6,7,8,9,10,11,12,13,14,15]));

// 9. Write a function `numberTimesIdx` that uses `map` and multiples each number in the array by its index.

// ```
// Input: [6,7,8,9]
// Output: [0,7,16,27]
// ```
const numberTimesIdx = (arr) => {
    return arr.map((el, i) => {
        return el * i;
    })
}
console.log(numberTimesIdx([6,7,8,9]));

// 10. Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.

// ```
// Input: [2,4,6,8,12]
// Output: true

// Input: [2,4,6,8,10]
// Output: false
// ```
const posEvenNum = (arr) => {
    return arr.every((el)=>{
        if(el > 0 && el % 10 !== 0 ){
            return el;
        }
    })
}
console.log(posEvenNum([2,4,6,8,12]));  // true
console.log(posEvenNum([2,4,6,8,10]));  // false

// 11. Write a function that returns a new array containing all of the strings in the original array uppercased.

// ```
// Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
// Output: ["CAT", "DOG", "BEAR"]
// ```
const upperCase = arr => {
    let newArr = arr.filter((el)=>{
        if(typeof el === 'string'){
            return el;
        }
    })
    return newArr.map((el)=>{
        return el.toUpperCase();
    })
}
console.log(upperCase([{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]));

// ## Bonus:

// You can write your own array methods!

// ```js
Array.prototype.sayHi = function() {
    console.log(this)
    console.log("Hi")
}
// ```

// Now every array that you write has a `sayHi` method that you can call.

// ```js
let myArr = [1,2,3]
myArr.sayHi()   //Logs "Hi" to the console
// ```


// 1. Using Array.prototype add a new method `myForEach` that mimics the behavior of the built in `forEach`.
Array.prototype.myForEach = function(cb){
    for(let i = 0; i < this.length; i++){
        cb(this[i]);
    }
}


// 2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.
Array.prototype.myMap = function(cb){
    let result = [];
    for (let i = 0; i < this.length; i++){
        result.push(this[i]);
    }
    return result;
}



// 3. Write a `myFilter` that behaves the same as `filter`.
Array.prototype.myFilter = function(callback){
    let result = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i])){
            result.push(this[i]);
        } 
    }
    return result;
}



// 4. Write a `myEvery` that behaves the same as `every`.
Array.prototype.myEvery = function (callback){
    let bool = true;
    for(let i = 0; i < this.length; i++){
        if(!callback(this[i])){
            bool = false;
        }
    }
    return bool;
}


// 5. Write a `myReduce`. It should use the first element in the array if none is given.
Array.prototype.myReduce = function (cb){
    let acc = initialValue || undefined;
    for(let i = 0; i < this.length; i++){
        if (acc){
            acc = callback.call(acc,acc,this[i], i, this);
        } else{
            acc = this[i];
        }
    }
    return acc;
}

// 6. Write a `myJoin` function.
Array.prototype.myJoin = function (strChar){
    let str = "";
    for (let i = 0; i < this.length; i++){
        
    }
    return str;
}
let strArr = ["Hello","My","Name","Is"];
console.log(strArr.myJoin("*"));

console.log([1,2,3,4].join("-"));


// 7. Write a `mySlice` function.
Array.prototype.mySlice = function (cb){
    
}

// 8. Write a `myTranspose`. This function should transpose a matrix.
Array.prototype.myTranspose = function (cb){
    
}

// ```js
// let mtx = [
//             [1, 2],
//             [3, 4],
//             [5, 6]
//           ]

// mtx.myTranspose();

// // => [
//         [1, 3, 5],
//         [2, 4, 6]
//        ]
// ```

// 9. Write a `myFlatten`. This should take a multi-dimensional array and return it as one array.
Array.prototype.myFlatten = function (cb){
    
}

// ```js
// let arr = [1, 2, [3, 4, 5, [6, 7, 8]]]
//   arr.myFlatten();
//   // => [1, 2, 3, 4, 5, 6, 7, 8]
// ```


// 10. Write a function that returns the sum of every element in an array.

// ```
// Input: [1,2,3,4,5]
// Output: 15
// ```

const everyElem = (arr) => {
        let sum = 0;
        arr.myForEach((el) => {
            sum += el;        
        })
        return sum;
}
console.log(everyElem([1,2,3,4,5]));


// 11. Write a function that finds largest number in an array.

// ```
// Input: [1,2,6,3,4,5]
// Output: [6]
// ```
const largestNum = (arr) => {
    let first = arr[0];
    arr.myForEach((el)=>{
        if(el > first){
            first = el;
        }
    })
    return first;
}
console.log(largestNum([1,2,6,3,4,5]));

// 12. Write a function that returns the sum of all odd numbers in an Array

const sumOddNum = (arr) => {
    let sumOdd = 0;
    arr.myForEach((el)=>{
        if(el % 2 === 1){
            sumOdd += el;
        }
    })
    return sumOdd;
}
console.log(sumOddNum([2,3,4,5]));
console.log(sumOddNum([1,2,3,4,5]));

// Hint: What is the second argument in `reduce`?

// ```
// Input: [2,3,4,5]
// Output: 8

// Input: [1,2,3,4,5]
// Output: 9
// ```
