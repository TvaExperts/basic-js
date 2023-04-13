const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let line = n.toString()
  const arrNums = [];
  for (let i=0; i < line.length; i++) {
    arrNums.push(line.slice(0, i) + line.slice(i + 1));
  }
  return Math.max(...arrNums);
}

module.exports = {
  deleteDigit
};
