/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

/* var commonCharacters = function (string1, string2) {
  let common = string1.split('').filter(l => {
    if (string2.includes(l)) {
      return l;
    }
  });
  return common.join('');
};

console.log(commonCharacters('acexivou', 'aegihobu')); */

let reducer = (acc, val) => {
  let common = acc.split('').filter((l, idx) => {
    if (val.includes(l) && !acc.slice(0, idx).includes(l)) {
      return l;
    }
  });
  return common.join('');
}

var commonCharacters = function () {
  let commons = [...arguments].reduce(reducer);
  return commons;
}
console.log(commonCharacters('aocexaievou', 'aegiohoaebu', 'ballplayer', 'aeiou'));
var result = commonCharacters('zyx', 'xzy');
console.log(result);