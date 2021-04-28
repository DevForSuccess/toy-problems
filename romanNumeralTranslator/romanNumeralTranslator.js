
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

var translateRomanNumeral = function (romanNumeral) {
    if (typeof romanNumeral !== 'string') {
        return null;
    }
    const arrNum = romanNumeral.split('');
    let total = 0;
    for (let i = 0; i < arrNum.length; i += 2) {
        let digit1 = DIGIT_VALUES[arrNum[i]];
        let digit2 = DIGIT_VALUES[arrNum[i + 1]];
        if (digit1 < digit2) { //subtraction
            total += digit2 - digit1;
        } else if (digit1 > digit2) { // addition
            total += digit1 + digit2;
        }
    }
    return total;
};

console.log(translateRomanNumeral("LX"));
console.log(translateRomanNumeral("IV"));