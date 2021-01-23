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
  for (let i=0; i<this.length; i++) {
    let arg = this[i];
    if (arg.indexOf(arg) === -1) {
      return false;
    }
  }
  return true;
};

let a = ['commit','push'];
a.prototype = Array.prototype;
let result = a.isSubsetOf(['commit','rebase','push','blame']); // true
console.log(result);

let b = ['merge','reset','reset'];
b.prototype = Array.prototype;
b.isSubsetOf(['reset','merge','add','commit']) // true
console.log(result);