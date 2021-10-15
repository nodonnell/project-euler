// https://projecteuler.net/problem=7
//
// What is the 10,001st prime number?

import isPrime from '../utils/isPrime.js';

function find10001stPrimeNumber() {

    let primes = [ 2, 3, 5, 7, 11, 13 ];

    while (primes.length < 10001) {
        primes.push(getNextPrime(primes[primes.length - 1]));
    }

    return 'Prime number ' + primes.length + ' is ' + primes[primes.length - 1];

}

function getNextPrime(number) {

    while (true) {
        number++;
        if ( isPrime(number) ) return number;
    }

}

console.log(find10001stPrimeNumber());