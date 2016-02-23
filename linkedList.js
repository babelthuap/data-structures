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
    this.length = 0;

    if (Array.isArray(arr)) {
      let list = LinkedList.fromArray(arr);
      this.head = list.head;
      this.length = list.length;
    }
  }

  equals(otherList) {
    if (this.length !== otherList.length) {
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
    return index < 0 || index >= this.length || index === undefined;
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
    if (this.length === 0) {
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
    this.length = 0;
  }

  pushHead(value) {
    this.head = new Node(value, this.head);
    return ++this.length;
  }

  popHead() {
    if (this.length === 0) {
      return undefined;
    }
    let oldHead = this.head;
    this.head = this.head.next;
    --this.length;
    return oldHead.value;
  }

  pushTail(value) {
    let newTail = new Node(value);
    if (this.length === 0) {
      this.head = newTail;
    } else {
      let tail = this._find(this.length - 1);
      tail.next = newTail;
    }
    return ++this.length;
  }

  popTail() {
    if (this.length === 0) {
      return undefined;
    }
    let penultimate = this._find(this.length - 2);
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
    --this.length;
    return tail.value;
  }

  // insert a value so that it *becomes* the node at the specified index,
  // pushing others out of the way
  insert(value, index) {
    if (index === this.length) {
      return this.pushTail(value);
    }
    if (index === 0) {
      return this.pushHead(value);
    }
    if (this._outOfBounds(index)) {
      return undefined;
    }
    this._find(index - 1).insertAfter(value);
    return ++this.length;
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
    --this.length;
    return nodeToRemove.value;
  }

  // return a shallow copy of a portion of the list as a new list
  slice(start, end) {
    // return new LinkedList([...this].slice(start, end)); // the cheating (and inefficient) way!

    if (start === undefined) {
      start = 0;
      end = this.length;
    } else if (end === undefined || end > this.length) {
      end = this.length;
    }
    
    // allow negatives to count from the end of the list
    start = start < 0 ? Math.max(0, this.length + start) : start;
    end = end < 0 ? Math.max(0, this.length + end) : end;
    
    // build the new list manually rather than with pushTail because that's more efficeint
    let newList = new LinkedList();
    let newLength = end - start;
    if (newLength > 0) {
      let finger = this._find(start);
      let prevNewNode = new Node(finger.value);
      newList.head = prevNewNode;
      for (let i = 0; i < newLength - 1; ++i) {
        finger = finger.next;
        let newNode = new Node(finger.value);
        prevNewNode.next = newNode;
        prevNewNode = newNode;
      }
      newList.length = newLength;
    }

    return newList;
  }

  // 'reverse' mutates the list
  reverse() {
    if (this.length <= 1) {
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
