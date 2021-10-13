// https://projecteuler.net/problem=6
//
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function findSumOfSquaresOf1Through100() {

    let squares = 0;
    for (let i = 1; i <= 100; i++) squares+= Math.pow(i, 2);
    
    return squares;

}

function findSquareOfSumOf1Through100() {

    let sum = 0;
    for (let i = 1; i <= 100; i++) sum+=i;

    let result = Math.pow(sum, 2);
    return result;

}

console.log('Answer: ' + (findSquareOfSumOf1Through100() - findSumOfSquaresOf1Through100()));