'use strict';

const DoublyLinkedList = require('../lists').DoublyLinkedList;

let _data = new WeakMap();

class Queue {
  constructor() {
    _data.set(this, new DoublyLinkedList());
  }

  size() {
    return _data.get(this).length;
  }

  clear() {
    _data.set(this, new DoublyLinkedList());
    return this;
  }

  push(value) {
    return _data.get(this).pushTail(value);
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

module.exports = Queue;
