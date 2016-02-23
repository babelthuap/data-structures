'use strict';

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }

  insertAfter(value) {
    let newNode = new Node(value, this.next);
    this.next = newNode;
    return newNode;
  }
}


class LinkedList {
  constructor(arr) {
    // create an empty linked list
    this.head = null;
    this.size = 0;

    if (Array.isArray(arr)) {
      let list = LinkedList.fromArray(arr);
      this.head = list.head;
      this.size = list.size;
    }
  }

  equals(otherList) {
    if (this.size !== otherList.size) {
      return false;
    }
    let thisFinger = this.head;
    let otherFinger = otherList.head;
    while (thisFinger) {
      if (thisFinger.value !== otherFinger.value) {
        return false;
      }
      thisFinger = thisFinger.next;
      otherFinger = otherFinger.next;
    }
    return true;
  }

  _outOfBounds(index) {
    return index < 0 || index >= this.size || index === undefined;
  }

  // return the node at the specified index
  _find(index) {
    if (this._outOfBounds(index)) {
      return undefined;
    }
    let finger = this.head;
    for (let i = 0; i < index; ++i) {
      finger = finger.next;
    }
    return finger;
  }

  // return the *value* of the node at the specified index
  get(index) {
    let foundNode = this._find(index);
    return foundNode ? foundNode.value : undefined;
  }

  set(value, index) {
    let foundNode = this._find(index);
    return foundNode ? (foundNode.value = value) : undefined;
  }

  includes(value) {
    if (this.size === 0) {
      return false;
    }
    let finger = this.head;
    while (finger && finger.value !== value) {
      finger = finger.next;
    }
    return !!finger;
  }

  clear() {
    this.head = null;
    this.size = 0;
  }

  pushHead(value) {
    this.head = new Node(value, this.head);
    return ++this.size;
  }

  popHead() {
    if (this.size === 0) {
      return undefined;
    }
    let oldHead = this.head;
    this.head = this.head.next;
    --this.size;
    return oldHead.value;
  }

  pushTail(value) {
    let newTail = new Node(value);
    if (this.size === 0) {
      this.head = newTail;
    } else {
      let tail = this._find(this.size - 1);
      tail.next = newTail;
    }
    return ++this.size;
  }

  popTail() {
    if (this.size === 0) {
      return undefined;
    }
    let penultimate = this._find(this.size - 2);
    let tail;
    if (penultimate) {
      // reset pointer to last element
      tail = penultimate.next;
      penultimate.next = null;
    } else {
      // there's exactly one element
      tail = this.head;
      this.head = null;
    }
    --this.size;
    return tail.value;
  }

  // insert a value so that it *becomes* the node at the specified index,
  // pushing others out of the way
  insert(value, index) {
    if (index === this.size) {
      return this.pushTail(value);
    }
    if (index === 0) {
      return this.pushHead(value);
    }
    if (this._outOfBounds(index)) {
      return undefined;
    }
    this._find(index - 1).insertAfter(value);
    return ++this.size;
  }

  remove(index) {
    if (index === 0) {
      return this.popHead();
    }
    if (this._outOfBounds(index)) {
      return undefined;
    }
    let predecessor = this._find(index - 1);
    let nodeToRemove = predecessor.next;
    predecessor.next = nodeToRemove.next;
    --this.size;
    return nodeToRemove.value;
  }

  // 'reverse' mutates the list
  reverse() {
    if (this.size <= 1) {
      return this;
    }
    let previous = null;
    let finger = this.head;
    while (finger) {
      let next = finger.next;
      finger.next = previous; // switch pointers
      previous = finger;
      finger = next;
    }
    this.head = previous;
    return this;
  }

  // create a linked list from an array
  static fromArray(arr) {
    if (!Array.isArray(arr)) {
      return undefined;
    }
    let list = new LinkedList();
    // build list backwards because that's more efficient
    for (let i = arr.length - 1; i >= 0; --i) {
      list.pushHead(arr[i]);
    }
    return list;
  }

  toArray() {
    return [...this];
  }

  // make the LinkedList class iterable
  *[Symbol.iterator]() {
    let finger = this.head;
    while (finger) {
      yield finger.value;
      finger = finger.next;
    }
  }
}


module.exports = LinkedList;
