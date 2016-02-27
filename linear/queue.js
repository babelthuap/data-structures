'use strict';

const DoublyLinkedList = require('../lists').DoublyLinkedList
    , Stack            = require('./stack');

class Queue extends Stack {
  constructor() {
    super();
  }

  clear() {
    this._data = new DoublyLinkedList();
    return this;
  }

  push(value) {
    return this._data.pushTail(value);
  }
}

module.exports = Queue;
