'use strict';

let _data = new WeakMap();

class Heap {
  constructor() {
    _data.set(this, []);
  }

  size() {
    return _data.get(this).length;
  }
}

module.exports = Heap;
