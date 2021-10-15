// https://projecteuler.net/problem=10s
//
// Find the sum of all the primes below two million.

import { getNextPrime } from "../utils/primes.js";
import { getSumOfNumbersInArray } from "../utils/numbers.js";

function findAllPrimesBelowNumber(max = 2000000) {

    let primes = [2, 3, 5, 7];
    let foundAllPrimesBelowNumber = false;

    while (!foundAllPrimesBelowNumber) {
        let lastPrime = primes[primes.length - 1];
        let nextPrime = getNextPrime(lastPrime);
        if (nextPrime < max) {
            primes.push(nextPrime);
        } else {
            foundAllPrimesBelowNumber = true;
        }
    }

    return primes;
    
}

const primes = findAllPrimesBelowNumber();
const solution = getSumOfNumbersInArray(primes);

// 15-Oct-2021: This takes a long time to calculate right now.
//              The solution is 142913828922.

console.log(solution);