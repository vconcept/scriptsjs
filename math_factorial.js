function factorial(x) {
    let fact = 1;
    while (x > 1) {
        fact *= x;
        x--;   
    }
    return fact;
}

console.log(factorial(12));
console.log(factorial(20));
