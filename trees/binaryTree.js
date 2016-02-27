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
    return !this.isLeftChild() && !!_parent.get(this);
  }

  parent() {
    return _parent.get(this);
  }

  setParent(parent, leftOrRight) {
    if (leftOrRight === 'left') {
      _isLeftChild.set(this, true);
      parent.setLeft(this);
    } else if (leftOrRight === 'right') {
      _isLeftChild.set(this, false);
      parent.setRight(this);
    } else if (leftOrRight === undefined) {
      // this is the setParent as used in setLeft and setRight
    } else {
      throw new Error(`Please set child as either 'left' or 'right', not '${leftOrRight}'`);
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
    if (_left.get(this)) {
      _left.get(this).setParent(null);
    }
    _left.set(this, otherTree);
    otherTree.setParent(this);
    return otherTree;
  }

  right() {
    return _right.get(this);
  }

  setRight(otherTree) {
    if (_right.get(this)) {
      _right.get(this).setParent(null);
    }
    _right.set(this, otherTree);
    otherTree.setParent(this);
    return otherTree;
  }

  includes(value) {
    if (_value.get(this) === value) {
      return true;
    }
    let left = this.left();
    if (left && left.includes(value)) {
      return true
    }
    let right = this.right();
    if (right && right.includes(value)) {
      return true
    }
    return false;
  }
}

module.exports = BinaryTree;
