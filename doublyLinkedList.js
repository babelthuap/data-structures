'use strict';

const Node       = require('./linkedList').Node
    , LinkedList = require('./linkedList').LinkedList;


class DoublyLinkedNode extends Node {
  constructor(value, previous, next) {
    super(value, next);
    this.previous = previous || null;
  }

  insertAfter(value) {
    let newNode = new DoublyLinkedNode(value, this, this.next);
    if (this.next) {
      this.next.previous = newNode;
    }
    this.next = newNode;
    return newNode;
  }

  insertBefore(value) {
    let newNode = new DoublyLinkedNode(value, this.previous, this);
    if (this.previous) {
      this.previous.next = newNode;
    }
    this.previous = newNode;
    return newNode;
  }
}


class DoublyLinkedList extends LinkedList {
  constructor(arr) {
    super();
    this.tail = null;

    if (Array.isArray(arr)) {
      let list = DoublyLinkedList.fromArray(arr);
      this.head = list.head;
      this.tail = list.tail;
      this.size = list.size;
    }
  }

  _outOfBounds(index) {
    return index < 0 || index >= this.size || index === undefined;
  }

  // return the node at the specified index
  _find(index) {
    if (this._outOfBounds(index)) {
      return undefined;
    }
    if (index < this.size / 2) {
      let finger = this.head;
      for (let i = 0; i < index; ++i) {
        finger = finger.next;
      }
      return finger;
    } else {
      let finger = this.tail;
      for (let i = this.size - 1; i > index; --i) {
        finger = finger.previous;
      }
      return finger;
    }
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
    this.tail = null;
    this.size = 0;
  }

  pushHead(value) {
    let oldHead = this.head;
    let newHead = new DoublyLinkedNode(value, null, this.head);
    this.head = newHead;
    if (this.size === 0) {
      this.tail = newHead;
    } else {
      oldHead.previous = this.head;
    }
    return ++this.size;
  }

  popHead() {
    if (this.size === 0) {
      return undefined;
    }
    let oldHead = this.head;
    this.head = this.head.next;
    this.head.previous = null;
    --this.size;
    return oldHead.value;
  }

  pushTail(value) {
    let oldTail = this.tail;
    let newTail = new DoublyLinkedNode(value, this.tail, null);
    this.tail = newTail;
    if (this.size === 0) {
      this.head = newTail;
    } else {
      oldTail.next = newTail;
    }
    return ++this.size;
  }

  popTail() {
    if (this.size === 0) {
      return undefined;
    }
    let oldTail = this.tail;
    this.tail = this.tail.previous;
    this.tail.next = null;
    --this.size;
    return oldTail.value;
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


  // -------------- //
  // NOT COMPLETED: //

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
    let list = new DoublyLinkedList();
    // build list backwards
    for (let i = arr.length - 1; i >= 0; --i) {
      list.pushHead(arr[i]);
    }
    return list;
  }

  toArray() {
    return [...this];
  }

  // make the DoublyLinkedList class iterable
  *[Symbol.iterator]() {
    let finger = this.head;
    while (finger) {
      yield finger.value;
      finger = finger.next;
    }
  }
}


module.exports = {
  DoublyLinkedNode: DoublyLinkedNode,
  DoublyLinkedList: DoublyLinkedList,
};
