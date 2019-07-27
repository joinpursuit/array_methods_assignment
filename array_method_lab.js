console.log(`Question One`);
//Input: [1,2,3,4,5]
//Output: [11,12,13,14,15]
let arr = [1,2,3,4,5]
let newArr = arr.map(elem =>{
  return elem += 10
});

console.log(arr);
console.log(newArr);
console.log(`  `);
//
console.log(`Question Two`);
//Input: ["a", 123, "b", "c", {name: "cat"}]
//Output: ["a", "", "b", "c", ""]
arr = ["a", 123, "b", "c", {name: "cat"}]
newArr = []
arr.forEach(elem =>{
  if (typeof elem === typeof 'string'){
    newArr.push(elem)
  }else{
    newArr.push('')
  }
})
console.log(arr);
console.log(newArr);
console.log(`  `);
//I tried using the filter method here but couldnt figure it out
console.log(`Question Three`);
//Input: [1,2,3,4,5]
//Output: [2,4]
arr = [1,2,3,4,5]
newArr = arr.filter(elem =>{
  return elem % 2 === 0
})
console.log(arr);
console.log(newArr);
console.log(`  `);
//
console.log(`Question Four`);
//Input: [1,1,1,1,1] or [1,2,3,4,5]
//Output: true  or false
arr = [1,1,1,1,1]
newArr = arr.every((elem, i, arr) => {
  return elem === arr[0]
})
console.log(arr);
console.log(newArr);
console.log(`  `);
//
console.log(`Question Five`);
//Input: [1,2,3,4,5]
//Output: 15
arr = [1,2,3,4,5]
newArr = arr.reduce((sum,elem) => {
  return sum + elem
})
console.log(arr);
console.log(newArr);
console.log(`  `);
//
console.log(`Question Six`);
//Input: [1,2,6,3,4,5]
//Output: [6]
arr = [1,2,6,3,4,5]
newArr = arr.reduce((largest,elem)=>{
  if (elem > largest){
    return elem
  }else{
    return largest
  }
})
console.log(arr);
console.log(newArr);
console.log(`  `);
//
console.log(`Question Seven`);
//Input: [1,0,0,2,0,3,0,0,0]
//Output: 6
arr = [1,0,0,2,0,3,0,0,0]
newArr = arr.filter(elem =>{
  return elem === 0
})
console.log(arr);
console.log(newArr.length);
console.log(`  `);
//
console.log(`Question Eight`);
//Input: [1,2,3,4]
//Output: [2,4,6,8]
arr = [1,2,3,4]
newArr = arr.map(elem =>{
  return elem *= 2
})
console.log(arr);
console.log(newArr);
console.log(`  `);
//
console.log(`Question Nine`);
//Input: [1,2,3,4]
//Output: 20
arr = [1,2,3,4]
newArr = arr.map(elem =>{
  return elem *= 2
})
.reduce((sum,elem)=>{
  return sum + elem
})
console.log(arr);
console.log(newArr);
console.log(`  `);
//
console.log(`Question Ten`);
//Input: 5, [4,5,6,7,8,9,10,11,12,13,14,15]
//Output: [5,10,15]
arr = [4,5,6,7,8,9,10,11,12,13,14,15]
newArr = arr.filter(elem =>{
  return elem %5 === 0
})
console.log(arr);
console.log(newArr);
console.log(`  `);
//
console.log(`Question Eleven`);
//Input: [6,7,8,9]
//Output: [0,7,16,27]
arr = [6,7,8,9]
newArr = arr.map((elem,index)=>{
  return elem * index
})
console.log(arr);
console.log(newArr);
console.log(`  `);
//
console.log(`Question Twelve`);
//Input: [2,4,6,8,12] or [2,4,6,8,10]
//Output: true or false
arr = [2,4,6,8,10]
newArr = arr.every(elem =>{
  return elem > 0
    && elem % 2 === 0
    && elem % 10 !== 0
})
console.log(arr);
console.log(newArr);
console.log(`  `);
//
console.log(`Question Thirteen`);
//Input: [2,3,4,5,8]
//Output: 9
arr = [2,3,4,5,2]
newArr = arr.reduce((sum,elem) =>{
  if (elem % 2 !== 0){
    sum += elem
  }
  return sum
},0)
console.log(arr);
console.log(newArr);
console.log(`  `);
//
console.log(`Question Fourteen`);
//Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
//Output: ["CAT", "DOG", "BEAR"]
arr = [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
newArr = arr.map(elem =>{
  if (typeof elem === typeof ''){
    return elem.toUpperCase()
  }else{
    return elem
  }
})
newArr = newArr.filter(elem =>{
  if (typeof elem === typeof ''){
    return elem
  }
})
console.log(arr);
console.log(newArr);
console.log(`  `);
//
console.log(`BONUS QUESTIONS!`);
