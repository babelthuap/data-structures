'use strict';

class Heap {
  constructor() {
    this._data = [];
  }

  size() {
    return this._data.length;
  }

  _leftChild(i) {
    return 2 * i + 1;
  }

  _rightChild(i) {
    return 2 * i + 2;
  }

  _swap(i, j) {
    let temp = this._data[i];
    this._data[i] = this._data[j];
    this._data[j] = temp;
  }

  _percolateUp() {

  }

  push(value) {

  }

  pop(value) {

  }

  static heapify(arr) {
    if (!Array.isArray(arr)) {
      // convert an iterable into an array
      arr = [...arr];
    }
    let heap = new Heap();
    return arr;           // NOT FINISHED!!!
  }
}

module.exports = Heap;
