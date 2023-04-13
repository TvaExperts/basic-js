const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
constructor (isDirect)
{
  if (isDirect === false) {
    this.isStraight = false;
  } else {
    this.isStraight = true;
  }
}

//65 -A z-90

  encrypt(message, key) {

    if ((!message) ||(!key)) throw new Error('Incorrect arguments!');
    let mesArr = message.toUpperCase().split('').map(letter=>letter.charCodeAt());
    const keyArr = key.toUpperCase().split('').map(letter=>letter.charCodeAt() - 65);
    let delay = 0;
    mesArr = mesArr.map((letter, i) => {
      if ((letter < 65) || (letter > 90)) {
        delay++;
        return String.fromCharCode(letter);
      }
      let val = letter + keyArr[(i-delay) % keyArr.length];
      if (val > 90) val-=26;
      return String.fromCharCode(val);
    });
    return (this.isStraight) ? mesArr.join('') : mesArr.reverse().join('');
  }

  decrypt(message, key) {
    if ((!message) ||(!key)) throw new Error('Incorrect arguments!');
    let mesArr = message.toUpperCase().split('').map(letter=>letter.charCodeAt());
    const keyArr = key.toUpperCase().split('').map(letter=>letter.charCodeAt() - 65);
    let delay = 0;
    mesArr = mesArr.map((letter, i) => {
      if ((letter < 65) || (letter > 90)) {
        delay++;
        return String.fromCharCode(letter);
      }
      let val = letter - keyArr[(i-delay) % keyArr.length];
      if (val < 65) val += 26;
      return String.fromCharCode(val);
    });
    return (this.isStraight) ? mesArr.join('') : mesArr.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
