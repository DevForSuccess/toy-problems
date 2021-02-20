/* 
* 
* Integer Reverse
* 
* Given a positive integer, return its digits reversed. 
* 
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY. 
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number) {
  let result = 0;
  let digit = 0;
  while (number) {
    digit = number % 10;
    number = parseInt(number / 10);
    result = result * 10 + digit;
  }
  return result;
}