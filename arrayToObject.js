let test = ['a', 'b', 'c'];
let test2 = ['b', 'c', 'a'];
// let obj = {};
let result = test.reduce((obj, prop) => { obj[prop] = prop; return obj }, init = {});
let result2 = Object.keys(test2);

console.log(result);
// console.log(result2);