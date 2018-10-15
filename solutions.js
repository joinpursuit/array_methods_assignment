//1 //forEach() => loops through array and applies callback(elem = array[index])
// Array.prototype.myForEach = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i);
//   }
// };
//
// let arr1 = ['A', 'B', 'C', 'A'];
// arr1.forEach(el => console.log(el.toLowerCase()));
// arr1.myForEach(el => console.log(el.toLowerCase()));
// console.log(1, arr1);

//2 //map() => loops through array and applies callback(elem = array[index]) => pushes values to new Array
// Array.prototype.myMap = function (callback) {
//   let output = [];
//   for (let i = 0; i < this.length; i++) {
//     output.push(callback(this[i] !== undefined ? this[i] : undefined, i));
//   }
//
//   return output;
// };
//
// let arr2 = ['A', 'B', null, undefined, false, , 'C', 'A'];
// let mapped = arr2.map((el, i) => el + i);
// let myMapped = arr2.myMap((el, i) => el + i);
// console.log(2, arr2, mapped, myMapped);

//3 //myFilter() => loops through array and applies callback(elem = array[index]) checking for boolean => pushes values to new Array according to the boolean
// Array.prototype.myFilter = function (callback) {
//   let output = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i]), i) {
//       output.push(this[i]);
//     }
//   }
//
//   return output;
// };
//
// let arr3 = ['A', 'B', null, undefined, false,, 'C', 'A'];
// let filtered = arr3.filter(el => el === 'A');
// let myFiltered = arr3.myFilter(el => el === 'A');
// console.log(3, arr3, filtered, myFiltered);

//4 //myEvery() => loops through array and applies callback(elem = array[index]) checking for boolean => returns boolean from evaluated callback condition
// Array.prototype.myEvery = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (!callback(this[i]), i) {
//       return false;
//     }
//   }
//
//   return true;
// };
//
// let arr4 = ['A', 'B', 'C', 'A'];
// let isStr = arr4.every(el => typeof el === 'string');
// let isMyStr = arr4.myEvery(el => typeof el === 'string');
// console.log(4, arr4, isStr, isMyStr);

//5 //myReduce() => loops through array and applies callback(elem = array[index]) with an accumulator carrying over to each evaluation of the callback, if acc initValue isnt provided => acc initValue = arr[0] & elem = arr[1] else elem = array[0]
// Array.prototype.myReduce = function (callback, initValue) {
//   let acc = initValue || this[0];
//   for (let i = initValue ? 0 : 1; i < this.length; i++) {
//     acc = callback(acc, this[i], i);
//   }
//
//   return acc;
// };
//
// let arr5 = [1, 2, 3, 4, 5];
// let reduced = arr5.reduce((acc, el) => acc + el);
// let myReduced = arr5.myReduce((acc, el) => acc + el);
// console.log(5, arr5, reduced, myReduced);

//6 //myTranspose() => return matrix of [index[0s], & index[1s]]
// Array.prototype.myTranspose = function () {
//   let output = [[], []];
//   for (let i = 0; i < this.length; i++) {
//     output[0].push(this[i][0]);
//     output[1].push(this[i][1]);
//   }
//
//   return output;
// };
//
// let mtx = [[1, 2], [3, 4], [5, 6]];
// let myMtx = mtx.myTranspose();
// console.log(6, mtx, myMtx);

//7
// Array.prototype.myMap = function (callback) {
//   let output = [];
//   for (let i = 0; i < this.length; i++) {
//     output.push(callback(this[i] !== undefined ? this[i] : undefined, i));
//   }
//
//   return output;
// };
//
// let arr7 = [1, 2, 3, 4, 5];
// let add10 = arr7.map(el => (el += 10));
// let myAdd10 = arr7.myMap(el => (el += 10));
// console.log(7, arr7, add10, myAdd10);

//8
// Array.prototype.myMap = function (callback) {
//   let output = [];
//   for (let i = 0; i < this.length; i++) {
//     output.push(callback(this[i] !== undefined ? this[i] : undefined, i));
//   }
//
//   return output;
// };
//
// let arr8 = [1, 2, 'a', '', ' ', 80];
// let strArr = arr8.map(el => (typeof el === 'string' ? el : ''));
// let myStrArr = arr8.myMap(el => (typeof el === 'string' ? el : ''));
// console.log(8, arr8, strArr, myStrArr);

//9
// Array.prototype.myFilter = function (callback) {
//   let output = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i]), i) {
//       output.push(this[i]);
//     }
//   }
//
//   return output;
// };
//
// let arr9 = [1, 2, 3, 4, 5];
// let evens = arr9.filter(el => !(el % 2));
// let myEvens = arr9.myFilter(el => !(el % 2));
// console.log(9, arr9, evens, myEvens);

