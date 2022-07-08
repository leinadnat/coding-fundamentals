function factorialOf(n) {
    if ( n === 0) {
        return `0 can't be factorialized`;
    } else {
        let factorialized = 1;
        for (let i = 1; i <= n; i++) {
            factorialized *= i
        }
        return `The factorial of ${n}! is: ` + factorialized;
    }
}
console.log(factorialOf(1));
console.log(factorialOf(2));
console.log(factorialOf(3));
console.log(factorialOf(4));
console.log(factorialOf(5));
console.log(factorialOf(6));
console.log(factorialOf(0));
