/**
 *Problem 4.	Check if Number is Prime
 Write a JavaScript function isPrime(value) that checks if an integer number is prime.
 Write JS program primeChecker.js that checks if a few numbers are prime.
 The result should be printed on the console (true or false) on the console.
 Run the program through Node.js.
 */

function isPrime(value){
    var q = Math.sqrt (value);
    for (var i = 2; i <= q; i++)
    {
        if (value % i == 0)
        {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7));
console.log(isPrime(254));
console.log(isPrime(587));