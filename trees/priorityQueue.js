'use strict';

const Heap = require('./heap');

// smaller number == higher priority
class PriorityQueue {
  constructor() {
    this._data = new Heap((a, b) => a.priority - b.priority);
  }

  size() {
    return this._data.size();
  }

  push(value, priority) {
    this._data.push({
      value: value,
      priority: priority,
    });
  }

  pop() {
    let min = this._data.pop();
    return min && min.value;
  }

  peek() {
    let min = this._data.peek();
    return min && min.value;
  }
}

module.exports = PriorityQueue;
