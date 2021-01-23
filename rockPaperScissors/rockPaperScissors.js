/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (rounds = 2, games = 27) {
  let result = [];
  let roundResult = '';
  let options = ['R', 'S', 'P'];
  for (let game = 1; game <= games; game++) {
    roundResult = '';
    for (let round = 1; round <= rounds; round++) {
      roundResult += (options[Math.floor(Math.random() * options.length)]);
    }
    result.push(roundResult);
  }
  return result;
};

var games = 7;
var rounds = 3;
var result = rockPaperScissors(rounds);
console.log(result);

result = rockPaperScissors(rounds);
console.log(result);