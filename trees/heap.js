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

  _parent(i) {
    return Math.floor((i - 1) / 2);
  }

  _swap(i, j) {
    let temp = this._data[i];
    this._data[i] = this._data[j];
    this._data[j] = temp;
  }

  // recursively swap with parent until parent is less than or equal to the
  // current element
  _percolateUp(i) {
    if (i === 0) {
      return;
    }
    let parent = this._parent(i);
    if (this._data[parent] <= this._data[i]) {
      return;
    } else {
      this._swap(i, parent);
      this._percolateUp(parent);
    }
  }

  // recursively swap with smaller child until both children are greater than or
  // equal to the current element
  _percolateDown(i) {
    let left = this._leftChild(i);
    if (left >= this._data.length) {
      return;
    }
    let right = this._rightChild(i);
    if (this._data[left] > this._data[right]) {
      if (this._data[right] < this._data[i]) {
        // swap with right child
        this._swap(i, right);
        this._percolateDown(right);
      }
    } else {
      // right child must be larger or undefined
      if (this._data[left] < this._data[i]) {
        // swap with left child
        this._swap(i, left);
        this._percolateDown(left);
      }
    }
  }

  push(value) {
    this._data.push(value);
    this._percolateUp(this._data.length - 1);
  }

  pop(value) {
    let min = this._data[0];
    if (this._data.length > 1) {
      this._data[0] = this._data.pop();
      this._percolateDown(0);
    } else {
      this._data.pop();
    }
    return min;
  }

  peek() {
    return this._data[0];
  }

  static heapify(arr) {
    if (!Array.isArray(arr)) {
      // convert an iterable into an array
      arr = [...arr];
    }
    let heap = new Heap();
    arr.forEach(element => heap.push(element));
    return heap;
  }

  static heapSort(arr) {
    let heap = this.heapify(arr);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = heap.pop();
    }
    return arr;
  }

  print() {
    for (let lvl = 0; lvl < this._data.length; lvl = 2 * lvl + 1) {
      console.log( this._data.slice(lvl, 2 * lvl + 1).join(' ') );
    }
  }
}

module.exports = Heap;
