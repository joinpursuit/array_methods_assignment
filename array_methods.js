
//1. Given an array of numbers, write a function that returns a new array where every element is incremented by 10.

let num1 = [1,2,3,4,5];

const add10 = arr => {
	return arr.map(elem => {
		return elem + 10
	});
}

console.log(add10(num1));

//2. Given an array, return a new array where every non-string element is converted to an empty string.

let arr2 = ["a", 123, "b", "c", {name: "cat"}];

const nonStringsBegone = arr => {
	return arr.map(elem => {
		if(typeof elem !== 'string'){
			return '';
		}
		return elem;
	})
}


console.log(nonStringsBegone(arr2));

// 3. Write a function that returns only the even elements in an array of numbers.

let arr3 = [1,2,3,4,5];

function onlyEvens(arr){
	return arr.filter(num => num % 2 === 0);
}

console.log(onlyEvens(arr3));

// 4. Write a function that checks if all elements in the array are the same.

let arr4 = [1,1,1,1,1];
let arr5 = [1,1,1,1,2];

const samePlease = arr => {
	let test = arr[0];
	return arr.every(elem => {
		return elem === test;
	});
}

console.log(samePlease(arr4));
console.log(samePlease(arr5));


// 5. Write a function that returns the sum of every element in an array.

let arr6 = [1,2,3,4,5];

const sum = arr => {
	return arr.reduce((total, currentNum) => {
		return total += currentNum;
	});
}

console.log(sum(arr6));

//6. Write a function that finds largest number in an array.

let arr7 =[1,2,6,3,4,5];

const largestNumber = arr => {
	return arr.reduce((largest, current) => {
		if(current > largest){
			return current;
		}
		return largest;
	})
}

console.log(largestNumber(arr7));

//7. Write a function `countZeroes`, which takes an array of numbers as its argument and returns the amount of zeroes that occur in it.

const howManyZeros = arr => {
	return arr.reduce((total, current) => {
		if(current === 0){
			return total + 1;
		}
		return total;
	}, 0)
};

let arr8 = [1,0,0,2,0,3,0,0,0];

console.log(howManyZeros(arr8));					

// 8. Write a function that doubles every element in an array.

const doubler = arr => {
	return arr.map(elem => elem * 2);
}

let arr9 = [1,2,3,4];

console.log(doubler(arr9));

// 9. Write a function that finds the sum of every element in an array doubled

const doubledSum = arr => {
	return arr.map(elem => elem * 2).reduce((sum, current) => {
		return sum + current
	}, 0);
}

console.log(doubledSum(arr9));

//10. Write a function `elementDivisibleBy` with parameters `divisor` and `arr`.  Return a new array of every element of arr that can be evenly divided by divisor.

function elementDivisibleBy(divisor, arr){
	return arr.filter(elem => elem % divisor === 0);
}


let arr10 = [4,5,6,7,8,9,10,11,12,13,14,15];

console.log(elementDivisibleBy(5, [4,5,6,7,8,9,10,11,12,13,14,15]));

//11. Write a `numberTimesIdx` that uses `map` and multiples each number in the array by its index.

const numberTimesIdx = arr => {
	return arr.map((elem, index) => {
		return elem * index
	});
}

let arr11 = [6,7,8,9];

console.log(numberTimesIdx(arr11));

//12. Write a function that returns whether or not every value in an array is a positive even number that doesn't end in 0.

const weirdlySpecific = arr => {
	return arr.every(elem => {
		return elem > 0 && elem % 2 === 0 && !(elem % 10 === 0)
	});
}

let arr12 =[2,4,6,8,12]; 
let arr13 = [2,4,6,8,10];

console.log(weirdlySpecific(arr12));
console.log(weirdlySpecific(arr13));


//13 Write a function that returns the sum of all odd numbers in an Array

const sumOfAllOdd = arr => {
	return arr.filter(elem => {
		return elem % 2 === 1;
	}).reduce((total, current) => {
		return total + current;
	}, 0);
}


let arr14 = [2,3,4,5];
let arr15 = [1,2,3,4,5];

console.log(sumOfAllOdd(arr14));
console.log(sumOfAllOdd(arr15));

// 14. Write a function that returns a new array containing all of the strings in the original array uppercased.

let arr16 = [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"];

const upperCased = arr => {
	return arr.filter(elem => {
		return typeof elem === 'string';
	})
	.map(elem => {
		return elem.toUpperCase();
	});
}

console.log(upperCased(arr16));