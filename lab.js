const incrementBy10 = (arr) => {
    return arr.map((el) => {
        return el + 10;
    })
}

console.log(incrementBy10([1,2,3,4,5])) 


// 
const onlyStrings = (arr) => {
    return arr.map((el) => {
        if(typeof el === 'string') {
            return el
        } else {
            return ""
        }
    })
}

console.log(onlyStrings(["a", 123, "b", "c", {name: "cat"}])) 


// 
const onlyEven = (arr) => {
    return arr.filter((el) => el % 2 === 0)
}
console.log(onlyEven([1,2,3,4,5])); 


// 
const allTheSame = (arr) => {
    return arr.every((el) => {
        return el === arr[0]
    })
}

console.log(allTheSame([1,1,1,1,1])); 



// 
const countZeroes = (arr) => {
    let count = 0;
    arr.forEach((el) => {
        if(el === 0) {
            count++
        }
    })
    return count;
}

console.log(countZeroes([1,0,0,2,0,3,0,0,0]))


// 
const doubleEl = (arr) => {
    return arr.map((el) => {
        return el *= 2
    })
}

console.log(doubleEl([1,2,3,4])) 


// 
const ifTrippled = (arr) => {
    return arr.every((el) => {
        return el * 3 < 20
     })
}
console.log(ifTrippled([1,2,4,7]));
console.log(ifTrippled([1,2,5]));



// 
const elementDivisableBy = (divisor, arr) => {
    return arr.filter((el) => {
        if (el % divisor === 0){
            return el
        }
    })
}
console.log(elementDivisableBy(5, [4,5,6,7,8,9,10,11,12,13,14,15]))


// 
const numberTimesIdx = (arr) => {
    return arr.map((el, i) => el * i);
}

console.log(numberTimesIdx([7,8,9]))


// 
const positiveEven = (arr) => {
    return arr.every((el) => {
        return el > 0 && el % 2 === 0 && el % 10 !== 0;
    })
}

console.log(positiveEven([2,4,6,8,12]))
console.log(positiveEven([2,4,6,8,10]))




// 
const string = (arr) => {
    newArr = arr.filter((el) => typeof el === 'string')
    return newArr.map((el) => el.toUpperCase())
}

console.log(string([{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"])) 
