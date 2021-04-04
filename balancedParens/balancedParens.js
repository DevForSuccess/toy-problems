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
    const brackets = { '[': 1, '{': 2, '(': 3, ']': -1, '}': -2, ')': -3 };
    let brackets_storage = [];

    let isOpen = false;
    let atLeastOnce = false;

    for (let i = 0; i < input.length; i++) {
        let ch = input[i];
        if (brackets[ch] !== undefined) {
            if (brackets_storage.length < 1 && brackets[ch] < 0) {
                atLeastOnce = false;
                break;
            }
            if (!isOpen && brackets[ch] > 0) {
                atLeastOnce = true;
                isOpen = true;
                brackets_storage.push(ch);
            } else {
                let last = brackets_storage.slice(-1);
                if (isOpen) {
                    if (brackets[ch] + brackets[last] === 0) {
                        brackets_storage.pop();
                        isOpen = brackets_storage.length > 0;
                    } else if (brackets[ch] < 0) {
                        break;
                    } else {
                        brackets_storage.push(ch);
                    }
                }
            }
        }
    }
    return atLeastOnce && !isOpen && brackets_storage.length === 0;
};