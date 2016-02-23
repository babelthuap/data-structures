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
      this.length = list.length;
    }
  }

  // return the node at the specified index
  _find(index) {
    if (this._outOfBounds(index)) {
      return undefined;
    }
    let finger;
    if (index < this.length / 2) {
      finger = this.head;
      for (let i = 0; i < index; ++i) {
        finger = finger.next;
      }
    } else {
      finger = this.tail;
      for (let i = this.length - 1; i > index; --i) {
        finger = finger.previous;
      }
    }
    return finger;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  pushHead(value) {
    if (this.length === 0) {
      this.head = new DoublyLinkedNode(value);
      this.tail = this.head;
    } else {
      let newHead = this.head.insertBefore(value);
      this.head = newHead;
    }
    return ++this.length;
  }

  popHead() {
    if (this.length === 0) {
      return undefined;
    }
    let oldHead = this.head;
    this.head = this.head.next;
    this.head.previous = null;
    --this.length;
    return oldHead.value;
  }

  pushTail(value) {
    if (this.length === 0) {
      return this.pushHead(value);
    } else {
      let newTail = this.tail.insertAfter(value);
      this.tail = newTail;
    }
    return ++this.length;
  }

  popTail() {
    if (this.length === 0) {
      return undefined;
    }
    let oldTail = this.tail;
    this.tail = this.tail.previous;
    this.tail.next = null;
    --this.length;
    return oldTail.value;
  }

  remove(index) {
    let node = this._find(index);
    if (!node) {
      return undefined;
    }
    if (node.previous) {
      node.previous.next = node.next;
    } else {
      this.head = node.next; // node was head
    }
    if (node.next) {
      node.next.previous = node.previous;
    } else {
      this.tail = node.previous; // node was tail
    }
    --this.length;
    return node.value;
  }

  // return a shallow copy of a portion of the list as a new list
  slice(start, end) {
    if (start === undefined) {
      start = 0;
      end = this.length;
    } else if (end === undefined || end > this.length) {
      end = this.length;
    }
    
    // allow negatives to count from the end of the list
    start = start < 0 ? Math.max(0, this.length + start) : start;
    end = end < 0 ? Math.max(0, this.length + end) : end;
    
    // build the new list
    let newList = new DoublyLinkedList();
    let newLength = end - start;
    if (newLength <= 0) {
      return newList;
    }
    // begin with either the start or the end, depending on which is faster to find
    if (start < this.size - end) {
      let finger = this._find(start);
      for (let i = 0; i < newLength; ++i) {
        newList.pushTail(finger.value);
        finger = finger.next;
      }
    } else {
      let finger = this._find(end - 1);
      for (let i = 0; i < newLength; ++i) {
        newList.pushHead(finger.value);
        finger = finger.previous;
      }
    }

    return newList;
  }

  // 'reverse' mutates the list
  reverse() {
    if (this.length <= 1) {
      return this;
    }
    // swap pairs of node values rather than changing node pointers
    // (this is slightly more efficient)
    function swap(node1, node2) {
      let temp = node1.value;
      node1.value = node2.value;
      node2.value = temp;
    }
    let leftNode = this.head;
    let rightNode = this.tail;
    for (let i = 0; i < Math.floor(this.length / 2); i++) {
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
