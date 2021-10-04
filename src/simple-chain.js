import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(String(value));
    return this;
  },

  removeLink(position) {
    if (
      !isFinite(position) ||
      isNaN(position) ||
      position >= this.chain.length ||
      position <= 0
    ) {
      this.chain = [];
      throw Error(`You can't remove incorrect link!`);
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let string = this.chain.map((x) => (x === "" ? "" : `( ${x} )`)).join("~~");
    this.chain = [];
    return string;
  },
};
