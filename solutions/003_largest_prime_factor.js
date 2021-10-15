// https://projecteuler.net/problem=3
//
// What is the largest prime factor of the number 600851475143?

import { getNextPrime } from '../utils/primes.js';
import { getLargestNumberInArray } from '../utils/numbers.js';

function getLargestPrimeFactor(number) {

    const primeFactors = getPrimeFactors(number);
    return getLargestNumberInArray(primeFactors);

}

function getPrimeFactors(number) {

    let firstDenominator = findSmallestPrimeFactor(number);
    let secondNumerator = number / firstDenominator;
    let numerators = [number, secondNumerator];
    let denominators = [firstDenominator];

    while ( multiplyNumbersInArray(denominators) < number ) {

        const nextDenominator = findSmallestPrimeFactor(numerators[numerators.length -1]);
        denominators.push( nextDenominator );

        const nextNumerator = numerators[numerators.length - 1] / denominators[denominators.length - 1];
        numerators.push( nextNumerator );

    }

    return denominators;

}

function findSmallestPrimeFactor(number, smallestPrime = 2) {

    if ( Number.isInteger(number / smallestPrime) ) return smallestPrime;
    
    return findSmallestPrimeFactor(number, getNextPrime(smallestPrime));

}


function multiplyNumbersInArray(arrayOfNumbers) {

    let result = 1;
    arrayOfNumbers.forEach(number => {
        result = result * number;
    });
    return result;

}

const inputValue = 600851475143;

console.log(getPrimeFactors(inputValue));
console.log(getLargestPrimeFactor(inputValue));