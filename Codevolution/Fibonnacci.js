
/** 
 * PROBLEM: Given a number n. Find first 'n' elements of Fibonacci series
 * 
 * In Mathematics, fibonnacci sequence is a sequence in which each number is the sum of the two preceeding ones.
*/


function fibonnacciSequence(n){
    let FbSeries = [0,1];
    if(n<=2){
        return FbSeries;
    }
    for(let i=2;i<n;i++){
        FbSeries[i] = FbSeries[i-1] + FbSeries[i-2];
    }
    return FbSeries;
}

console.log('Fibonnacci series', fibonnacciSequence(2)); // [ 0, 1 ]
console.log('Fibonnacci series', fibonnacciSequence(3)); //[ 0, 1, 1 ]
console.log('Fibonnacci series', fibonnacciSequence(7)); //[0, 1, 1, 2,3, 5, 8]

// Big - O -- O(n)
