/* Exercise 1:
Given an array of numbers, write a function that returns a new array where every element is incremented by 10.
Input: [1,2,3,4,5]
Output: [11,12,13,14,15]
*/

console.log(`Exercise 1 :`);

let array1 = [1, 2, 3, 4, 5];
let newArray1 = array1.map(element => element + 10);
console.log(`Initial array : `, array1, `\nnew array : `, newArray1);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);

/* Exercise 2:
Given an array, return a new array where every non-string element is converted to an empty string.
Input: ["a", 123, "b", "c", {name: "cat"}]
Output: ["a", "", "b", "c", ""]
*/

console.log(`Exercise 2 :`);

let array2 = ["a", 123, "b", "c", {name: "cat"}];
let newArray2 = array2.map(element => {
    if (typeof (element) === 'string'){
        return element;
    } else {
        return '';
    }
});
console.log(`Initial array : `, array2, `\nnew array : `, newArray2);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);

/* Exercise 3:
Write a function that returns only the even elements in an array of numbers.
Input: [1,2,3,4,5]
Output: [2,4]
*/

console.log(`Exercise 3 :`);

const evenArray = (array) => {
    return array.filter(element => element % 2 === 0); // if element%2 === 0 is true 
    //this will return true and element will be added to the array
}

let array3 = [1,2,3,4,5,6,7];
let newArray3 = evenArray(array3);
console.log(`Initial array : `, array3, `\nnew array : `, newArray3);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Exercise 4:
Write a function that checks if all elements in the array are the same.
Input: [1,1,1,1,1]
Output: true
Input: [1,1,1,1,2]
Output: false
*/

console.log(`Exercise 4 :`);

const identicElements = (array) => {
    return array.every(element => element === array[0]);
}

let array4_1 = [1,1,1,1,1];
let array4_2 = [1,1,1,2,1];

let result4_1 = identicElements(array4_1);
let result4_2 = identicElements(array4_2);

console.log(`Initial array : `, array4_1, `\nnew array : `, result4_1);
console.log(`Initial array : `, array4_2, `\nnew array : `, result4_2);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Exercise 5 :
Write a function that returns the sum of every element in an array.
Input: [1,2,3,4,5]
Output: 15
*/

console.log(`Exercise 5 :`);

const sumArrayElements = (array) => {
    return array.reduce((sum, element) => sum += element);
}

let array5 = [1, 2, 3, 4, 5];
let result5 = sumArrayElements(array5);
console.log(`Initial array : `, array5, `\nSum of all its elements : `, result5);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 6 :
Write a function that finds largest number in an array.
Input: [1,2,6,3,4,5]
Output: [6]
*/

console.log(`Exercise 6 :`);

const largestArrayElement = (array) => {
    return array.reduce((largestElement, element) => {
        if (largestElement >= element){
            return largestElement;
        } else {
            return element;
        }
    });
}

let array6 = [1, 2, 30, 4, 5];
let result6= largestArrayElement(array6);
console.log(`Initial array : `, array6, `\nThe largest number in that array is : `, result6);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);



/* Question 7:
Write a function countZeroes, which takes an array of numbers as its argument 
and returns the amount of zeroes that occur in it.
Input: [1,0,0,2,0,3,0,0,0]
Output: 6
*/

console.log(`Exercise 7 :`);

let array7 = [1,0,0,2,0,3,0,0,0,0];

const countZeroes = (array, target) => {
    let counter = array.filter(element => element === target)
    return counter.length;
}

let result7 = countZeroes(array7, 0);
console.log(`Initial array : `, array7, `\nThe count of zeros in the array is : `, result7);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 8 :
Write a function that doubles every element in an array.
Input: [1,2,3,4]
Output: [2,4,6,8]
*/

console.log(`Exercise 8 :`);

let array8 = [1,2,3,4];

const multArrayElements = (array, mult) => {
    return array.map(element => element * mult);
}

let newArray8 = multArrayElements(array8, 2);
console.log(`Initial array : `, array8, `\nThe doubled array is : `, newArray8);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 9 :
Write a function that finds the sum of every element in an array doubled
Input: [1,2,3,4]
Output: 20
*/

console.log(`Exercise 9 :`);

let array9 = [1,2,3,4];



let newArray9 = multArrayElements(array9, 2);
let result9 = sumArrayElements(newArray9);
console.log(`Initial array : `, array9, 
            `\nThe sum of the doubled elements of the previous array is : `, result9);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 10 :
Write a function elementDivisibleBy with parameters divisor and arr. 
Return a new array of every element of arr that can be evenly divided by divisor.
Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
Output: [5,10,15]
*/

console.log(`Exercise 10 :`);

const elementDivisibleBy = (devisor, array) => {
    return array.filter(element => element % devisor === 0)
}

let array10 = [4,5,6,7,8,9,10,11,12,13,14,15];
let newArray10 = elementDivisibleBy(5, array10);
console.log(`Initial array : `, array10, `\nThe array is : `, newArray10);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 11 :
Write a numberTimesIdx that uses map and multiples each number in the array by its index.
Input: [6,7,8,9]
Output: [0,7,16,27]
*/

console.log(`Exercise 11 :`);

const numberTimesIdx = (array) => {
    return array.map((element, index) => element * index);
}

let array11 = [6,7,8,9];
let newArray11 = numberTimesIdx(array11);
console.log(`Initial array : `, array11, 
            `\nThe array with elements multilied by their indices is : `, newArray11);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 12 :
Write a function that returns whether or not every value in an array 
is a positive even number that doesn't end in 0.

Input: [2,4,6,8,12]
Output: true
Input: [2,4,6,8,10]
Output: false
*/

console.log(`Exercise 12 :`);

const evenArrayElementsNotEndingWith0 = (array) => {
    return array.every(element => { return (element % 2 === 0 && element % 10 !== 0)});
};

let array12 = [2,4,6,8,12, 30];
let result12 = evenArrayElementsNotEndingWith0(array12);
console.log(`Initial array : `, array12, 
            `\nEvery value in an array is a positive even number that doesn't end in 0 : `, result12);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 13 :
Write a function that returns the sum of all odd numbers in an Array
Hint: What is the second argument in reduce?

Input: [2,3,4,5]
Output: 8
Input: [1,2,3,4,5]
Output: 9
*/

console.log(`Exercise 13 :`);

// solution 1:
const sumOddArrayElements = (array) => {
    return array.reduce((sum, element) => { 
         if (element % 2 === 1) {
            sum += element;
         }
         return sum 
    }, 0);
};

let array13 = [2,3,4,5];
let result13 = sumOddArrayElements(array13);
console.log(`Initial array : `, array13, 
            `\nThe sum of all odd elements of the array is : `, result13);


// Solution 2 :
const filterAndReduce = (array => {
    let filtred = array.filter(element => element % 2 === 1);
    return filtred.reduce((sum, element) => sum + element);
})

let outherResult13 = filterAndReduce(array13);
console.log(`The same result with a different function is : `, outherResult13);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n`);


/* Question 14:
Write a function that returns a new array containing all of the strings in the original array uppercased.
Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
Output: ["CAT", "DOG", "BEAR"]
*/

console.log(`Exercise 14 :`);
// Solution 1:
const upperCased = (array) => {
    let stringArray = array.filter(element => typeof element === 'string');
    return stringArray.map(element => element.toUpperCase());
}

let array14 = [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"];
let newArray14 = upperCased(array14);
console.log(`The Originial array : `, array14, `\nThe return array is : `, newArray14);


