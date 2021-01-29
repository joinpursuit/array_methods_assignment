/**
 * Takes in an array of numbers and returns the sum of all elements.
 * Must use forEach
 * @param {number[]} nums
 * @returns {number} Sum of all numbers
 */

const sumArray = (nums) => {
	let sum = 0
	nums.forEach((num) => {
		sum += num
	})
	return sum
}

/**
 * Takes in an array of numbers and returns the amount of zeros that occur in it.
 * @param {numbers[]} nums
 * @returns {number} Number of zeros
 * Must use forEach
 */

const zeroCount = (nums) => {
	let num = 0
	nums.forEach((elem) => {
		if (elem === 0) {
			num++
		}
	})
	return num
}

/**
 * Takes in an array of numbers and returns a new array where each
 * element has been incremented by 10.
 * Must use map.
 * @param {number[]} nums
 * @returns {number[]} Array with each previous number plus 10.
 */

const plusTen = (nums) => {
	let newNum = nums.map((num) => {
		return num + 10
	})
	return newNum
}

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
	let newArr = items.map((elem) => {
		if (typeof elem === 'string') {
			return elem
		} else {
			return ''
		}
	})
	return newArr
}
/**
 * Takes in an array and returns a new array with only the even elements.
 * Must use filter
 * @param {number[]} nums
 * @returns {number[]} Only even valued elements
 */

const onlyEvens = (nums) => {
	let newArr = nums.filter((num) => {
		if (num % 2 === 0) {
			return true
		}
	})
	return newArr
}

/**
 * Takes in an array and returns a new array with only the elements
 *  that are numbers.
 * Must use filter
 * @param {Array} items
 * @returns {number[]} Only number items should remain.
 */

const numbersOnly = (items) => {
	return items.filter((elem) => typeof elem === 'number')
}

/**
 * Takes in an array and checks if all elements in the array are the same.
 * Must use every
 * @param {Array} items
 * @returns {boolean} Whether or not all elements are the same.
 */

const isAllSame = (items) => {
	let allSame = items.every((element) => {
		return element === items[0]
	})
	return allSame
}

/**
 * Takes in an array and returns whether or not all elements in the array are odd.
 * @param {number[]} nums
 * @returns {boolean} All odd?
 */

const isAllOdd = (nums) => {
	let allOdd = nums.every((elem) => {
		return elem % 2 === 1
	})
	return allOdd
}

/**
 * Takes in an array of numbers and a target.
 * Returns the number of times the target occurs in the array.
 * @param {number[]} nums
 * @param {number} target
 * @returns {number} Number of target occurrences
 */

const targetCount = (nums, target) => {
	let count = 0
	nums.forEach((elem) => {
		if (elem === target) {
			count++
		}
	})
	return count
}
/**
 * Takes in an array of elements and returns an Object that contains
 * the count of each element.
 * @param {Array} items
 * @returns {Object} A mapping of elements to their occurrence count.
 */

const counterObject = (items) => {
	let newObj = {}
	items.forEach((item) => {
		if (newObj[item] === undefined) {
			newObj[item] = 1
		} else {
			newObj[item]++
		}
	})
	return newObj
}

/**
 * Takes in an array of numbers and returns a new array with each element doubled.
 * @param {number[]} nums
 * @returns {number[]} Each element has been doubled
 */

const doubled = (nums) => {
	let newArr = nums.map((elem) => {
		return elem * 2
	})
	return newArr
}

/**
 * Takes in an array and returns whether every number is less than 20 even after
 * being tripled.
 * @param {number[]} nums
 * @returns {boolean} Each number times 3 less than 20 ?
 */

const tripledAndLessThan20 = (nums) => {
	let newArr = nums.every((elem) => {
		return elem * 3 < 20
	})
	return newArr
}

/**
 * Takes in a divisor and an array of numbers.
 * Return a new array of every element that can be evenly divided
 * by divisor.
 * @param {number} divisor
 * @param {number[]} nums
 * @returns {number[]} Numbers evenly divided by divisor.
 */

const divisibleBy = (divisor, nums) => {
	let onlyEvens = nums.filter((num) => {
		return num % divisor === 0
	})
	return onlyEvens
}

/**
 * Takes in an array and returns a new array where each element
 * has been multiplied by it's index.
 * Exp Input: [6,7,8,9]
 * Output: [0,7,16,27]
 * @param {number[]} nums
 * @returns {number[]} Numbers times their index
 */

const numberTimesIdx = (nums) => {
	let timesIdx = nums.map((elem, i) => {
		return elem * i
	})
	return timesIdx
}

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
	let newArr = nums.every((elem) => {
		if (elem % 2 === 0 && elem % 10 !== 0 && elem > 0) {
			return true
		}
	})
	return newArr
}

/**
 * Takes in an array of elements.
 * Returns a new array containing all of the string elements, but now uppercase.
 * Exp Input: [{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]
 * Output: ["CAT", "DOG", "BEAR"]
 * @param {Array} items
 * @returns {string[]} All strings uppercase.
 */

const stringsAndCaps = (items) => {
	let arr = items.map((item) => {
		return typeof item === 'string' ? item.toUpperCase() : null
	})
	arr = arr.filter((item) => {
		return typeof item === 'string'
	})
	return arr
}

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
}
