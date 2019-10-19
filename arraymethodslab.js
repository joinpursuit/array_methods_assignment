// Problem 1
const addTen = (arr) => {
    return arr.map((el) => {
            return el += 10;
    })
}
console.log(addTen([1, 2, 3, 4, 5]))


// Problem 2
const nonString = (arr) => {
    return arr.map((el) => {
        if (typeof el !== "string") {
            return el = ""
        } else {
            return el
        }
    })
}
console.log(nonString(["a", 123, "b", "c", {name: "cat"}]))


// Problem 3
const onlyEven = (arr) => {
    return arr.filter((el) => {
        return el % 2 === 0;
    })
}
console.log(onlyEven([1,2,3,4,5]))


// Problem 4
const checkAll = (arr) => {
    return arr.every((el) => {
     if (el === arr[el]) {
         return true
     } else {
         return false
     }
    })
}
console.log(checkAll([1,1,1,1,2]))
console.log(checkAll([1,1,1,1,1]))


// Problem 5
const countZeroes = (arr) => {
    let count = 0;
    arr.forEach((el) => {
        if (el === 0) {
        count++;
        }
    })
    return count;
}
console.log(countZeroes([1,0,0,2,0,0,3,0,0]))


// Problem 6
const doubles = (arr) => {
    return arr.map((el) => {
        return el *= 2;
    })
}
console.log(doubles([1,2,3,4]))


// Problem 7
const everyTriple = (arr) => {
    return arr.every((el) => {
        return el * 3 <= 20
    })
}
console.log(everyTriple([1,2,4]))


// Problem 8
const elementDivivbleBy = (arr, divisor) => {
    return arr.filter((el) => {
        return el % divisor === 0;
    })
}
console.log(elementDivivbleBy([4,5,6,7,8,9,10,11,12,13,14,15], 3))


// Problem 9
const numberTimesIdx = (arr) => {
    return arr.map((el, i) => {
        return el * i;
    })
}
console.log(numberTimesIdx([6,7,8,9]))


// Problem 10
const positiveEvenNums = (arr) => {
    return arr.every((el) => {
        return el % 2 === 0 && el % 10 !== 0 && el > 0;
    })
}
console.log(positiveEvenNums([2,4,6,8,10]))


// Problem 11
const upperString = (arr) => {
    let newArr = arr.filter((el) => {
        if (typeof el === "string") {
            return el
        }
    }) 
    return newArr.map((el) => {
        return el.toUpperCase();
    })
}
console.log(upperString([{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]))



// BONUS EXCERCISES
// Problem 1
let arr = [5, 7, 10, 11, -3, "", "dumplings", 0];
Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++){
        cb(this[i])
     }
    }
arr.myForEach((num) => console.log(num * 2))


// Problem 2
Array.prototype.myMap = function (cb) {
    let newArr = []
    for (let i = 0; i < this.length; i++){
        newArr.push(cb(this[i]))
     }
     return newArr
    }
arr.myMap((el) => console.log(el + 1))


// Problem 3
Array.prototype.myFilter = function (cb) {
    let newArr = []
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i]) === true) {
            newArr.push(this[i]);
        }
    }
    return newArr
}
arr.myFilter((el) => console.log(el > 0))