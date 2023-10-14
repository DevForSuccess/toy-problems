/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 * Answer: O(n^2) where n = number element - 1
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 * Answer: worst case (reverse order: O(n^2)
 *         best case (array is already sorted): O(n-1)
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
 * Answer: no, at completion of each iteration, the higher number is already
 *         at its rightmost correct position so we don't need to compare against
 *         it anymore.
 *         yes, the complexity becomes O(n/2(n+1)) where n = number element - 1
 *
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.
// Time complexity: O(n)2 since it needs to iterate the rest of the elements
// for each element in the array.

var bubbleSort = function (array) {
  let n = 0;
  let isSwap = false;
  let swapCount = 0;

  for (let i = 0; i < array.length - 1; i++) {
    isSwap = false;
    for (let j = 0; j < array.length - 1; j++) {
      n++;
      if (array[j] > array[j + 1]) {
        isSwap = true;
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
      if (isSwap) swapCount++;
      // console.log(`${n}: ${array}`);
    }
    if (!isSwap) break;
  }
  console.log("number of iteration: ", n);
  return array;
}

var bubbleSortOptimized = function (array) {
  let n = 0;
  let isSwap = false;
  let swapCount = 0;
  let temp;
  let arrLength = array.length - 1;

  do {
    temp = null;
    isSwap = false;
    for (let j = 0; j < arrLength; j++) {
      n++;
      if (array[j] > array[j + 1]) {
        isSwap = true;
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
      if (isSwap) swapCount++;
      console.log(`${n}: ${array} => pointer: ${temp}`);
    }
    // decrease array length; last element is already the greatest
    arrLength--;
    console.log("array length: ", arrLength);
    // if (!isSwap) break;
  } while (arrLength > 0)
  console.log("number of iteration: ", n);
  return array;
}

// var test = [3, 2, 1, 0];
var test = [7, 6, 5, 4, 3, 2, 1];
// var test = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(bubbleSortOptimized(test));