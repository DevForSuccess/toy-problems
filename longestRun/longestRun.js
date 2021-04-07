/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
    let result = {};
    key = () => Object.keys(result)[0];
    let longest = 0, current = 0, start = 0;
    let char = '';

    for (let i = 0; i < string.length - 1; i++) {
        if (!char) {
            char = string[i];
        }
        if (string[i] === char) {
            current++;
        } else {
            if (current > longest) {
                result = {};
                result[char] = [start, i-1];
                longest = current;
            }
            char = string[i];
            current = 1;
            start = i;
        }
    };
    return result[key()];
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
    var text = '';
    var possible = 'abcdefghijklmnopqrstuvwxyz';

    for (var i = 0; i < len; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
};

let result = longestRun(randomString(15));
console.log(result);
