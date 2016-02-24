'use strict';

const LinkedList = require('../lists').LinkedList;

let _data = new WeakMap();

class Stack {
  constructor() {
    _data.set(this, new LinkedList());
  }

  size() {
    return _data.get(this).length;
  }

  clear() {
    _data.set(this, new LinkedList());
    return this;
  }

  push(value) {
    return _data.get(this).pushHead(value);
  }

  pop() {
    return _data.get(this).popHead();
  }

  // top value is returned but not removed
  peek() {
    return _data.get(this).get(0);
  }

  reverse() {
    _data.get(this).reverse();
    return this;
  }
}

module.exports = Stack;
