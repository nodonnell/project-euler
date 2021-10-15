// https://projecteuler.net/problem=8
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product of a, b, and c.

function isPythagoreanTriplet (a, b, c) {
    if (!(a < b < c)) return false;
    
    const squareOfA = Math.pow(a, 2);
    const squareOfB = Math.pow(b, 2);
    const squareOfC = Math.pow(c, 2);
    
    return (squareOfA + squareOfB) === squareOfC;    
}

function findPythagoreanTripletForWhichAPlusBPlusCEquals1000() {

    for (let a = 2; a < 998; a++) {
        for (let b = 3; b < 998; b++) {
            for (let c = 4; c < 998; c++) {
                if (!(a < b) || !(b < c)) continue;
                if (isPythagoreanTriplet(a, b, c) && ((a + b + c) === 1000)) return {a, b, c};
            }
        }
    }

    return {a: -1, b: -1, c: -1};

}

const triplet = findPythagoreanTripletForWhichAPlusBPlusCEquals1000();
const solution = triplet.a * triplet.b * triplet.c;
console.log(solution);