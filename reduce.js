
const upByTen = (arr) => {
    return arr.map((el) => {
        return el += 10 
    })
} 


const ten = (arr) => {

   return arr.reduce((newArr, el, i) => {

        
     newArr[i] = el+10
   
     return newArr


    },[])

}
console.log(ten([1,2,3,4]))

// Given an array, return a new array where every non-string 
// element is converted to an empty string.

const stringarr  = (arr) => {

    return arr.reduce((newArr, el, i) => {
    
        if (typeof el === "string"){

            newArr[i] = el
        } else {
            newArr[i] = ""
        }
         
       
    
      return newArr
 
 
     },[])
 
 }


 console.log(stringarr(["a", 123, "b", "c", {name: "cat"}]))

//  3. Write a function that returns 
//  only the even elements in an array of numbers.


const Evenarr  = (arr) => {

    return arr.reduce((newArr, el) => {
    
        if (el%2 ==0 ){

            newArr.push(el)
        }
       
    
      return newArr
 
 
     },[])
 
 }

 console.log(Evenarr([1,2,3,4]))


//  4. Write a function that checks if 
//  all elements in the array are the same.

const sameArr = (arr) => {

    return arr.reduce((same, el, i) => {
    
        if (arr[0] !== el){
            same = false
            
        } 
        
        
     return same
 
     },true)
 
 }

console.log(sameArr([1,1,1,2]))

// 5. Write a function `countZeroes`,
//  which takes an array of numbers as its argument and 
//  returns the amount of zeroes that occur in it.


const countZeroes = (arr) => {

   return arr.reduce((count,el)=>{

        if(el === 0){
            count +=1
        }
        return count

    },0)

}

console.log(countZeroes([0,2,3,4]))


// Write a function that doubles every element in an array.


const doubleArr = (arr) => {

   return arr.reduce((newArr,el)=> {

        newArr.push(el*2)

        return newArr

    }, [])


}

console.log(doubleArr([1,2,3,4]))


// 7. Write a function that whether every
//  tripled number in an array is less than 20.

const lessthan = (arr) => {

    return arr.reduce((lessthan,el)=> {
        
         if(el*3 > 20){
             
            lessthan = false
         } 

        return lessthan
     },true)
 
 
 }


console.log(lessthan([3,4,5,7]))



// 8. Write a function `elementDivisibleBy` with parameters
//  `divisor` and `arr`.  Return a new array of every element 
//  of arr that can be evenly divided by divisor.

const elementDivisibleBy = (arr,divisor) => {

   return arr.reduce((newArr,el) =>{

        if(  el % divisor === 0){
            newArr.push(el)
        }

        return newArr

    },[])

}


console.log(elementDivisibleBy([4,5,6,7,8,9,10,11,12,13,14,15],5))

// 9. Write a `numberTimesIdx` that uses `map`
//  and multiples each number in the array by its index.


const numberTimesIdx = (arr) => {

  return  arr.reduce((newArr,el,i)=>{

        newArr.push(el*i)

        return newArr



    },[])


}

console.log(numberTimesIdx([6,7,8,9]))

// 10. Write a function that returns whether or 
// not every value in an array is a positive even number 
// that doesn't end in 0.

const positiveNotZero =(arr) => {


   return arr.reduce((numPos,el)=>{

    if(el < 0 || el%10 !== 0){
            numPos = false
        }
        return numPos

    },true)
}


console.log( positiveNotZero( [2,4,6,8,10]))

// 11. Write a function that returns a new array 
// containing all of the strings in the original
//  array uppercased.

const upperCaseArr = (arr) =>{

    return arr.reduce((newArr, el,i) => {

        if(typeof el === "string"){

            newArr.push (el.toUpperCase())
        }

        return newArr

    },[])


}

console.log (upperCaseArr ([{}, 1, "cat", 3, ["hi"], {name: "dog"}, "dog", "bear"]))