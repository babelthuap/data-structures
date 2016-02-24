'use strict';

const LinkedList = require('../lists').LinkedList;

class Stack {
  constructor() {
    this.clear();
  }

  size() {
    return this._data.length;
  }

  clear() {
    this._data = new LinkedList();
    return this;
  }

  push(value) {
    return this._data.pushHead(value);
  }

  pop() {
    return this._data.popHead();
  }

  // top value is returned but not removed
  peek() {
    return this._data.get(0);
  }

  reverse() {
    this._data.reverse();
    return this;
  }
}

module.exports = Stack;
