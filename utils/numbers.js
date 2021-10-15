export function getLargestNumberInArray(arrayOfNumbers) {

    arrayOfNumbers.sort ( (a, b) => a - b );
    return arrayOfNumbers[arrayOfNumbers.length - 1];

}