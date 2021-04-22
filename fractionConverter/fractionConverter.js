/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function (number) {
    let multiplier = 0;
    let denominator = 10; // 2, 5

    const getMultiplier = (_num) => {
        if (Number.isInteger(_num)) {
            return;
        } else {
            multiplier++;
            _num *= denominator ** multiplier;
            getMultiplier(_num);
        }
    }
    getMultiplier(number);

    let numerator = number * (denominator ** multiplier);
    denominator = denominator ** multiplier;

    do {
        if (Number.isInteger(numerator / 5) && Number.isInteger(denominator / 5)) {
            numerator /= 5;
            denominator /= 5;
        }
        if (Number.isInteger(numerator / 2) && Number.isInteger(denominator / 2)) {
            numerator /= 2;
            denominator /= 2;
        }

    } while ((Number.isInteger(numerator / 5) && Number.isInteger(denominator / 5)) || (Number.isInteger(numerator / 2) && Number.isInteger(denominator / 2)));

    let result = '' + numerator + '/' + denominator;

    return result;
};