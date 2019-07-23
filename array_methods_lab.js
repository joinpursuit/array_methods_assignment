console.log(`# Exercises`);

//## Question 1.
console.log(`\n\n\n\n========================================\n## Question 1.\n===============`);
console.log(`/*\n
Given an array of numbers, write a function that returns a new array where every element is incremented by 10.

'''
Input: [1,2,3,4,5]
Output: [11,12,13,14,15]
'''

\n----------------------------------------\n\n`);

//## Question 2.
console.log(`\n\n\n\n========================================\n## Question 2.\n===============`);
console.log(`/*\n
Given an array, return a new array where every non-string element is converted to an empty string.

'''
Input: ["a", 123, "b", "c", {name: "cat"}]
Output: ["a", "", "b", "c", ""]
'''

\n----------------------------------------\n\n`);

//## Question 3.
console.log(`\n\n\n\n========================================\n## Question 3.\n===============`);
console.log(`/*\n
Write a function that returns only the even elements in an array of numbers.

'''
Input: [1,2,3,4,5]
Output: [2,4]
'''

\n----------------------------------------\n\n`);

//## Question 4.
console.log(`\n\n\n\n========================================\n## Question 4.\n===============`);
console.log(`/*\n
Write a function that checks if all elements in the array are the same.

'''
Input: [1,1,1,1,1]
Output: true

Input: [1,1,1,1,2]
Output: false
'''

\n----------------------------------------\n\n`);

//## Question 5.
console.log(`\n\n\n\n========================================\n## Question 5.\n===============`);
console.log(`/*\n
Write a function that returns the sum of every element in an array.

'''
Input: [1,2,3,4,5]
Output: 15
'''

\n----------------------------------------\n\n`);

//## Question 6.
console.log(`\n\n\n\n========================================\n## Question 6.\n===============`);
console.log(`/*\n
Write a function that finds largest number in an array.

'''
Input: [1,2,6,3,4,5]
Output: [6]
'''

\n----------------------------------------\n\n`);

//## Question 7.
console.log(`\n\n\n\n========================================\n## Question 7.\n===============`);
console.log(`/*\n
Write a function 'countZeroes', which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.

'''
Input: [1,0,0,2,0,3,0,0,0]
Output: 6
'''

\n----------------------------------------\n\n`);

//## Question 8.
console.log(`\n\n\n\n========================================\n## Question 8.\n===============`);
console.log(`/*\n
Write a function that doubles every element in an array.

'''
Input: [1,2,3,4]
Output: [2,4,6,8]
'''

\n----------------------------------------\n\n`);

//## Question 9.
console.log(`\n\n\n\n========================================\n## Question 9.\n===============`);
console.log(`/*\n
Write a function that finds the product of every element in an array doubled

'''
Input: [1,2,3,4]
Output: 20
'''

\n----------------------------------------\n\n`);

//## Question 10.
console.log(`\n\n\n\n========================================\n## Question 10.\n===============`);
console.log(`/*\n
Write a function 'elementDivisibleBy' with parameters 'divisor' and 'arr'.  Return a new array of every element of arr that can be evenly divided by divisor.

'''
Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
Output: [5,10,15]
'''

\n----------------------------------------\n\n`);

//## Question 11.
console.log(`\n\n\n\n========================================\n## Question 11.\n===============`);
console.log(`/*\n
Write a 'numberTimesIdx' that uses 'map' and multiples each number in the array by its index.

'''
Input: [6,7,8,9]
Output: [0,7,16,27]
'''

\n----------------------------------------\n\n`);

//## Question 12.
console.log(`\n\n\n\n========================================\n## Question 12.\n===============`);
console.log(`/*\n
Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.

'''
Input: [2,4,6,8,12]
Output: true

Input: [2,4,6,8,10]
Output: false
'''

\n----------------------------------------\n\n`);

//## Question 13.
console.log(`\n\n\n\n========================================\n## Question 13.\n===============`);
console.log(`/*\n
Write a function that returns the sum of all odd numbers in an Array

'''
Input: [1,2,3,4,5]
Output: 9
'''

\n----------------------------------------\n\n`);

//## Question 14.
console.log(`\n\n\n\n========================================\n## Question 14.\n===============`);
console.log(`/*\n
Write a function that returns a new array containing all of the strings in the original array uppercased.

'''
Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
Output: ["CAT", "DOG", "BEAR"]
'''

\n----------------------------------------\n\n`);

//## Bonus:
console.log(`\n\n\n\n========================================\n## Bonus:\n===============`);
console.log(`/*\n
You can write your own array methods!

'''js
Array.prototype.sayHi = function() {
 console.log("Hi")
}
'''

Now every array that you write has a 'sayHi' method that you can call.

'''js
let myArr = [1,2,3]
myArr.sayHi() //logs "Hi" to the console
'''


\n----------------------------------------\n\n`);

//## Question 1.
console.log(`\n\n\n\n========================================\n## Question 1.\n===============`);
console.log(`/*\n
Using Array.prototype add a new method 'myForEach' that mimics the behavior of the built in 'forEach'.

\n----------------------------------------\n\n`);

//## Question 2.
console.log(`\n\n\n\n========================================\n## Question 2.\n===============`);
console.log(`/*\n
Use your 'myForEach' to add 'myMap' to the Array prototype. 'myMap' should behave the same as regular 'map'.

\n----------------------------------------\n\n`);

//## Question 3.
console.log(`\n\n\n\n========================================\n## Question 3.\n===============`);
console.log(`/*\n
Write a 'myFilter' that behaves the same as 'filter'.

\n----------------------------------------\n\n`);

//## Question 4.
console.log(`\n\n\n\n========================================\n## Question 4.\n===============`);
console.log(`/*\n
Write a 'myEvery' that behaves the same as 'every'.

\n----------------------------------------\n\n`);

//## Question 5.
console.log(`\n\n\n\n========================================\n## Question 5.\n===============`);
console.log(`/*\n
Write a 'myReduce'. It should use the first element in the array if none is given.

\n----------------------------------------\n\n`);

//## Question 6.
console.log(`\n\n\n\n========================================\n## Question 6.\n===============`);
console.log(`/*\n
Write a 'myJoin' function.

\n----------------------------------------\n\n`);

//## Question 7.
console.log(`\n\n\n\n========================================\n## Question 7.\n===============`);
console.log(`/*\n
Write a 'mySlice' function.

\n----------------------------------------\n\n`);

//## Question 8.
console.log(`\n\n\n\n========================================\n## Question 8.\n===============`);
console.log(`/*\n
Write a 'myTranspose'. This function should transpose a matrix.

'''js
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
'''

\n----------------------------------------\n\n`);

//## Question 9.
console.log(`\n\n\n\n========================================\n## Question 9.\n===============`);
console.log(`/*\n
Write a 'myFlatten'. This should take a multi-dimensional array and return it as one array.

'''js
let arr = [1, 2, [3, 4, 5, [6, 7, 8]]]
 arr.myFlatten();
// => [1, 2, 3, 4, 5, 6, 7, 8]
'''
\n----------------------------------------\n\n`);
