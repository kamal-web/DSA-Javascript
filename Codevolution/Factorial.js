/**
 * 
 * PROBLEM: Given a number n. Find the factorial of the number
 * 
 * In Mathematics, the factorial of non-negative integer, denoted by n!, Is product of all integers less than or equal to 'n'
*/


function Factorial(n){
    let factorial=1
    for(let i=2;i<=n;i++){
        factorial = factorial * i;
    }

    return factorial;
}

console.log('Factorial',Factorial(4));
console.log('Factorial',Factorial(5));


//Big-O --> O(n)