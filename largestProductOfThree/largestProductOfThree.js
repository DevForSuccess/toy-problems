/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

// brute force approach
// time complexity : O(n^3)
var largestProductOfThree = function (array) {
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

let time1 = new Date();
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
let time2 = new Date();
console.log('(Brute force approach O(n^3), time needed: ', time2 - time1, 'seconds');

//optimization using 5 variables
// time complexity : O(n)
largestProductOfThree = function (array) {
  let min1 = Number.MAX_SAFE_INTEGER;
  let min2 = Number.MAX_SAFE_INTEGER;
  let max1 = Number.MIN_SAFE_INTEGER;
  let max2 = Number.MIN_SAFE_INTEGER;
  let max3 = Number.MIN_SAFE_INTEGER;

  array.forEach(num => {
    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }

    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 = num;
    } else if (num > max3) {
      max3 = num;
    }
  });

  return Math.max(max1 * max2 * max3, min1 * min2 * max1);
};

time1 = new Date();
result = largestProductOfThree([2, 1, 3, 7]); //  === 42
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
time2 = new Date();
console.log('(Optimized using 5 variables O(n), time needed: ', time2 - time1, 'seconds');