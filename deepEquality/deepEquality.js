/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function (apple, orange) {
  return apple && orange &&
    typeof apple === 'object' && typeof orange === 'object'
    ? Object.keys(apple).length === Object.keys(orange).length && Object.keys(objtify(apple)).every(key => deepEquals(objtify(apple)[key], objtify(orange)[key]))
    : apple === orange;

  function objtify(parm) {
    if (Array.isArray(parm)) {
      return parm.reduce((obj, prop) => { obj[prop] = prop; return obj }, {});
    }
    return parm;
  }
};

let result = deepEquals({ a: 1, b: { c: 3 } }, { a: 1, b: { c: 3 } }); // true
console.log(result);

result = deepEquals({ a: 1, b: { c: 5 } }, { a: 1, b: { c: 6 } }); // false
console.log(result);

result = deepEquals(['a', 'b', 'c'], ['c', 'a', 'b']); // true
console.log(result);

result = deepEquals(['a', { 'b': ['d', 'e'] }, 'c'], ['c', 'a', { 'b': ['e', 'f'] }]); // false
console.log(result);

result = deepEquals(['a', { 'b': ['d', 'e'] }, 'c'], ['c', 'a', { 'b': ['e', 'd'] }]); // true
console.log(result);