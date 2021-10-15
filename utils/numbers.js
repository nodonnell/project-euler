export function getLargestNumberInArray(arrayOfNumbers) {

    arrayOfNumbers.sort ( (a, b) => a - b );
    return arrayOfNumbers[arrayOfNumbers.length - 1];

}

export function getSumOfNumbersInArray(arrayOfNumbers) {
    let sum = 0;
    arrayOfNumbers.forEach(number => {
        sum += number;
    });
    return sum;
}