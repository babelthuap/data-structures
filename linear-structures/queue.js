'use strict';

let _data = new WeakMap();
let _size = new WeakMap();

class Queue {
  constructor() {
    _data.set(this, []);
    _size.set(this, 0);
  }

  size() {
    return _size.get(this);
  }
}

module.exports = Queue;
