//  Exercises

// __NOTE:__ DO NOT USE THE BUILT IN METHODS WHEN ASKED TO MAKE THEM! 

// 1. Using Array.prototype add a new method `myForEach` that mimics the behaivor of the built in `forEach`.
console.log("######### Prob 1 #########");

Array.prototype.myForEach = function(callback){
  for (let i = 0; i < this.length; i++){
    callback(this[i]);
  }
}


// 2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`. 
console.log("######### Prob 2 #########");

Array.prototype.myMap = function(callback){
	let arr = [];
	this.myForEach(el => {
		arr.push(callback(el));
	});
	return arr;
}

let arr = [1,2,3];
let newArr = arr.myMap(el => {
	return el/2;
})
console.log(newArr);




// 3. Write a 'myFilter` that behave's the same as `filter`. 
console.log("######### Prob 3 #########");

Array.prototype.myFilter = function(callback){

	let arr = [];

	this.myForEach(el => {
		if(callback(el)){
			arr.push(el);
		}
	})
	return arr;
}

let arr2 = [1,2,3];
let arr3 = arr2.myFilter(el => {
	return el%2===1;
})

console.log(arr3);




// 4. Write a `myEvery`. 
console.log("######### Prob 4 #########");

Array.prototype.myEvery = function(callback){
	let bool = false;
	this.myForEach(el => {
		if(callback(el)){
			bool = true;
		}else{
			bool = false;
		}
	});
	return bool;
}

let arr4 = [3,3,6,9,12];
let arr5 = arr4.myEvery(el => {
	return el%3===0;
}); 
console.log(arr5);






// 5. Write a `myReduce`. It should use the first element in the array if none is given. 
console.log("######### Prob 5 #########");

Array.prototype.myReduce = function(callback, accOptional){

  let acc;      //5
  let initialCount;

  if(accOptional){
    acc = accOptional;
    initialCount = 0;
  }else{
    acc = this[0];
    initialCount = 1;
  }

  for(let i=initialCount; i<this.length; i++){
    acc = callback(acc, this[i]);
  }
  return acc;
}

let someArr = [1,2,3,4,3];
let reducedArr = someArr.myReduce((acc, currentEl) => {
  return acc + currentEl;
}, -4);
console.log(reducedArr);





// 6. Write a `myTranspose`. This function should transpose a matrix. Exp:
// ```js
// let mtx = [
//             [1, c],  //arr[0][0]        //arr[0][1]
//             [3, 4],  //arr[1][0]        //arr[1][1]
//             [5, 6],  //arr[2][0]        //arr[2][1]    
			 //[7, 8]/  / arr[3][0]        //arr[3][1]
//           ]

// mtx.myTranspose();

// // => [
//         [1, 3, 5, 7],
//         [c, 4, 6, 8]
//        ]
// ```
console.log("######### Prob 6 #########");

const myTranspose = (arr) => {
  let ourArr = [];

  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){

      if(ourArr[j]===undefined){
        ourArr.push([arr[i][j]]);
      }else{
        ourArr[j].push(arr[i][j]);
      }
    }
  }
  return ourArr;
}

let arr6 = [[1,3, 3], [7,4, 4],[8,6, 5]]
console.log(myTranspose(arr6));
      // if(j===0){
      //   if(ourArr[0] === undefined){
      //     ourArr.push([arr[i][0]]);
      //   }else{
      //     ourArr[0].push(arr[i][0]);
      //   }

      // }else if(j===1){
      //   if(ourArr[1] === undefined){
      //     ourArr.push([arr[i][1]]);
      //   }else{
      //     ourArr[1].push(arr[i][1]);
      //   }
      // }




// 7. Use `myMap` to build a new array where every element is incremented by 10.
console.log("######### Prob 7 #########");

let someArr2 = [1,2,3];

let someArr1 = someArr2.myMap(el => {
  return el + 10;
});

console.log(someArr1);






// 8. Use `myMap` to build a new array where every non-string element is converted to an empty string.
console.log("######### Prob 8 #########");
let someArr3 = [1,2,3];

let someArr4 = someArr3.myMap(el => {
  if(el !== 'string'){
    return el = '';
  }
});

console.log(someArr4);






