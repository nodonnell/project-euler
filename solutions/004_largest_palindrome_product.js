// https://projecteuler.net/problem=3
//
// Find the largest palindrome made from the product of two 3-digit numbers.

function findLargestPalindromeProductFromTwoThreeDigitNumbers() {

    let palindromes = [];

    for (let firstFactor = 999; firstFactor > 100; firstFactor--) {
        for (let secondFactor = 999; secondFactor > 100; secondFactor--) {
            const eval = findProductAndCheckForPalindrome(firstFactor, secondFactor);
            if (eval.palindromeFound) {
                palindromes.push({ 'product' : eval.product, 'firstFactor' : firstFactor, 'secondFactor' : secondFactor });
            }
        }
    }

    palindromes.sort((a, b) => a.product - b.product);
    let largestPalindrome = palindromes[palindromes.length - 1];
    
    return 'Product: ' + largestPalindrome.product + ' is a palindrome of ' + largestPalindrome.firstFactor + ' and ' + largestPalindrome.secondFactor + '!';

}

function findProductAndCheckForPalindrome(firstNumber, secondNumber) {
    let product = firstNumber * secondNumber;
    let palindromeFound = isPalindromicNumber(product);
    return { "product": product, "palindromeFound": palindromeFound }
}

function isPalindromicNumber(number) {

    if ( number === 0 ) return false;

    const numberString = number.toString();
    const firstChar = numberString[0];
    const lastChar = numberString[numberString.length - 1];

    if ( firstChar !== lastChar ) return false;

    for ( let i = 0; i < numberString.length; i++ ) {

        const leftChar = numberString[i];
        const rightChar = numberString[numberString.length - 1 - i];

        if ( leftChar !== rightChar ) return false;

    }

    return true;

}

console.log(findLargestPalindromeProductFromTwoThreeDigitNumbers());