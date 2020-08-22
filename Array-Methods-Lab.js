// 1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.

// ```
// Input: [1,2,3,4,5]
// Output: [11,12,13,14,15]
// ```

let array1 = [1,2,3,4,5];

const Increment = array1.map(sum => {
    return sum + 10;
})

console.log('1)', Increment);

// 2. Given an array, return a new array where every non-string element is converted to an empty string.

// ```
// Input: ["a", 123, "b", "c", {name: "cat"}]
// Output: ["a", "", "b", "c", ""]
// ```

let array2 = ["a", 123, "b", "c", {name: "cat"}]

const Strings = array2.map(el =>{
    if (typeof el === "string"){
        return el;
    }else{
        return "";
    }
})
//return modified element

console.log('2)', Strings)


// 3. Write a function that returns only the even elements in an array of numbers.

// ```
// Input: [1,2,3,4,5]
// Output: [2,4]
// ```

let array3 = [1,2,3,4,5]

const filter = array3.filter(el =>{
    return el % 2 === 0;
})
//return boolean value

console.log('3)', filter)

// 4. Write a function that checks if all elements in the array are the same.

// ```
// Input: [1,1,1,1,1]
// Output: true

// Input: [1,1,1,1,2]
// Output: false
// ```

let array4 = [1,1,1,1,1,12]

const CheckSame = array4.every(el =>{
    return el === array4[0];
})
//time complexity O(n)

console.log('4)', CheckSame);

// 5. Write a function that returns the sum of every element in an array.

// ```
// Input: [1,2,3,4,5]
// Output: 15
// ```

let array5 =[1,2,3,4,5]
const sumArray = array5.reduce((acc, el) => {
    return acc + el;
}, 0);

console.log('5)', sumArray);




// 6. Write a function that finds largest number in an array.

// ```
// Input: [1,2,6,3,4,5]
// Output: [6]
// ```

let array6 = [1,2,6,3,4,5]

let largetstNum = array6.reduce((acc,el) =>{
    if (acc> el){
        return acc
    }else{
        return el
    }
})
console.log('6)',largetstNum)


// 7. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.

// ```
// Input: [1,0,0,2,0,3,0,0,0]
// Output: 6
// ```

let array7 = [1,0,0,2,0,3,0,0,0]

const countZeroes = (array) => {
    return array.filter(el => el === 0).length;
}
console.log('7)', countZeroes(array7));

// 8. Write a function that doubles every element in an array.

// ```
// Input: [1,2,3,4]
// Output: [2,4,6,8]
// ```

let array8 = [1,2,3,4]
const doubleEl = (array) => {
    let doubled = array.map(el =>{
        return el * 2;
    })
    return doubled;
}
//map callback should return the modified element

console.log('8)',doubleEl(array8));

// 9. Write a function that finds the sum of every element in an array doubled

// ```
// Input: [1,2,3,4]
// Output: 20
// ```

let array9 = [1,2,3,4];

const SumDouble = (array) =>{
    let sum = array.reduce((acc, el) =>{
        return acc + el;
    })
    return sum * 2;
}
console.log('9)',SumDouble(array9));

// 10. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.  
//Return a new array of every element of arr that can be evenly divided by divisor.

// ```
// Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
// Output: [5,10,15]
// ```

let array10 = [4,5,6,7,8,9,10,1,12,13,14,15]

const elementDivisibleBy = (divisor ,array) => {
    let output = array.filter(el => el % divisor === 0)
    return output;
}

console.log('10)',elementDivisibleBy(5,array10));

// 11. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by its index.

// ```
// Input: [6,7,8,9]
// Output: [0,7,16,27]
// ```
let array11 = [6,7,8,9]
const numberTimesIdx = (array) =>{
    let numIdx = array.map((x,i)=> x * i )
    return numIdx;
}

console.log('11)',numberTimesIdx( array11))

// 12. Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.

// ```
// Input: [2,4,6,8,12]
// Output: true

// Input: [2,4,6,8,10]
// Output: false
// ```

let array12A = [2,4,6,8,12]
let array12B = [2,4,6,8,10]

const positiveEven = (array) => {
    let check = array.every( (currentEl) => (currentEl % 2 === 0 && currentEl % 10 !== 0) 
    // {
    //     if (currentEl % 2 === 0 && currentEl % 10 !== 0 ){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }
    )
    return check;
}

console.log('12A)',positiveEven(array12A));
console.log("12B)",positiveEven(array12B));

// 13. Write a function that returns the sum of all odd numbers in an Array

// Hint: What is the second argument in `reduce`?

// ```
// Input: [2,3,4,5]
// Output: 8

// Input: [1,2,3,4,5]
// Output: 9
// ```

let array13A = [2,3,4,5]
let array13B = [1,2,3,4,5]

const sumOdd = (array) => {
    let check = array.reduce((acc,el) =>{
        if(el % 2 === 1){
            return acc + el;
        }else{
            return acc;
        }
    },0)
    return check;

    
}

console.log('13A)',sumOdd(array13A));
console.log('13B)',sumOdd(array13B));

// 14. Write a function that returns a new array containing all of the strings in the original array uppercased.

// ```
// Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
// Output: ["CAT", "DOG", "BEAR"]
// ```

let array14 = [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]

let stringCap = (array) => {
    let result = array.filter((currEl) =>{
        if (typeof currEl === "string"){
            return true;
        }
    })

    return result.map(el => el.toUpperCase());
}
// filter callback is a known as test callback, where if the callback returns a truthy value the element is kept else the element is skipped 
console.log('14)', stringCap(array14));