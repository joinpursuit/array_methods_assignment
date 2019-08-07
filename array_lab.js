// # Exercises
//
// 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.
//
// ```
// Input: [1,2,3,4,5]
// Output: [11,12,13,14,15]
// ```let arr = [1, 2, 3];

/* i must loop throu the array--map is doing that for me
create an empty array to place the new value
i must push the array to a new arrays // dont need
condition the array to increment by 10
console.log the new result
*/
//
let arr = [1,2,3,4,5]
const incrementednum = (num) => {
  return num + 10
}
let answer1 = arr.map(incrementednum)
console.log(answer1);

// 2. Given an array, return a new array where every non-string element is converted to an empty string.
//
// ```
// Input: ["a", 123, "b", "c", {name: "cat"}]
// Output: ["a", "", "b", "c", ""]
// ```
// create a function
//i need a conditon that checks the type of element in the array
 /*must keep string value the same
 must change non strings to empty string ("").
 map the new arrays*/
let array2 = ["a", 123, "b", "c", {name: "cat"}]

const modifiedstr = (el)=> {
  if (typeof el === "string") {
    return el
  } else {
    return ""
  }
}
let answer2 = array2.map(modifiedstr)
console.log(answer2);

//

// 3. Write a function that returns only the even elements in an array of numbers.
//
// ```
// Input: [1,2,3,4,5]
// Output: [2,4]
// ```
let num3 = [1,2,3,4,5]

const evennum = (el)=> {
// let trueeven = el % 2 === 0
  if (el % 2 === 0) {
    return true//even
  }
}
let answer3 = num3.filter(evennum)
console.log(answer3);

// 4. Write a function that checks if all elements in the array are the same.
//
// ```
// Input: [1,1,1,1,1]
// Output: true
//
// Input: [1,1,1,1,2]
// Output: false
// ```
let num4 = [1,1,1,1,1]

const sameArr= (el) => {

  if (el === el){
    return true
  } else {
    return false
  }
}
let answer4 = num4.every(sameArr)
console.log(answer4);
//
// 5. Write a function that returns the sum of every element in an array.
//
// ```
// Input: [1,2,3,4,5]
// Output: 15
// ```

let num5 = [1,2,3,4,5]
// before
const sumArr =(acc, elem) => {

  let answer5 = num5.reduce(sumArr)
  }
  return answer5
  }
let answer5 = num5.reduce(sumArr)
console.log(anwer5)
  }
// now
//

//create function
//variable

// 6. Write a function that finds largest number in an array.
//
// ```
// Input: [1,2,6,3,4,5]
// Output: [6]
// ```
//

let arr6 = [1,2,6,3,4,5]

const callback2 = (acc, elem) => {
  if (acc > elem) {
  //acc = elem
    return acc
};
    return elem
};

const largest = arr6.reduce(callback2);
console.log(largest)



// 7. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.
//
// ```
// Input: [1,0,0,2,0,3,0,0,0]
// Output: 6
// ```
let arr7= [1,0,0,2,0,3,0,0,0]

const countZeroes = (acc, el) => {
  if (el === 0) {
    return acc = acc + 1
  };
    return acc;
};
let answer7 = arr7.reduce((acc,el)
console.log(countZeroes);



console.log(arr7.reduce((acc,el) => { // it console.log output value of this reduce method
  if (el === 0) {
    return acc = acc + 1; //acc ++// returning 0++
  }
    return acc;
}, 0) )

// 8. Write a function that doubles every element in an array.
//
```
Input: [1,2,3,4]
Output: [2,4,6,8]
```
// let arr7 =[1,2,3,4]
// let double= []
// arr7.forEchach(currElem)=>{
//   double.push)curreElm * 2)
// })
// console.log(double)
// }


const double = (arr) => { // let
  return array.map(el=> {
// let answe8 =array.map(el=>{)
    // callback function asking to loop throu the array
    return el * 2// looping again the array and multiple by two
  }

console.log(double(arr))

// 9. Write a function that finds the sum of every element in an array doubled
//
// ```
// Input: [1,2,3,4]
// Output: 20
// ```
let array8= [1,2,3,4]
const sumDouble= (array8 => {
let answer9 = array8.reduce((acc, currEl)=> {
    return acc += currEl * 2 // doubling the sum // acc.push(currEl) push el to the empty array
},)// [] requesting to return output in an array // can also be *2 here too!--},* 2)
} return anwer8
}
console.log(sumDouble (array8))

// let sumOfElem= arr8.reduce(total, currElem)=> {
//
// }

// 10. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.  Return a new array of every element of arr that can be evenly divided by divisor.
//
// ```
// Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
// Output: [5,10,15]
// ```
//
let arr10 = [4,5,6,7,8,9,10,11,12,13,14,15] //dividor is 5 and the array
let divisor = 5

const elementDivBy =(divisor, arr10)=>{
return arr10.filter((el)=> {
  if((el % 5 === 0)) {
    return el
    }
  })
}
console.log(elementDivBy(divisor, arr10))
// 11. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by its index.
//
// ```
// Input: [6,7,8,9]
// Output: [0,7,16,27]
// ```
//
// 12. Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.
//
// ```
// Input: [2,4,6,8,12]
// Output: true
//
// Input: [2,4,6,8,10]
// Output: false
// ```
//
// 13. Write a function that returns the sum of all odd numbers in an Array
//
// Hint: What is the second argument in `reduce`?
//
// ```
// Input: [2,3,4,5]
// Output: 8
//
// Input: [1,2,3,4,5]
// Output: 9
// ```
const addOdd =(num)=> {
  return reduce(accumulator, currEl)=>{

  }

//
// 14. Write a function that returns a new array containing all of the strings in the original array uppercased.
//
// ```
// Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
// Output: ["CAT", "DOG", "BEAR"]
// ```
let arr14= [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
let newarr14=[]

// ## Bonus:
//
// You can write your own array methods!
//
// ```js
// Array.prototype.sayHi = function() {
//   console.log("Hi")
// }
// ```
//
// Now every array that you write has a `sayHi` method that you can call.
//
// ```js
// let myArr = [1,2,3]
// myArr.sayHi() //Logs "Hi" to the console
// ```
//
//
// 1. Using Array.prototype add a new method `myForEach` that mimics the behavior of the built in `forEach`.
//
// 2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.
//
// 3. Write a `myFilter` that behaves the same as `filter`.
//
// 4. Write a `myEvery` that behaves the same as `every`.
//
// 5. Write a `myReduce`. It should use the first element in the array if none is given.
//
// 6. Write a `myJoin` function.
//
// 7. Write a `mySlice` function.
//
// 8. Write a `myTranspose`. This function should transpose a matrix.
//
// ```js
// let mtx = [
//             [1, 2],
//             [3, 4],
//             [5, 6]
//           ]
//
// mtx.myTranspose();
//
// // => [
//         [1, 3, 5],
//         [2, 4, 6]
//        ]
// ```
//
// 9. Write a `myFlatten`. This should take a multi-dimensional array and return it as one array.
//
// ```js
// let arr = [1, 2, [3, 4, 5, [6, 7, 8]]]
//   arr.myFlatten();
//   // => [1, 2, 3, 4, 5, 6, 7, 8]
// ```
