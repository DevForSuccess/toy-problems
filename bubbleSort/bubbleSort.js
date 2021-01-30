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
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
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
  let testArray = array.slice();
  var isAnySwap = false;

  for (let i = 0; i < testArray.length; i++) {
    for (let j = 0; j < testArray.length - 1; j++) {
      if (testArray[j] > testArray[j + 1]) {
        let temp = testArray[j];
        testArray[j] = testArray[j + 1];
        testArray[j + 1] = temp;
        isAnySwap = true;
      }
    }
    if (!isAnySwap) {
      // done with sorting at first iteration, in this case, the time complexity is O(n)
      break;
    }
  }
  return testArray;
};

var test = [2, 1, 3];
console.log(bubbleSort(test));