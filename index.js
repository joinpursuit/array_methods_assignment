const incrementBy10 = (arr) => {
    return arr.map((el) => {
        return el + 10;
    })
}

console.log(incrementBy10([1,2,3,4,5])) ///[11,12,13,14,15]