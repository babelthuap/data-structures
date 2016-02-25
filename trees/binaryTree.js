'use strict';

let _parent = new WeakMap();
let _isLeftChild = new WeakMap();
let _value = new WeakMap();
let _left = new WeakMap();
let _right = new WeakMap();

let EmptyTree = {
  isEmpty: true
};

class BinaryTree {
  constructor(value, left, right) {
    _parent.set(this, null);
    _isLeftChild.set(this, false);
    _value.set(this, value);
    _left.set(this, left || EmptyTree);
    _right.set(this, right || EmptyTree);
  }

  isLeftChild() {
    return _isLeftChild.get(this);
  }

  isRightChild() {
    return !_isLeftChild.get(this) && _parent.get(this);
  }

  parent() {
    return _parent.get(this);
  }

  setParent(parent, leftOrRight) {
    if (leftOrRight === 'left') {
      _isLeftChild.set(this, true);
    } else {
      _isLeftChild.set(this, false);
    }
    _parent.set(this, parent);
    return this;
  }

  value() {
    return _value.get(this);
  }

  setValue(value) {
    _value.set(this, value);
    return value;
  }

  left() {
    return _left.get(this);
  }

  setLeft(otherTree) {
    _left.set(this, otherTree);
  }

  right() {
    return _right.get(this);
  }

  setRight(otherTree) {
    _right.set(this, otherTree);
  }

}

module.exports = BinaryTree;
