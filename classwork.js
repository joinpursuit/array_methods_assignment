
// .forEach Son!!!

let names = ["Ben", "Elle", "Matt", "Corey", "Joanne"];

let answer = [];

names.forEach((el, i) => {
console.log("the element: " + el + " the index: " + i);
  }

);

//Prototype
Array.prototype.myForEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i])
  }
};

[1, 2, 3].myForEach((el) => {
  console.log(el);
})


// .Map

let myArr = [1, 2, 3, 4, 5];
let doubledArr = myArr.map((el) => {
  return el * 2;
})
console.log(myArr);
console.log(doubledArr);


//.filter

let arr = [0, 1, 2, 3, 4, 5];

let evenArr = arr.filter(el => {
  return el % 2 !== 1;
});

console.log(evenArr);
