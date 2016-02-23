'use strict';

const LinkedList = require('./linkedList');


class DoublyLinkedNode {
  constructor(value, previous, next) {
    this.value = value;
    this.previous = previous || null;
    this.next = next || null;
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

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  pushHead(value) {
    if (this.size === 0) {
      this.head = new DoublyLinkedNode(value);
      this.tail = this.head;
    } else {
      let newHead = this.head.insertBefore(value);
      this.head = newHead;
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
    if (this.size === 0) {
      return this.pushHead(value);
    } else {
      let newTail = this.tail.insertAfter(value);
      this.tail = newTail;
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

  remove(index) {
    let node = this._find(index);
    node.previous.next = node.next;
    node.next.previous = node.previous;
    --this.size;
    return node.value;
  }

  // 'reverse' mutates the list
  reverse() {
    if (this.size <= 1) {
      return this;
    }
    // swap pairs of node values rather than chaning node pointers
    // (this is slightly more efficient)
    function swap(node1, node2) {
      let temp = node1.value;
      node1.value = node2.value;
      node2.value = temp;
    }
    let leftNode = this.head;
    let rightNode = this.tail;
    for (let i = 0; i < this.size / 2; i++) {
      swap(leftNode, rightNode);
      leftNode = leftNode.next;
      rightNode = rightNode.previous;
    }
    return this;
  }

  // create a linked list from an array
  static fromArray(arr) {
    if (!Array.isArray(arr)) {
      return undefined;
    }
    let list = new DoublyLinkedList();
    arr.forEach(element => list.pushTail(element));
    return list;
  }
}


module.exports = DoublyLinkedList;
