/*1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.

```
Input: [1,2,3,4,5]
Output: [11,12,13,14,15]
```*/


function inBy10(arr){
let newArr = arr.map((elem)=>{return elem + 10});
return newArr}
console.log(inBy10([1,2,3,4,5]));

/*2. Given an array, return a new array where every non-string element is converted to an empty string.

```
Input: ["a", 123, "b", "c", {name: "cat"}]
Output: ["a", "", "b", "c", ""]
```*/

function nonstring(arr){
newArr = arr.map((elem)=>{if(typeof elem !== "string"){
  return ""}
  else{
    return elem
  }
})
return newArr
}
console.log(nonstring(["a", 123, "b", "c", {name: "cat"}]))

/*3. Write a function that returns only the even elements in an array of numbers.

```
Input: [1,2,3,4,5]
Output: [2,4]
```*/
function even(arr){

newArr = arr.filter((elem)=>{
    return elem % 2 === 0;
  })
  return newArr
}
console.log(even([1,2,3,4,5]));

/*4. Write a function that checks if all elements in the array are the same.

```
Input: [1,1,1,1,1]
Output: true

Input: [1,1,1,1,2]
Output: false
```*/

function same(arr){

let result = arr.every((elem)=>{
    return elem === arr[0];
  })
return result
}

console.log(same([1,1,1,1,1]));

/*5. Write a function that returns the sum of every element in an array.

```
Input: [1,2,3,4,5]
Output: 15
```*/
function sum(arr){

result = arr.reduce((total, elem)=>{
    return total += elem;
  })
  return result}
console.log(sum([1,2,3,4,5]));

/*6. Write a function that finds largest number in an array.

```
Input: [1,2,6,3,4,5]
Output: [6]
```*/

function large(arr){
result = arr.reduce((largest, elem)=>{
  if(elem > largest){
     return elem;
  }else{
  return largest }
  })
return result;
}
console.log(large([1,2,6,3,4,5]));

/*7. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.

```
Input: [1,0,0,2,0,3,0,0,0]
Output: 6
```
*/

function countZeroes(arr){

let result = arr.reduce((total, elem)=>{
  if(elem === 0){
     total++}
     return total;
  },0)

  return result}
console.log(countZeroes([1,0,0,2,0,3,0,0,0]));

/*8. Write a function that doubles every element in an array.

```
Input: [1,2,3,4]
Output: [2,4,6,8]
```*/
function double(arr){

let result = arr.map((elem)=>{
  return elem * 2
})
return result;
}
console.log(double([1,2,3,4]));

/*9. Write a function that finds the sum of every element in an array doubled

```
Input: [1,2,3,4]
Output: 20
```*/

function adouble(arr){

result = arr.reduce((total ,elem)=>{
  return total += elem * 2
},0)
return result
}
console.log(adouble([1,2,3,4]));

/*10. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.  Return a new array of every element of arr that can be evenly divided by divisor.

```
Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
Output: [5,10,15]
```*/

function elementDivisibleBy(divisor , arr){
  newArr = arr.filter((elem)=>{ return elem % divisor === 0

  })
  return newArr;
}
console.log(elementDivisibleBy(5,[4,5,6,7,8,9,10,11,12,13,14,15]))

/*11. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by its index.

```
Input: [6,7,8,9]
Output: [0,7,16,27]
```*/

function numberTimesIdx(arr){

let result = arr.map((elem,index)=>{
  return elem * index
})
return result
}
console.log(numberTimesIdx([6,7,8,9]));

/*12. Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.

```
Input: [2,4,6,8,12]
Output: true

Input: [2,4,6,8,10]
Output: false
```*/

function postive(arr){

result = arr.every((elem)=>{
  return elem % 2 === 0 && elem > 0 && elem % 10 !== 0
})
return result}
console.log(postive([2,4,6,8,12]));

/*13. Write a function that returns the sum of all odd numbers in an Array

Hint: What is the second argument in `reduce`?

```
Input: [2,3,4,5]
Output: 8

Input: [1,2,3,4,5]
Output: 9
```*/

function odd(arr){
result = arr.reduce((total ,elem)=>{
  if(elem %2 === 1){
  total += elem}
  return total
},0)

return result

}
console.log(odd([1,2,3,4,5]));

/*14. Write a function that returns a new array containing all of the strings in the original array uppercased.

```
Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
Output: ["CAT", "DOG", "BEAR"]
``` */

function strings(arr){


result = arr.filter((elem)=>{
  if(typeof elem === "string"){
  return elem}
}).map((elem)=>{return elem.toUpperCase()})
return result
}
console.log(strings([{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]));
