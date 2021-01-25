/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

console.log('O: ', 'a boolean value indicating whether or not a context array is a subset of an input array');
console.log('I: ', '1-context array associated with the subsequent input,\n\    2-input array to check whether the context array is a subset of it');
console.log('C: ', 'disregard duplicates value in the first input');
console.log('E', 'make the method work for arrays that contain objects or arrays as elements');

Array.prototype.isSubsetOf = function (arr) {
  for (let i = 0; i < this.length; i++) {
    let arg = this[i];
    if (Array.isArray(arg)) {
      let result = Array.prototype.isSubsetOf(arg);
      if (result === false) {
        return false;
      }
    } else if (typeof arg === 'object') {
      let stringifyStr = JSON.stringify(arg);
      let stringifyInput = JSON.stringify(arr);
      let result = stringifyInput.indexOf(stringifyStr);
      if (result === false) {
        return false;
      }
    } else {
      if (arr.indexOf(arg) === -1) {
        return false;
      }
    }
  }
  return true;
};

let contextArr = [];
let inputArr = [];
let result = 'true/false';
let test = 'isSubsetOf';
contextArr.prototype = Array.prototype;

contextArr = ['commit', 'push'];
inputArr = ['commit', 'rebase', 'push', 'blame'];
result = contextArr.isSubsetOf(inputArr); // true
console.log(contextArr, ' ', test, ' ', inputArr, ': ', result);

contextArr = ['merge', 'reset', 'reset'];
inputArr = ['reset', 'merge', 'add', 'commit'];
result = contextArr.isSubsetOf(inputArr); // true
console.log(contextArr, ' ', test, ' ', inputArr, ': ', result);

contextArr = ['car', 'house', ['coffee', 'hot chocolate']];
inputArr = ['reset', 'merge', 'add', 'commit', 'car', 'house', ['coffee', 'hot chocolate']];
result = contextArr.isSubsetOf(inputArr); // true
console.log(contextArr, ' ', test, ' ', inputArr, ': ', result);

contextArr = [{ key1: 'value1', key2: 'value2' }];
inputArr = ['car', 'house', ['coffee', 'hot chocolate'], { key1: 'value1', key2: 'value2' }];
result = contextArr.isSubsetOf(inputArr); // true
console.log(contextArr, ' ', test, ' ', inputArr, ': ', result);

contextArr = ['cat', 'dog', 'cow'];
inputArr = ['dog', 'cow', 'fox'];
result = contextArr.isSubsetOf(inputArr); // false
console.log(contextArr, ' ', test, ' ', inputArr, ': ', result);

contextArr =  ['cat', 'cat', 'dog'];
inputArr = ['cat', 'dog'];
result = contextArr.isSubsetOf(inputArr); // true
console.log(contextArr, ' ', test, ' ', inputArr, ': ', result);

contextArr =  ['cat', 'cat', 'dog'];
inputArr = ['cat'];
result = contextArr.isSubsetOf(inputArr); // true
console.log(contextArr, ' ', test, ' ', inputArr, ': ', result);

contextArr =  [1, 'cat', 3];
inputArr = [4, 3, 'cat', 1];
result = contextArr.isSubsetOf(inputArr); // true
console.log(contextArr, ' ', test, ' ', inputArr, ': ', result);

contextArr =  [1, 'cat', 3];
inputArr = [4, 'cat', 1];
result = contextArr.isSubsetOf(inputArr); // false
console.log(contextArr, ' ', test, ' ', inputArr, ': ', result);