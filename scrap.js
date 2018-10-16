var arr = ["a", "b", "c"];

// arr.push("d"); // MODIFIES original array
console.log(arr.push("d")); // 5 //push "d" again! // 4
console.log(arr);//[ 'a', 'b', 'c', 'd', 'd' ]

// arr.pop(); // MODIFIES original array
console.log(arr.pop()); // d .. produces what you popped
console.log(arr); // [ 'a', 'b', 'c' ]
//
var arr2 = ["g", "q"]; //  NOT MODIFY orig arrays
console.log(arr.concat(arr2)); // [ 'a', 'b', 'c', 'g', 'q' ]
console.log(arr); // [ 'a', 'b', 'c' ]
console.log(arr2); // [ 'g', 'q' ]
//
// arr.join(""); // NOT MODIFY
console.log(arr.join("")); // abc
console.log(arr.join("!")); // a!b!c
console.log(arr); // [ 'a', 'b', 'c' ]
//
// arr.reverse(); // MODIFIES
console.log(arr.reverse()); // [ 'c', 'b', 'a' ]
console.log(arr); // [ 'c', 'b', 'a' ]

console.log(arr.shift()); // c //remove 1st element in the array and retrun that element
console.log(arr); // [ 'b', 'a' ]

console.log(arr.unshift("p")); // 3 // adds new elemnt to beginning of array and returns the length of the modified array;
console.log(arr); // [ 'p', 'b', 'a' ]

console.log(arr.slice(1,2)); // [ 'b' ] // two arguments: returns the elements from the beginning index to the n-1 index.
console.log(arr.slice(1,3)); // [ 'b', 'a' ] // index 1: b to index 3-1 = 2: a
console.log(arr); // [ 'p', 'b', 'a' ] // does not affect original array

// first; push some more letters:
console.log(arr);  // [ 'p', 'b', 'a' ]
console.log(arr.push("i", "f")); // 5
console.log(arr); // [ 'p', 'b', 'a', 'i', 'f' ]
console.log(arr.push("r")); // 6
console.log(arr.push("s")); // 7
console.log(arr); // [ 'p', 'b', 'a', 'i', 'f', 'r', 's' ]
console.log(arr.sort()) // [ 'a', 'b', 'f', 'i', 'p', 'r', 's' ]
console.log(arr); // [ 'a', 'b', 'f', 'i', 'p', 'r', 's' ]

console.log(arr.splice(2, 2, "JS Bananas")); // [ 'f', 'i' ] // MODS OLD ARRAY unlike slice //1st arg: starting index; 2nd arg: no. of item (from the starting point) to remove; 3rd arg: any items want to add.; returns items that were removed;
console.log(arr); // [ 'a', 'b', 'JS Bananas', 'p', 'r', 's' ]






// XAVIER NOTES
let arr = [1,2,3,4,5,6,7,8]

// function addTwo(num){
//   return num + 2
// }

// arr.forEach((elem, index) => {
//   console.log(addTwo(elem))
// })

arr.forEach((elem, index) => {
  arr[index] = arr[index] * elem
})

let mapExmaple = arr.map((elem, index) => {

})

let filterExample = arr.filter((elem, index) => {
  if(elem % 2 === 0){
    return elem
  }
})



//----

Array.prototype.myForEach = function(callback){
  for(let i = 0; i< this.length; i++){
    callback(this[i]);
  }
};

function addTwo(num){
  return num + 2
}

function timesFive(num){
  return num * 5
}

function whatIsElem(elem){
  return 'This element is ' + elem
}

[1,2,3,4,45,6,7].myForEach((elem) => {
  // console.log(addTwo(elem))
  // console.log(timesFive(elem))
  // console.log(whatIsElem(elem))
})





Array.prototype.myMap = function(callback){
  let newArr = []
  for(let i = 0; i< this.length; i++){
    newArr.push(callback(this[i]));
  }
  return newArr
}

let mapExample = [2,3,4,5,7].myMap((elem) => {
  return addTwo(elem)
})

console.log(mapExample)





Array.prototype.myFilter = function(callback){
  let newArray = []
  for (let i = 0; i< this.length; i++) {
    if(callback(this[i])){
      newArray.push(callback(this[i]))
    }
  }
  return newArray
}

let filterExample = [1,2,3,4,5,6].myFilter((elem) => {
  if (elem % 2 === 0) {
    return elem
  }
})

console.log(filterExample);



nums = [1,2,3,4]
newArr = [...nums, 700]
// that will add 700 to end of list

























//
