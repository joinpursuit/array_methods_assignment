# Exercises

__NOTE:__ DO NOT USE THE BUILT IN METHODS WHEN ASKED TO MAKE THEM!

1. Using Array.prototype add a new method `myForEach` that mimics the behaivor of the built in `forEach`.

Array.prototype.myforEach = function(callback){
  for (let i = 0; i < this.length; i++) {
   callback(this[i]);
 }    
};

2. Use your `myForEach` to add `myMap` to the Array prototype. `myMap` should behave the same as regular `map`.

Array.prototype.myMap = function(x){
  let NewArr= [];
  this.myforEach(num => {
    NewArr.push(x(num));    
  })
  return NewArr
}

3. Write a 'myFilter` that behave's the same as `filter`.

Array.prototype.myFilter = function(callback){
  let filArr = [];
  this.myforEach(el => {
    if(callback){
      filArr.push(callback(el));
    }
  });
  return filArr;
}



4. Write a `myEvery`.

Array.prototype.myEvery = function(itistrue){

  this.myforEach(el => {
    if(itistrue){
      return true;
    }else{
      return false
    }

  });
}

5. Write a `myReduce`. It should use the first element in the array if none is given.

Array.prototype.myReduce = function(call,ival){
  let acc = ival || 0;
  for(var i = 0; i < this.length;i++){
    acc = call(acc,this[i]);
  }
  return acc
}

6. Write a `myTranspose`. This function should transpose a matrix. Exp:
```js
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
```
const myT = (mtx) => {
  let TArr = [];
  for(let i=0; i<mtx.length; i++){
    for(let j=0; j<mtx[i].length; j++){
      if(!TArr[j]){
        TArr.push([mtx[i][j]]);
      }else{
        TArr[j].push(mtx[i][j]);
      }
    }
  }
  return TArr;
}




7. Use `myMap` to build a new array where every element is incremented by 10.

let arr =[2,3,4,5];
let newarr = arr.myMap(el => el + 10)
console.log(newarr)


8. Use `myMap` to build a new array where every non-string element is converted to an empty string.

let newArr = arr.myMap((el) => {
 return (typeof el === "string") ? '' : el;

});


console.log(newArr)


9. Use `myFilter` to get only the even elements in an array.


arr.myFilter((el) => {
  return el % 2 === 0
  })



10. Use `myEvery` to check if all elements in the array are the same.


let newarr = arr.every((el) => {
  return  el === arr[0]
  })


11. Use `myReduce` to return the sum of every element in an array.

let newarr = arr.myReduce((acc, el) => {
  return acc + el
  })


12. Use `myMap` to build a new array that doubles each element. Then chain `myReduce` to find the product of all the elements.


  let doubleredux = arr
    .map((el) => {
      return el*2;
    }).reduce((acc,curr)=> {
      return acc + curr;
    });


13. Use `myReduce` to find the largest number in an array.
let largest = arr.myReduce((larg,arg) => {
  let big = 0;
  if(larg >= arg){
    big = larg
  }else{
    big = arg
  }
  return big
  })

14. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.
Use `myFilter` to return a new array of every element of arr that can be evenly divided by divisor.

const elementDivisibleBy = (divisor,arr) => {
  let newarr =arr.filter((el) => {
    return el % divisor === 0;
    })
    return newarr
}

14. Write a `myJoin` function.

Array.prototype.myJoin = function(arg2) {
  let joined = "";
  this.forEach((el) => {
    joined += el + arg2
  })
  return joined
}

15. Write a `mySlice` function.

const mySlice = (arr, arg1, arg2) => {
  let sliced = [];
  for(var i = arg1 ; i < arg2;i++){

    sliced.push(arr[i])
}

16. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.
Use reduce.

///doesnt work i dont know how to make it work with reduce :'(

  const countZeroes = (arr) => {
    let newarr = arr.reduce((acc,curr) => {
      if(curr === 0){
        return acc = acc + 1
      } else {
        return acc
      }
    },0)
    return newarr
  }

17. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by it's index.

const numberTimesIdx = (arr) => {
  let newarr = arr.map((el,i) => {
    return el*i
    })
return newarr
}

Bonus: Write a `myFlatten`. This should take a multi-dimensional array and return it as one array.
```js
let arr = [1, 2, [3, 4, 5, [6, 7, 8]]]
  arr.myFlatten();

const myFlatten=(arr)=> {
  return arr.reduce((acc, current) => {
    return acc.concat(current);
  }, []);
}
  // => [1, 2, 3, 4, 5, 6, 7, 8]
```
