'use strict';

let _parent = new WeakMap();
let _isLeftChild = new WeakMap();
let _value = new WeakMap();
let _left = new WeakMap();
let _right = new WeakMap();

class BinaryTree {
  constructor(value, left, right) {
    _parent.set(this, null);
    _isLeftChild.set(this, false);
    _value.set(this, value);
    _left.set(this, left || null);
    if (left) {
      left.setParent(this, 'left');
    }
    _right.set(this, right || null);
    if (right) {
      right.setParent(this, 'right');
    }
  }

  isLeftChild() {
    return _isLeftChild.get(this);
  }

  isRightChild() {
    return !_isLeftChild.get(this) && !!_parent.get(this);
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

  includes(value) {
    if (_value.get(this) === value) {
      return true;
    }
    let left = _left.get(this);
    if (left && left.includes(value)) {
      return true
    }
    let right = _right.get(this);
    if (right && right.includes(value)) {
      return true
    }
    return false;
  }

}

module.exports = BinaryTree;
