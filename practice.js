//write a function that prints out all elements

// const printArray = (array) => {
//     for(let i = 0; i < array.length; i++){
//         const el = arr[i];
//         return el;
//     }

// }


// function that returns the product of an array

// const productofEach = (arr) => {
//     let pro = 1;
//     for(let i = 0; i < arr.length; i+= 1){
//         const el = arr[i]
//         pro *= el;

//     }
//     return pro;
// } 


// const productofEach = (num) => {
//     let pro = 1;
//     num.forEach((num) => {
//         pro *= num;
//     })
//     return pro;
// }

//write a function that takes in an array and returns a new array with every element in the array doubled

// let arr = [2, 4, 6]

// const arrDoubled = arr.map((el) => {
//     return el * 2;
// })

// console.log(arrDoubled)

// const doubleForEach = (arr) => {
//     let output = [];
//     arr.forEach((el) => {
//         output.push(el * 2)
//     });
//     console.log(output);
//     return output;
// }
// console.log(doubleForEach([2, 4, 6]))

//write a function that takes in an array of strings and returns a new array where ever string has been capitalized and has an ! at the end.


// const shout = (words) => {
//     return words.map((words) => {
//         return words.toUpperCase() + "!";
//     })
// }
// shout(["hello", "world"])
// console.log(shout(["hello", "world"]))


// a function that takes in array and returns a new array where every element has been multipled by its index


// const mulIndex = (arr) => {
//     let multArray = arr.map((el, i) => {
//         return el * 3
//     });
//     return multArray;
// }
// mulIndex([1, 2, 3])
// console.log(mulIndex([1, 2, 3]))

// //same as the one above

// const mulIndex = (arr) => {
//     return multArray = arr.map((el, i) => {
//         return el * 3
//     })
// }

//fun that takes in an array and filters it to only have odd numbers.

// const filterNum = (arr) => {
//     let output = arr.filter((el) => {
//         return el % 2 === 0
//     })
//     return output;
// }

// console.log(filterNum([1, 2, 3, 4, 5, 6, 7]));

//takes in an array and returns a new array with only words that were already capitalized

// const onlyCaps = (arr) => {
//    return arr.filter((arr) => {
//         return arr.toUpperCase() === arr;
//     })

// }

// console.log(onlyCaps(["andres", "DOG", "MOM", "river" ]));

// every array method that evaluates into booleam.
// checks to see if every element passed into the callback evaluates to truthy

// const isAllNumsFive = (nums) => {
//     return nums.every((num) => {
//         return num === 5
//     })
// }
// console.log(isAllNumsFive([5, 6, 7]))

// funton that takes ina an array and determines if every element es even

// const allEvens = arr => {
//     return arr.every((el) => {
//         return el % 2 === 0;
//     })
// }


// // allEvens([2, 4, 6,])
// // console.log(allEvens([2, 4, 6,]));

// //a function that destermines if all words of an array have a length of 5 or more


// const allFiveOrMore = (arr) => {
//     return arr.every ((el) => {
//         return el.length >= 5
//     })
// }


// console.log(allFiveOrMore(["hello", "andres"]))
// console.log(allFiveOrMore(["hell", "andres"]))

// same function under the hood is doing this

// const myEvery = (arr, callback) => {
//     for(let i = 0; i < arr.length; i++){
//         if(!callback(arr[i])){
//             return false;
//         }
//     }
//     return true;
// }

//Sort is an array method that sorts our dat. => is mutative

// let arr = ["sparky", "mike", "corey",]
// arr.sort();
// console.log(arr)

// by putting a - b it would order into numerical order

// let nums = [2, 3, 77, 11]
// nums.sort((a, b) => a - b);
// console.log(nums)

//function that returns the number of times we see a string

// function numOfString (arr){
//     return arr.filter((el) => {
//         return typeof el === "string"
//     }).length
// }



// function numOfString (arr){
//     let counter = 0;
//     arr.forEach((el) => {
//         if(typeof el === "string"){
//             counter += 1
//         })
//         return counter;
//     }
// console.log(numOfString([1, 2, "Sparky", "Corey", 3, 4, "Mike"]))


//make a function forEach method



  //Create a function that takes in an array and returns a new array multiplied by a given argument

//   const multiply = (arr, num) => {
//       return arr.map((el) => {
//           return el * num;
//       })
//   }

//   const multiply = (arr, num) => {
//       for(let i = 0; i < arr.length; i++)
//       callback(array[i] * num);
// //   }

//   console.log(multiply([1, 5, 7, 9, 10, 11], 7));


// function myMapFunction (arr, callback){
//     let newArray = [];
//         for(let i = 0; i < arr.length; i++){
//             newArray.push(callback(arr[i], i));
//         }
//         return newArray;
//     }

// console.log(myMapFunction([1, 4, 7, 34, 77], (el) => {return el * 2}))

// a fucntion that return array of red cars only

// function sortCars(arr){
//     let arr2 =[]
//     for(let i = 0; i < arr.length; i++){
//     if (arr[i].color === "red"){
//         arr2.push(arr[i])
//     }
//     }
//     return arr2;
// }

//also can be used with the filter method to return red cars

// function sortCars(arr){
//     return arr.filter((el) => {
//     return el.color === "red"
        
//     })
// }

// console.log(sortCars([{car:"Saab", color:"red", year:"2011" }, {car:"Volvo", 
// color:"blue", year:"2015" }, {car:"BMW", color:"red", year:"1960" }]))


// return an array of strings containing the names of the cars that are red

// const findCarsThatAreRed = (arr) => {
//     return arr.map((el) => {
//         if(el.color === "red"){
//             return el.car

//         }
//     }).filter((el) => el)
// }

// //.filter(function(el){ /// another form of writing out the filter syntax
// //    return el


// console.log(findCarsThatAreRed([{car:"Saab", color:"red", year:"2011" }, {car:"Volvo", 
// color:"blue", year:"2015" }, {car:"BMW", color:"red", year:"1960" }]))

// This is what's going on under the hood down here for the filter function


// const myFilterFunction = (arr, callback) => {
//     for(let i = 0; i < arr.length; i++){
//         if(callback(arr[i])){
//             newArr.push(arr[i])
//         }

//     }
//     return newArr;

// }

// const callback = (el) => {
//     if(el.color === "red"){
//         return true;
//     }else{
//         return false;
//     }
// }



// console.log(myFilterFunction([{car:"Saab", color:"red", year:"2011" }, {car:"Volvo", 
// color:"blue", year:"2015" }, {car:"BMW", color:"red", year:"1960" }]
