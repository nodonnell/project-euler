// https://projecteuler.net/problem=3
//
// What is the largest prime factor of the number 600851475143?

function getPrimeFactors(number) {



}

function getNextPrime(number, max = 100) {

    while ( number < max ) {
        
        number += 1;
        if( isPrime(number) ) {
            return number;
        }

    }

}

function isPrime(number) {

    for( let i = 2; i <= number; i++ ) {

        if( number % i === 0 ) {
            return false;
        }

    }

    return number > 1;

}

console.log(getNextPrime(3));