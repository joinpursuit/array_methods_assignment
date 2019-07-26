// # Exercises

// 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.

// ```
// Input: [1,2,3,4,5]
// Output: [11,12,13,14,15]
// ```
console.log("Question 1: ")
let array1 = [1, 2, 3, 4, 5];
let output1 = array1.map( (currentElem) => {
    return currentElem+=10;
});
console.log(output1);
console.log("------------------------------------------------------------")
// 2. Given an array, return a new array where every non-string element is converted to an empty string.

// ```
// Input: ["a", 123, "b", "c", {name: "cat"}]
// Output: ["a", "", "b", "c", ""]
// ```
console.log("Question 2: ")
let array2 = [ "a", 123, "b", "c", {name: "cat"} ];
let output2 = array2.map( (currentElem) => {
    if(typeof currentElem !== 'string') {
        return "";
    } else {
        return currentElem;
    }
} )
console.log(output2);
console.log("------------------------------------------------------------")
// 3. Write a function that returns only the even elements in an array of numbers.

// ```
// Input: [1,2,3,4,5]
// Output: [2,4]
// ```
console.log("Question 3: ")
let array3 = [1, 2, 3, 4, 5];
const checkIfEven = (i) => {
    return i % 2 === 0
} 
let output3 = array3.filter(checkIfEven);
console.log(output3);
console.log("------------------------------------------------------------")
// 4. Write a function that checks if all elements in the array are the same.

// ```
// Input: [1,1,1,1,1]
// Output: true

// Input: [1,1,1,1,2]
// Output: false
// ```
console.log("Question 4: ")
let array4 = [1, 1, 1, 1, 1, 2];
const areAllTheElementsTheSame = (currentValue) => {
    //console.log(currentValue)
    return currentValue === array4[0]; //array4 is global
}
let output4 = array4.every(areAllTheElementsTheSame);
console.log(output4);
console.log("------------------------------------------------------------")
// 5. Write a function that returns the sum of every element in an array.
// ```
// Input: [1,2,3,4,5]
// Output: 15
// ```
console.log("Question 5: ")
let array5 = [1, 2, 3, 4, 5];
const adder = (total, currentElem) => {
    return total + currentElem;
}
let sum = ( array5.reduce(adder, 0) );
console.log(sum);
console.log("------------------------------------------------------------")
// 6. Write a function that finds largest number in an array.

// ```
// Input: [1,2,6,3,4,5]
// Output: [6]
// ```
console.log("Question 6: ");
let array6 = [1, 2, 6, 3, 4, 5]
const largest = array6.reduce( (total, currentElem) => {
    if(currentElem > total) {
        return currentElem;
    } else {
        return total;
    }
})
console.log(largest);
console.log("------------------------------------------------------------");
// 7. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.

// ```
// Input: [1,0,0,2,0,3,0,0,0]
// Output: 6
// ```
console.log("Question 7: ");
let array7 = [1, 0, 0, 2, 0, 3, 0, 0, 0];
let counter7 = 0;
array7.forEach(function(element) {
    if(element === 0) {
        counter7++;
    }
});
console.log(counter7);
console.log("------------------------------------------------------------");
// 8. Write a function that doubles every element in an array.

// ```
// Input: [1,2,3,4]
// Output: [2,4,6,8]
// ```
console.log("Question 8: ");
let array8 = [1, 2, 3, 4];
let output8 = array8.map( (currentElem) => {
    return currentElem *= 2
})
console.log(output8);
console.log("------------------------------------------------------------");
// 9. Write a function that finds the sum of every element in an array doubled

// ```
// Input: [1,2,3,4]
// Output: 20
// ```
console.log("Question 9: ");
let array9 = [1, 2, 3, 4];
const sum9 = (total, currentElem) => {
    return total + currentElem;
}
let final = ( array9.reduce(sum9, 0) * 2 );
console.log(final);
console.log("------------------------------------------------------------");
// 10. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.  Return a new array of every element of arr that can be evenly divided by divisor.

