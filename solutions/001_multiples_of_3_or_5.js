// https://projecteuler.net/problem=1
//
// Find the sum of all the multiples of 3 or 5 below 1000.

function findMultiplesOfTwoNumbersBelowNumber (factor1, factor2, belowNumber) {
    let results = [];
    for (let i = 1; i < belowNumber; i++) {
        if (Number.isInteger(i / factor1) || Number.isInteger(i / factor2)) {
            results.push(i);
        }
    }
    return results;
}

let multiples = findMultiplesOfTwoNumbersBelowNumber(3, 5, 1000);
let sumOfMultiples = multiples.reduce((a, b) => a + b, 0);

console.log("Solution: " + sumOfMultiples);