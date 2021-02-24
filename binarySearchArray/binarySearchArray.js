/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        let mid = ((start + end) / 2) | 0;
        if (array[mid] === target) {
            return mid;
        } 
        if (array[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return null;
};

var index = binarySearch([1, 2, 3, 4, 5], 4);
console.log(index); // 3
var index = binarySearch([1, 2, 3, 4, 5], 1);
console.log(index); // 0
var index = binarySearch([1, 2, 3, 4, 5], 8);
console.log(index); // null
var index = binarySearch([1, 2, 3, 4, 5], 0);
console.log(index); // null
