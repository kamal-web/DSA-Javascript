/**
 * Given the natural number n, determine if the number is prime or not.
 */

function isPrime(n){
    if(n<2){
        return false
    }

    for(let i=2;i<n;i++){
        if( n%i === 0){
            return false;
        }
    }
    return true;

}

console.log(isPrime(1)); //false
console.log(isPrime(5)); //true
console.log(isPrime(4)); //false


//Big -O --> O(n)


/**
 * Integers larger than suare root do not needed to be checked because, whenever `n=a*b`, 
 * one of the two factors 'a' and 'b' is less than or equal to the square root of `n`.
 */

function isPrimeOptimised(n){
    if(n<2){
        return false
    }

    for(let i=2;i<= Math.sqrt(n);i++){
        if( n%i === 0){
            return false;
        }
    }
    return true;

}

console.log(isPrimeOptimised(1)); //false
console.log(isPrimeOptimised(5)); //true
console.log(isPrimeOptimised(4)); //false

// Big-O--> O(sqrt(n))