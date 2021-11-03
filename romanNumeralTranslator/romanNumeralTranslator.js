
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
    for (let i = 0; i <= arrNum.length - 1;) {
        let digit1 = DIGIT_VALUES[arrNum[i]];
        let digit2 = DIGIT_VALUES[arrNum[i + 1]] || 0;
        let digit3 = DIGIT_VALUES[arrNum[i + 2]] || 0;

        if (digit2 < digit3) {
            total += (digit3 - digit2) + digit1;
            i += 3;
        } else if (digit1 < digit2) {
            total += digit2 - digit1;
            i += 2;
        } else {
            total += digit1 + digit2;
            i += 2;
        }
    }
    return total;
};