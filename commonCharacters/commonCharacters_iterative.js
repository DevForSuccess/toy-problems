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

var commonCharacters = function () {
  let strJoin = '';
  for (let i=0; i<arguments.length-1; i++) {
    let str1 = arguments[i];
    let str2 = arguments[i+1];

    for (let j = 0; j < str1.length; j++) {
      let chr1 = str1[j];
      if (chr1 !== ' ') {
        if (strJoin.indexOf(str1[j]) == -1) {
          if (str2.indexOf(str1[j]) >= 0) {
            strJoin += str1[j];
          }
        }
      }
    }
  }

  return strJoin;
}

let result = commonCharacters('acexivou', 'aegihobu');
console.log(result);

result = (commonCharacters('aocexaievou', 'aegiohoaebu', 'ballplayer', 'aeiou'));
console.log(result);

result = commonCharacters('zyx', 'xzy');
console.log(result);