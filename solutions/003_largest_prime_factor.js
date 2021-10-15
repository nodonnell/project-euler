// https://projecteuler.net/problem=3
//
// What is the largest prime factor of the number 600851475143?

import isPrime from '../utils/isPrime.js';

function getLargestPrimeFactor(number) {

    const primeFactors = getPrimeFactors(number);
    primeFactors.sort( (a, b) => a - b );
    return primeFactors[primeFactors.length - 1]

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

function getNextPrimeFactor(number, primeFactors) {

    let quotients = [number];
    
    for ( let i = 0; i < primeFactors.length; i++ ) {

        const nextQuotient = quotients[i]/primeFactors[i];
        quotients.push(nextQuotient);

    }

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

function getNextPrime(number, max = inputValue) {

    while ( number < max ) {
        
        number++;
        if( isPrime(number) ) {
            return number;
        }

    }

    return -1;

}

const inputValue = 600851475143;

console.log(getPrimeFactors(inputValue));
console.log(getLargestPrimeFactor(inputValue));