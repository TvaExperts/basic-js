const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!(Array.isArray(arr))) throw new Error ('\'arr\' parameter must be an instance of the Array!');
  const newArr = arr.map((item, i, array) => {
    switch (item) {
      case '--double-next':
        if (i === array.length - 1) {
          item = '';
        } else {
          item = array[i + 1];
        }
        break;
      case '--double-prev':
        if (i === 0) {
          item = '';
        } else {
          item = array[i - 1];
        }
        break;
      case '--discard-next':
        if (i === array.length - 1) {
          item = '';
        } else {
          array[i + 1] = '';
          item = '';
        }
        break;
      case '--discard-prev':
          item = '';
        break;
    }
    if (i != 0 && i < array.length - 2) {
      if (array[i + 1] === '--discard-prev') {
        item = '';
      }
    }
    return item;
  });

  return newArr.filter(item => (item));

}

module.exports = {
  transform
};
