/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function (array) {
  /* let dup = array.slice().sort(function (a, b) {
    return Math.abs(b) - Math.abs(a);
  });
  let total = 1;
  let ct = 0;
  while (ct < 3 && dup[ct] != undefined) {
    total *= dup[ct];
    ct++; */

  let total, temp;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        temp = array[i] * array[j] * array[k];
        if (!total || temp > total) {
          total = temp;
        }
      }
    }
  }
  return total;
};

let result = largestProductOfThree([2, 1, 3, 7]); //  === 42
console.log(result);

result = largestProductOfThree([0, 2, 3]); //  === 0
console.log(result);

result = largestProductOfThree([2, 3, 5]); //  === 30
console.log(result);

result = largestProductOfThree([7, 5, 3]); //  === 105
console.log(result);

result = largestProductOfThree([7, 5, 7]); //  === 245
console.log(result);

result = largestProductOfThree([2, 3, -11, 7, 5, -13]); //  === 1001
console.log(result);

result = largestProductOfThree([-31, 41, 34, -37, -17, 29]); //  === 47027
console.log(result);

result = largestProductOfThree([-1, -2, -3, -4, -5, -6]); //  === -6
console.log(result);