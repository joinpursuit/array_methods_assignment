console.log('question1');
let arr1 = [1, 2, 3, 4, 5];
let result1 = arr1.map((el) => {
  return el + 10;
});
console.log(result1);

console.log('question2');
let arr2 = ["a", 123, "b", "c", {name: "cat"}];
let strings2 = arr2.map((el) => {
 if(typeof el !== 'string') {
   return '';
 } else {
   return el;
 }
});
console.log(strings2);
console.log('question3');
let arr7a = [1, 2, 3, 4, 5];
let filtered = arr7a.filter((el) => el % 2 === 0);
console.log(filtered);

console.log('question4');
let arr4 = [1,1,1,1,2];
let result4 = arr4.every(el => {
  if (el === arr4[0]) {
    return true;
  }

  return false;
});

console.log(result4);

console.log('question 5');

function adder(total, el) {
  return total + el;
}

let nums = [1, 2, 3, 4, 5];
let total = nums.reduce((total, el) => {
return total + el;

}, 0)
console.log(total);
console.log('question6');
let arr5 = [1,2,6,3,4,5];
let largest5 = arr5.reduce((acc, el) => {
console.log(`acc: ${acc}, el: ${el}`);
if(el > acc) {

    return el;
  } else {
    return acc;
  }
});
console.log(largest5);
console.log('question 7');
let arr6 = [1,0,0,2,0,3,0,0,0];

let filtered6 = arr6.filter((el) => el === 0);
console.log(filtered6.length);


console.log('question 8');
 let arr7 = [1,2,3,4];
 let doubled = [];
 arr7.map(el => {
   doubled.push(el * 2);
 });
 console.log(doubled);

console.log('question 9');
let arr8 = [1,2,3,4];
let total7 = arr8.reduce((total7, el) => {
return total7 + el * 2;

}, 0);
console.log(total7);
console.log('question 10');
let divisBy5 = [4,5,6,7,8,9,10,11,12,13,14,15];
let filtered7 = divisBy5.filter((el) => el % 5 === 0);
console.log(filtered7);

console.log('question 11');
let arry11 = [6,7,8,9];
let mult = arry11.map(numberTimesIdx = (currentVal) => {
  return currentVal * arry11.indexOf(currentVal);
})
console.log(mult);
console.log('question 12');


console.log('question 13');
let arr13 = [1,2,3,4,5]
let total13 = arr13.reduce((total13, el) => {
return total13 + el;

}, 0)
console.log(total13);
console.log('question14');
let arr14 = [{}, 1, 'cat', 3, ['hi'], { name: 'dog' }, 'dog', 'bear'];
let result14 = arr14.filter((el) => {
 if (typeof el === 'string') {
   return el;
  }
}).map(el => {
     return el.toUpperCase()
 });
 console.log(result14);
