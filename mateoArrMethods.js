// let obj = {
//   name: {
//     first: "Drake",
//     last: "Bell"
//   }
// }
// console.log(obj.name.first);
//
// //-----
// let arr = ["Drake", "first", "waherver"]
//
// console.log(obj.name["first"]);
//["first"] = [arr[i]]

//-------

// Array =
// { prototype:
//     {push: () => {},
//      pop: () => {},
//      myOwnFunction: ()=> {}
//     }
// }

// -------
//callbacks and this.

//1.
//build something reusable (argument/paramenter) - an array. called: callback.
let arr1 = [1,2,3,4,5];
Array.prototype.myForEach = function (callback) {
  for (let i=0; i<this.length; i++){
    console.log(callback(this[i]), this, i)
  }//no "return"
}

let arr2 = ["A","B","C","D"]


// console.log(arr1.myForEach(el => console.log(el))) //working
arr1.myForEach((el) => {return el += 10; });
//not working



//right underneath it:
// let arr = [1,2,3,4,5];
// console.log(arr.myForEach()); // undefined
// console.log(arr.myForEach(3));//3
//
// let obj = {};
// console.log(arr.myForEach(obj));












































































































































































//
