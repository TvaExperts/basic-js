const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return '';
  let resLine = '';
  let counter = 1;
  let curLetter = str[0];
  for (let i = 1; i < str.length; i++) {
    if (curLetter === str[i]) {
      counter++;
    } else {
      if (counter===1) {
        resLine = resLine + curLetter;
        curLetter=str[i];
      } else {
        resLine = resLine + counter + curLetter;
        counter = 1;
        curLetter = str[i];
      }
    }
  }
  if (counter === 1) {
    resLine = resLine + curLetter;
  } else {
    resLine = resLine + counter + curLetter;
  }
  return resLine;
}

module.exports = {
  encodeLine
};
