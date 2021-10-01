// https://projecteuler.net/problem=2
//
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function runFibonacciBelowValue(value) {

    let sequence = [1, 2];
    let hitMaxValue = false;

    while( !hitMaxValue ) {

        let nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];

        if( !(nextValue >= value) ) {
            sequence.push( nextValue );
        } else {
            hitMaxValue = true;
        }

    }

    return sequence;

}

function addEvenNumbersInArray(array) {

    let sum = 0;

    array.forEach(number => {
        if(Number.isInteger(number / 2)) {
            sum += number;
        }
    });

    return sum;

}

const sequence = runFibonacciBelowValue(4000000);
const solution = addEvenNumbersInArray(sequence);

console.log('Solution: ' + solution);