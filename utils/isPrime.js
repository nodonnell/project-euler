export default function isPrime(number) {

    let factors = 0;

    for (let i = 2; i <= number; i++) {

        if (Number.isInteger(number / i)) {
            factors++;
        }

        if (factors > 1) {
            return false;
        }

    }

    return number > 1;

}