// https://projecteuler.net/problem=5
//
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function findSmallestPositiveNumberEvenlyDivisibleBy1To20() {

    let number = 0;
    let found = false;

    while (!found) {
        number++;
        if (isEvenlyDivisibleBy1Through20(number)) found = true;
    }

    return number + ' is evenly divisible by 1 through 20.'

}

function isEvenlyDivisibleBy1Through20(number) {
    for (let i = 1; i <= 20; i++) {
        if (!isEvenlyDivisible(number, i)) return false;
    }
    return true;
}

function isEvenlyDivisible(numerator, denominator) {
    return Number.isInteger(numerator/denominator)
};

console.log(findSmallestPositiveNumberEvenlyDivisibleBy1To20());