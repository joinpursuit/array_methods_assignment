/**
 * Takes in an array of numbers and returns the sum of all elements.
 * Must use forEach
 * @param {number[]} nums
 * @returns {number} Sum of all numbers
 */

const sumArray = (nums) => {
	let sum = 0;
	nums.forEach((el) => {
		sum += el;
	});
	return sum;
};

/**
 * Takes in an array of numbers and returns the amount of zeros that occur in it.
 * @param {numbers[]} nums
 * @returns {number} Number of zeros
 * Must use forEach
 */

const zeroCount = (nums) => {
	let amount = 0;
	nums.forEach((el) => {
		if (el === 0) {
			amount += 1;
		}
	});
	return amount;
};

/**
 * Takes in an array of numbers and returns a new array where each
 * element has been incremented by 10.
 * Must use map.
 * @param {number[]} nums
 * @returns {number[]} Array with each previous number plus 10.
 */

/* const plusTen = (nums) => {
  return nums.map((el) => {
  return el += 10;
});
}; */
const plusTen = (nums) => nums.map((el) => (el += 10));

/**
 * Takes in an array and returns a new array where every non-string
 * element is converted to an empty string.
 * Must use map.
 * Exp Input: ["a", 123, "b", "c", {name: "cat"}]
 * Output: ["a", "", "b", "c", ""]
 * @param {Array} items
 * @returns {string[]} All strings remain, all non strings are now empty strings.
 */

const stringsOnly = (items) => {
	return items.map((el) => {
		if (typeof el !== "string") {
			return (el = "");
		} else {
			return el;
		}
	});
};

/**
 * Takes in an array and returns a new array with only the even elements.
 * Must use filter
 * @param {number[]} nums
 * @returns {number[]} Only even valued elements
 */

// const onlyEvens = (nums) => {
//    return nums.filter((el) => {
//     return (!(el % 2))
//   })
// };
const onlyEvens = (nums) => nums.filter((el) => !(el % 2));
/**
 * Takes in an array and returns a new array with only the elements
 *  that are numbers.
 * Must use filter
 * @param {Array} items
 * @returns {number[]} Only number items should remain.
 */

// const numbersOnly = (items) => {
//   return items.filter((el) => {
//     return (typeof el === "number")
//   })
// };
const numbersOnly = (items) => items.filter((el) => typeof el === "number");
/**
 * Takes in an array and checks if all elements in the array are the same.
 * Must use every
 * @param {Array} items
 * @returns {boolean} Whether or not all elements are the same.
 */

const isAllSame = (items) => {
	return items.every((el) => {
		for (let i = 0; i < items.length; i++) {
			return el === items[i];
		}
	});
};

/**
 * Takes in an array and returns whether or not all elements in the array are odd.
 * @param {number[]} nums
 * @returns {boolean} All odd?
 */

const isAllOdd = (nums) => {
	return nums.every((el) => {
		return el % 2;
	});
};

/**
 * Takes in an array of numbers and a target.
 * Returns the number of times the target occurs in the array.
 * @param {number[]} nums
 * @param {number} target
 * @returns {number} Number of target occurrences
 */

const targetCount = (nums, target) => {
	let count = 0;
	nums.forEach((el) => {
		if (el === target) {
			count++;
		}
	});
	return count;
};

/**
 * Takes in an array of elements and returns an Object that contains
 * the count of each element.
 * @param {Array} items
 * @returns {Object} A mapping of elements to their occurrence count.
 */
const counterObject = (items) => {
	let objCounter = {};
	for (let i = 0; i < items.length; i++) {
		let el = items[i];
		if (objCounter[el]) {
			objCounter[el]++;
		} else {
			objCounter[el] = 1;
		}
	}
	return objCounter;
};

// cat: 3 ==> push el: count into the object ==>
//object[el] = count

/**
 * Takes in an array of numbers and returns a new array with each element doubled.
 * @param {number[]} nums
 * @returns {number[]} Each element has been doubled
 */

const doubled = (nums) => {
	return nums.map((el) => {
		return (el *= 2);
	});
};

/**
 * Takes in an array and returns whether every number is less than 20 even after
 * being tripled.
 * @param {number[]} nums
 * @returns {boolean} Each number times 3 less than 20 ?
 */

const tripledAndLessThan20 = (nums) => {
	let result = nums.map((el) => {
		return (el *= 3);
	});
	return result.every((el) => {
		return el < 20;
	});
};

/**
 * Takes in a divisor and an array of numbers.
 * Return a new array of every element that can be evenly divided
 * by divisor.
 * @param {number} divisor
 * @param {number[]} nums
 * @returns {number[]} Numbers evenly divided by divisor.
 */

const divisibleBy = (divisor, nums) => {
	return nums.filter((number) => {
		//loop the array and get multiples of 5
		return number % divisor === 0;
	});
};

/* DOES NOT WORK
const divisibleBy = (divisor, nums) => {
	let filterArr = [];
	let output = nums.map((el) => {
		return el % divisor;
	});

	return (filterArr = output.filter((el) => {
		if (el - Math.floor(el) === 0) {
			return filterArr.push(el);
		}
		return filterArr;
	})); // cannot get it to return the element
}; */

/**
 * Takes in an array and returns a new array where each element
 * has been multiplied by it's index.
 * Exp Input: [6,7,8,9]
 * Output: [0,7,16,27]
 * @param {number[]} nums
 * @returns {number[]} Numbers times their index
 */

const numberTimesIdx = (nums) => {
	return nums.map((el, i) => {
		return el * i;
	});
};

/**
 * Takes in an array of numbers and returns whether or not every value
 * in the array is a positive even number that doesn't end it 0.
 * Exp Input: [2,4,6,8,12]
 * Output: true
 *
 * Exp Input: [2,4,6,8,10]
 * Output: false
 *
 * @param {number[]} nums
 * @returns {boolean} Are all numbers positive, even, and not ending in 0.
 */

const arePositiveEvenAndNonZeroEnding = (nums) => {
	//is it positive? ==> >0
	//does NOT want it end in zero? ==> num % 10 !== 0
	//is it even? ==> num % 2 === 0
	//need answer in boolean ==> .every
	//.filter to extract the conditions and store in an array // don't want to filter, just wants to evaluate
	//loop through the new array to check each value for truthyness
	return nums.every((number) => {
		return number > 0 && number % 2 === 0 && number % 10 !== 0;
	});
};

/**
 * Takes in an array of elements.
 * Returns a new array containing all of the string elements, but now uppercase.
 * Exp Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
 * Output: ["CAT", "DOG", "BEAR"]
 * @param {Array} items
 * @returns {string[]} All strings uppercase.
 */

const stringsAndCaps = (items) => {
	return items.filter((word) => {
		if (typeof word === "string") {
			return word.toUpperCase();
		}
	});
};
//.map gave us the correct words to uppercase
//.filter gave us correct words but lowercase

module.exports = {
	sumArray,
	zeroCount,
	plusTen,
	stringsOnly,
	onlyEvens,
	numbersOnly,
	isAllSame,
	isAllOdd,
	targetCount,
	counterObject,
	doubled,
	tripledAndLessThan20,
	divisibleBy,
	numberTimesIdx,
	arePositiveEvenAndNonZeroEnding,
	stringsAndCaps,
};