//10
// Array.prototype.myEvery = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (!callback(this[i], i, this)) {
//       return false;
//     }
//   }
//
//   return true;
// };
//
// let arr10a = [1, 1, 1, 1];
// let arr10b = [1, 1, 2, 1];
// let same = arr10a.myEvery((el, i, a) => a[0] === el);
// let notSame = arr10b.myEvery((el, i, a) => a[0] === el);
// console.log(10, arr10a, arr10b, same, notSame);

//11
// Array.prototype.myReduce = function (callback, initValue) {
//   let acc = initValue || this[0];
//   for (let i = initValue ? 0 : 1; i < this.length; i++) {
//     acc = callback(acc, this[i], i);
//   }
//
//   return acc;
// };
//
// let arr11 = [1, 2, 3, 4, 5];
// let sum = arr11.reduce((acc, el) => acc + el);
// let mySum = arr11.myReduce((acc, el) => acc + el);
// console.log(11, arr11, sum, mySum);

//12
// Array.prototype.myMap = function (callback) {
//   let output = [];
//   for (let i = 0; i < this.length; i++) {
//     output.push(callback(this[i], i));
//   }
//
//   return output;
// };
//
// Array.prototype.myReduce = function (callback, initValue) {
//   let acc = initValue || this[0];
//   for (let i = initValue ? 0 : 1; i < this.length; i++) {
//     acc = callback(acc, this[i], i);
//   }
//
//   return acc;
// };
//
// let arr12 = [1, 2, 3, 4, 5];
// let doubledSum = arr.12map(el => el * 2).reduce((acc, el) => acc + el);
// let myDoubledSum = arr12.myMap(el => el * 2).myReduce((acc, el) => acc + el);
// console.log(12, arr12, doubledSum, myDoubledSum);

//13
// Array.prototype.myReduce = function (callback, initValue) {
//   let acc = initValue || this[0];
//   for (let i = initValue ? 0 : 1; i < this.length; i++) {
//     acc = callback(acc, this[i], i);
//   }
//
//   return acc;
// };
//
// let arr13 = [10, -20, 5, 99, 7];
// let largest = arr13.reduce((acc, el) => (acc > el ? acc : el));
// let myLargest = arr13.myReduce((acc, el) => (acc > el ? acc : el));
// console.log(13, arr13, largest, myLargest);

//14a
// Array.prototype.myFilter = function (callback) {
//   let output = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i)) {
//       output.push(this[i]);
//     }
//   }
//
//   return output;
// };
//
// let arr14a = [1, 2, 3, 4, 'a', 'b', 'c', false, true];
// let isNum = arr14a.filter(el => typeof el === 'number');
// let isMyNum = arr14a.myFilter(el => typeof el === 'number');
// console.log('14a', arr14a, isNum, isMyNum);
// const elementDivisibleBy = (divisor, arr) => {
//   let output = arr.myFilter(el => typeof el === 'number' && !(el % divisor));
//   return output;
// };
//
// console.log('14a', arr14a, elementDivisibleBy(2, arr), elementDivisibleBy(3, arr));

//14b
// Array.prototype.myJoin = function (separator = ',') {
//   let output = '';
//   for (let i = 0; i < this.length - 1; i++) {
//     if (this[i] !== undefined && this[i] !== null) {
//       output += `${this[i]}${separator}`;
//     }
//   }
//
//   return (output += `${this[this.length - 1]}`);
// };
//
// let arr14b = [1, 2, 3, true, ' ', null, undefined, false];
// let joined = arr14b.join('');
// let myJoined = arr14b.myJoin('');
// console.log(14, arr14b, joined, myJoined);

//15 mySlice() => returns strings starting from index[startParam] & if 2ndParam => ending before index[endParam] else till end of string
// String.prototype.mySlice = function (start, end) {
//   let output = '';
//   let len = end || this.length;
//   for (let i = start || 0; i < len; i++) {
//     output += this[i];
//   }
//
//   return output;
// };
//
// let str = 'MateoNavarrete';
// let sliced = str.slice(1, 4);
// let mySliced = str.mySlice(1, 4);
// console.log(15, str, sliced, mySliced);

//16
// const countZeroes = arr =>
//   arr.reduce(
//     (acc, el) => (typeof el === 'number' && el === 0 ? (acc += 1) : acc),
//     0
//   );
//
// let arr16 = [0, 1, 2, 0, 4, false, undefined, null, 0, -1];
// console.log(16, arr16, countZeroes(arr16));

//17
// const numberTimesIndex = arr => arr.map((el, i) => el * i);
// let arr17 = [1, 2, 3, 4, 5];
// let nti = numberTimesIndex(arr17);
// console.log(17, nti);

//NOTE TODO
//18 myFlatten