// 9. Use `myFilter` to get only the even elements in an array.
console.log("######### Prob 9 #########");
const onlyEvens = (arr) => {
  let newArr = arr.myFilter(el => {
    return el%2===0;
  });
  return newArr;
}
console.log(onlyEvens([1,2,3,4,5]));




// 10. Use `myEvery` to check if all elements in the array are the same. 
console.log("######### Prob 10 #########");
const areAllSame = (arr) => {
  let msg = "";
  let i = arr[0];
  arr.myEvery(el => {
    if(i === el){
      msg = "All elements are the same";
    }else{
      msg = "All elements are not the same";
    }
  });
  return msg;
}

console.log(areAllSame([1,3,1,1]));




// 11. Use `myReduce` to return the sum of every element in an array. 
console.log("######### Prob 11 #########");

const sumAll = (arr) => {
  let newArr = arr.myReduce((acc, currentEl) => {
    return acc + currentEl;
  });
  return newArr;
}
console.log(sumAll([-11,2,3,4]));





// 12. Use `myMap` to build a new array that doubles each element. Then chain `myReduce` to find the product of all the elements. 
console.log("######### Prob 12 #########");

const doubledProduct = (arr) => {
  let myNewArr = arr.myMap(el => {
    return el*2;
  }).myReduce((acc, curEl) => {
    return acc + curEl
  })
  return myNewArr;
}

console.log(doubledProduct([1,2,3]))





// 13. Use `myReduce` to find the largest number in an array. 
console.log("######### Prob 13 #########");

const largestEl = (arr) => {
  let newArr = arr.myReduce((acc, curEl) => {
    if(acc > curEl){
      return acc;
    }else{
      return curEl;
    }
  });
  return newArr;
}
console.log(largestEl([1,2,3,4,,12,4]))





// 14. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.
// Use `myFilter` to return a new array of every element of arr that can be evenly divided by divisor.
console.log("######### Prob 14a #########");

const elementDivisibleBy = (arr, divisor) => {
  let newArr = arr.myFilter(el => {
    return el%divisor===0;
  });
  return newArr;
}
console.log(elementDivisibleBy([1,2,3,4,5,6], 2));






// 14. Write a `myJoin` function. 
console.log("######### Prob 14b #########");

Array.prototype.myJoin = function(joiningChar){
  let str = '';
  this.forEach(el => {
    str += el + joiningChar;
  });
  return str;
}

let arr7 = ['a', 'b', 'c', 'd']
let newArr7 = arr7.myJoin("");
console.log(newArr7);





// 15. Write a `mySlice` function.
console.log("######### Prob 15 #########");
Array.prototype.mySlice = function(start, end){
let arr = [];
  
  for(let i = start; i < end; i++){
    arr.push(this[i]);
  }
  return arr;
}

console.log([1, 3, 4, 5].mySlice(1, 4))


// 16. Write a function `countZeroes`, which takes an array of numbers as 
//its argument and returns the amount of zeroes that occur in it.
// Use reduce.
console.log("######### Prob 16 #########");
const countZeroes = (arr) => {
  let count = 0;
  arr.reduce((acc, curEl) => {
    if(curEl === 0 || acc === 0){
       count++;    
     }
  });
  return count;
}

console.log(countZeroes([0,1,2,3,0,0,43,0]));




// 17. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by it's index. 
console.log("######### Prob 17 #########");
const numberTimesIdx = (arr) => {
  let newArr = arr.map((el, index) => {
    return el * index;
  });
  return newArr;
}

console.log(numberTimesIdx([1,2,3,4]));



// Bonus: Write a `myFlatten`. This should take a multi-dimensional array and return it as one array. 
// ```js
// let arr = [1, 2, [3, 4, 5, [6, 7, 8]]]
//   arr.myFlatten();
//   // => [1, 2, 3, 4, 5, 6, 7, 8]
// ```

console.log("######### BONUS #########");
const myFlatten = (arr) => {
	let myArr = [];

	arr.forEach(el => {
		if(typeof el === 'number'){
			myArr.push(el);
		}else if(Array.isArray(el)){

			el.forEach(el2 => {
				if(typeof el2 === 'number'){
					myArr.push(el2);
				}else if(Array.isArray(el2)){
					
					el2.forEach(el3 =>{
						myArr.push(el3);
					});
				}
			});
		}
	});
	return myArr;
}

console.log(myFlatten([1, 2, [3, 4, 5, [6, 7, 8]]]));

