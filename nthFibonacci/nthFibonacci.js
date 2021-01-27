/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3 5
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

// I: any number greater than 0
// O: sum of the last two numbers after process iteration of input number
// C: n/a
// E: number is less than or equal to 1

// recursive
var nthFibonacci = function (n) {
  if (n <= 0) {
    return;
  }
  if (n === 1) {
    return 0;
  }

  let mthFibonacci = function (m) {
    if (m === 0) {
      return 0;
    }
    if (m === 1) {
      return 1;
    }
    return mthFibonacci(m - 1) + mthFibonacci(m - 2);
  }
  return mthFibonacci(n);
};

console.log('Recursive solution');
console.log(nthFibonacci(0)); // => undefined
console.log(nthFibonacci(1)); // => 0
console.log(nthFibonacci(2)); // => 1
console.log(nthFibonacci(3)); // => 2
console.log(nthFibonacci(4)); // => 3
console.log(nthFibonacci(5)); // => 5
console.log(nthFibonacci(6)); // => 8

console.log('\n Iterative solution');
nthFibonacci = function (n) {
  if (n <= 0) {
    return;
  }
  if (n === 1) {
    return 0;
  }

  // start with number greater than or equals to 2

  let a = 0, b = 1, temp;
  while (n > 2) {
    temp = a;
    a = b;
    b = b + temp;
    n--;
  }
  return a + b;
};

console.log(nthFibonacci(0)); // => undefined
console.log(nthFibonacci(1)); // => 0
console.log(nthFibonacci(2)); // => 1
console.log(nthFibonacci(3)); // => 2
console.log(nthFibonacci(4)); // => 3
console.log(nthFibonacci(5)); // => 5
console.log(nthFibonacci(6)); // => 8