// ```
// Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
// Output: [5,10,15]
// ```
console.log("Question 10: ");
let array10 = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const elementDivisibleBy = (divisor) => {
    return divisor % 5 === 0;
}
let output10 = array10.filter(elementDivisibleBy)
console.log(output10);
console.log("------------------------------------------------------------");
// 11. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by its index.

// ```
// Input: [6,7,8,9]
// Output: [0,7,16,27]
// ```
// console.log("Question 11: ");
// let array11 = [6, 7, 8, 9];
// let counter11 = -1;
// const numberTimesIdx = array11.map( (currentElem, counter11) => {
//     ++counter11;
//     return currentElem *= counter11;
// });
// console.log(numberTimesIdx);
// console.log("------------------------------------------------------------");


//function way
console.log("Question 11: ");
let array11 = [6, 7, 8, 9];
const numberTimesIdx = array11.map( (currentElem, counter11 = -1) => {
    ++counter11;
    return currentElem *= counter11;
});
console.log(numberTimesIdx);
console.log("------------------------------------------------------------");
// 12. Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.

// ```
// Input: [2,4,6,8,12]
// Output: true

// Input: [2,4,6,8,10]
// Output: false
// ```
// console.log("Question 12: ");
// let array12 = [2, 4, 6, 8, 12];
// const function12 = (currentValue) => {
//     //console.log(currentValue)
//     return (currentValue % 2 === 0 && currentValue % 10 !== 0) ; //array12 is global
// }
// let output12 = array12.every(function12);
//console.log(output12);


//putting it into one function
let array12 = [2, 4, 6, 8, 12];
const newFunction12 = (array12) => {
    let answer = array12.every((currentValue) => {
        if(currentValue % 2 === 0 && currentValue % 10 !== 0) {
            return currentValue
        }
    })
    return answer;
}
console.log(newFunction12(array12))
console.log("------------------------------------------------------------");
// 13. Write a function that returns the sum of all odd numbers in an Array

// Hint: What is the second argument in `reduce`?

// ```
// Input: [2,3,4,5]
// Output: 8

// Input: [1,2,3,4,5]
// Output: 9
// ```
console.log("Question 13: ");
let array13 = [2, 3, 4, 5];
const oddSum = (total, currentElem) => {
    if(currentElem % 2 !== 0) {
        return total + currentElem;
    }
    else {
        return total;
    }
}
let sum13 = ( array13.reduce(oddSum, 0) );
console.log(sum13);
console.log("------------------------------------------------------------");
// 14. Write a function that returns a new array containing all of the strings in the original array uppercased.

// ```
// Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
// Output: ["CAT", "DOG", "BEAR"]
// ```
console.log("Question 14: ");
let array14 = [ {}, 1, "", 3, ["hi"], {name: "dog"}, "dog", "bear" ];
let temp14 = array14.map( (currentElem) => {
    if(typeof currentElem === 'string') return currentElem.toUpperCase();
} );
let ifNotString = (currentElem) => {
    if(typeof currentElem === 'string') {
        return true;
    }
}
let output14 = temp14.filter(ifNotString);
console.log(output14);
//const onlyEven = (arr) => arr.filter(i => !(i % 2)) example how to answer the questions

// ## Bonus:

// You can write your own array methods!

// ```js
// Array.prototype.sayHi = function() {
//   console.log("Hi")
// }
// ```

// Now every array that you write has a `sayHi` method that you can call.

// ```js
// let myArr = [1,2,3]
// myArr.sayHi() //Logs "Hi" to the console
// ```


// 1. Using Array.prototype add a new method `myForEach` that mimics the behavior of the built in `forEach`.

// 2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.

// 3. Write a `myFilter` that behaves the same as `filter`.

// 4. Write a `myEvery` that behaves the same as `every`.

// 5. Write a `myReduce`. It should use the first element in the array if none is given.

// 6. Write a `myJoin` function.

// 7. Write a `mySlice` function.

// 8. Write a `myTranspose`. This function should transpose a matrix.

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

// ```js
// let arr = [1, 2, [3, 4, 5, [6, 7, 8]]]
//   arr.myFlatten();
//   // => [1, 2, 3, 4, 5, 6, 7, 8]
// ```