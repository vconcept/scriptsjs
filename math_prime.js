function isPrime(num) {
    if (num <= 1) return false; 
    if (num <= 3) return true;  

    
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Check factors from 5 up to √num
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}


console.log(isPrime(2));   
console.log(isPrime(4));   
console.log(isPrime(17));   
console.log(isPrime(25));  