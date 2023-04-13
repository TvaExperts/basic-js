const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {       // Шляпа полная, но проще момент не работал и я уже стал

  const addMineInfo = (a , b) => {
    if (a < 0) return;
    if (b < 0) return;
    if (a === matrix[0].length) return;
    if (b === matrix.length) return;
    resArr[a * matrix[0].length + b]++ ;
  }
  const resArr = Array(matrix.length * matrix[0].length).fill(0);
  for (let x = 0; x < matrix[0].length; x++) {
    for (let y = 0; y < matrix.length; y++) {
      if (matrix[y][x]) {
        addMineInfo(x, y - 1);
        addMineInfo(x + 1, y - 1);
        addMineInfo(x + 1, y);
        addMineInfo(x + 1, y + 1);
        addMineInfo(x, y + 1);
        addMineInfo(x - 1, y + 1);
        addMineInfo(x - 1, y);
        addMineInfo(x - 1, y - 1);
      }
    }
  }
  const newArr= [];
  for (let i = 0; i < matrix.length; i++)
    newArr.push(resArr.slice(i * matrix[0].length, (i + 1) * matrix[0].length));
  return newArr;
}

module.exports = {
  minesweeper
};
