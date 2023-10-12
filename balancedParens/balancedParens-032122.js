/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function (input) {
  let openParents = ['(','[','{'];
  let closeParents = [')',']','}'];
  let stackParents = [];
  for (let i = 0; i < input.length; i++) {
    if (openParents.indexOf(input[i]) == -1 && closeParents.indexOf(input[i]) == -1) continue;
    if (stackParents.length == 0 && openParents.indexOf(input[i]) == -1) return false;

    let inputIdx = closeParents.indexOf(input[i]);
    if (inputIdx >=0 && inputIdx !== openParents.indexOf(stackParents.pop())) return false;
    if (inputIdx == -1) stackParents.push(input[i]); // only push opening parent
  }
  if (stackParents.length == 0) return true;
  return false;
};

// console.log(balancedParens('('));
// console.log(balancedParens('()'));
// console.log(balancedParens(')('));
// console.log(balancedParens('(())'));


// console.log(balancedParens('[](){}'));
// console.log(balancedParens('[({})]'));
// console.log(balancedParens('[(]{)}'));

// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'));
console.log(balancedParens(' var hubble = function() { telescopes.awesome();'));