const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain : [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if (typeof position != 'number') {
      this.chain = [];
      throw new Error ('You can\'t remove incorrect link!');
    }
    if ((position <= 0)||(position > this.chain.length)) {
      this.chain = [];
      throw new Error ('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let resLine='';
    this.chain.forEach(link => {
      resLine+=`( ${link} )~~`
    })
    this.chain = [];
    return resLine.slice(0, -2);
  }
};

module.exports = {
  chainMaker
};
