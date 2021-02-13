/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function (array) {
  let dup = array.slice().sort(function (a, b) {
    return b - a;
  });
  let total = 1;
  let ct = 0;
  while (ct < 3 && dup[ct]) {
    total *= dup[ct];
    ct++;
  }

  return total;
};
let result = largestProductOfThree([2, 1, 3, 7]); //  === 42
console.log(result);

result = largestProductOfThree([2, -5, 3, -2]); //  === -12
console.log(result);