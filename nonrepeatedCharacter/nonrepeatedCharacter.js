/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function (string) {
  var strArr = string.split('').sort();

  for (var i = 0; i < strArr.length; i++) {
    if (strArr.indexOf(strArr[i], i + 1) === -1) {
      return strArr[i];
    }
    while (strArr[i] === strArr[i + 1]) {
      i++;
    }
  }
};

console.log(firstNonRepeatedCharacter('ABA')); // => 'B'
console.log(firstNonRepeatedCharacter('AACBDB')); // => 'C'
console.log(firstNonRepeatedCharacter('AABCAC')); // => 'B'
console.log(firstNonRepeatedCharacter('ABCA')); // => 'B'
console.log(firstNonRepeatedCharacter('AAAACX')); // => 'C'
console.log(firstNonRepeatedCharacter('AABCABD')); // => 'C'
