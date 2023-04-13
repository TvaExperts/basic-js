const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let template = '';
  let adition = '';
  if (!options.hasOwnProperty('additionRepeatTimes')) {
    options.additionRepeatTimes = 1;
  }
  if (!options.hasOwnProperty('additionSeparator')) {
    options.additionSeparator = '|';
  }
  if (!options.hasOwnProperty('addition')) {
    options.addition = '';
  }

  if (!options.hasOwnProperty('separator')) {
    options.separator = '+';
  }
  if (!options.hasOwnProperty('repeatTimes')) {
    options.repeatTimes = 1;
  }

  const aditionTemplate = options.additionSeparator + options.addition;
  if (options.additionRepeatTimes) {
    adition = aditionTemplate.repeat(options.additionRepeatTimes).slice(options.additionSeparator.length);
  }
  template = options.separator + str + adition;
  return template.repeat(options.repeatTimes).slice(options.separator.length);
}

module.exports = {
  repeater
};
