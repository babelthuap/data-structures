'use strict';

let _data = new WeakMap();
let _size = new WeakMap();

class Stack {
  constructor() {
    _data.set(this, []);
    _size.set(this, 0);
  }

  size() {
    return _size.get(this);
  }

  clear() {
    _data.set(this, []);
    _size.set(this, 0);
    return this;
  }

  push(value) {
    let size = _size.get(this);
    _size.set(this, size + 1);
    return _data.get(this).push(value);
  }

  pop() {
    let size = _size.get(this);
    if (size > 0) {
      _size.set(this, size - 1);
    } 
    return _data.get(this).pop();
  }

  // top value is returned but not removed
  peek() {
    let data = _data.get(this);
    return data[data.length - 1];
  }

  reverse() {
    let data = _data.get(this);
    _data.set(this, data.reverse());
    return this;
  }
}

module.exports = Stack;
