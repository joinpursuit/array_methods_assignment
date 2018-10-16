// # Exercises
//
// __NOTE:__ DO NOT USE THE BUILT IN METHODS WHEN ASKED TO MAKE THEM!



// 1. Using Array.prototype add a new method `myForEach` that mimics the behaivor of the built in `forEach`.

Array.prototype.myForEach = function (callback) {

  for (let i = 0; i < this.length; i++) {

    callback(this[i]);
  }
};

// 2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.


Array.prototype.myMap = function (callback) {
    let resultMap = [];
    this.myForEach(el => {
      resultMap.push(callback(el));
    });
    return resultMap;
  };

arr.myMap(el => {
  return el * 2;
});

// 3. Write a 'myFilter` that behave's the same as `filter`.

    Array.prototype.myFilter = function(callback) {
      let filteredArr = [];
      for (let i = 0; i < strArr.length; i++) {
      if (callback(this[i])) {
    filteredArr.push(this[i]);
      };
    };
      return filteredrArr;
    };

// 4. Write a `myEvery`.

      Array.prototype.myEvery = function(callback) {
      for (let i = 0; i < this.length; i++) {
        if(callback(this[i])) {
          return true;
        }
      }  return false;
    }

// 5. Write a `myReduce`. It should use the first element in the array if none is given.


      Array.prototype.myReduce = function(callback , firstEl) {
          let counter = 0;
          let acc;
          if(firstEl === undefined) {
            acc = this[0];
            counter = 1;
          } else {
            acc = firstEl;
          }
          for (let i = counter; i < this.length; i++) {
            acc = callback(acc , this[i]);
          }
          return acc;
      }


// 6. Write a `myTranspose`. This function should transpose a matrix. Exp:
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
// ``


  function transpose(mtx) {
    let grid = [];
    for(let i = 0; i < mtx[0].length; i++){
      grid[i] = [];
      for(let j = 0; j < mtx.length ; j++) {
  grid[i][j] = mtx[i][j];
    }
  }
  return grid;
};
// 7. Use `myMap` to build a new array where every element is incremented by 10.

//why isn't myMap assigned to a variable like we did in class?

    let arr = [1,2,3,4];

    arr.myMap((el) => {
      return el + 10;
    });

// 8. Use `myMap` to build a new array where every non-string element is converted to an empty string.

    let strArr = ["hi", 1, "why", true, 2, 13];

    strArr.myMap(el => {
   if(typeof el !== 'string') {
     el = '';
   }
    return el;
   });

// 9. Use `myFilter` to get only the even elements in an array.

      arr.myFilter(el => {
      el % 2 === 0;
   })

// 10. Use `myEvery` to check if all elements in the array are the same.

    arr.myEvery(el => {
    return el === arr[0];

  })

// 11. Use `myReduce` to return the sum of every element in an array.

    arr.myReduce((acc, el) => {
      return acc + el;
      });

// 12. Use `myMap` to build a new array that doubles each element. Then chain `myReduce` to find the product of all the elements.

      arr.myMap(el => {
        return el * 2;
      });
      arr.myReduce((acc, el) => {
        return acc * el;
      })

// 13. Use `myReduce` to find the largest number in an array.

          arr.myReduce((acc, el) => {
            if(acc > el) {
              return acc;
            } else {
              return el;
            }
          })

// 14. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.
// Use `myFilter` to return a new array of every element of arr that can be evenly divided by divisor.


// 14. Write a `myJoin` function.

      Array.prototype.myJoin = function(){

      }
    //I have no clue where to go with this one.

// 15. Write a `mySlice` function.

      // I really have no clue where to start with this one!

// 16. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.
// Use reduce.

// not sure how to approach this one. I know I need to use reduce, but I don’t know what to do with it.I also don’t know what to return if el !== 0.
    const countZeroes = (arr) => {
        return reduce((acc, el) => {
          if(el === 0) {
            return 0
          }
        })
    }

// 17. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by it's index.

  const numberTimesIdx = (arr) => {
    arr.myMap((el, i) => {
      return el * i
    })
  }
//
// Bonus: Write a `myFlatten`. This should take a multi-dimensional array and return it as one array.
// ```js
// let arr = [1, 2, [3, 4, 5, [6, 7, 8]]]
//   arr.myFlatten();
//   // => [1, 2, 3, 4, 5, 6, 7, 8]
// ```
