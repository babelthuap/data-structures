'use strict';

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }

  // insert a node after the current node
  insert(value) {
    let newNode = new Node(value, this.next);
    this.next = newNode;
  }
}


class LinkedList {
  // create an empty linked list
  constructor(arr) {
    this.head = null;
    this.size = 0;

    if (Array.isArray(arr)) {
      let list = LinkedList.fromArray(arr);
      this.head = list.head;
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
    if (this.head) {
      let tail = this._find(this.size - 1);
      tail.next = newTail;
    } else {
      this.head = newTail;
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

  // insert a value so that it *becomes* the node at the specified index
  //   - use 0-based indexing
  //   - indicies out of range are clamped
  //   - if no index is supplied, simply does a pushHead
  insert(value, index) {
    if (index <= 0 || !index) {
      return this.pushHead(value);
    }
    if (index >= this.size) {
      return this.pushTail(value);
    }
    this._find(index - 1).insert(value);
    return ++this.size;
  }

  // 'remove' does *not* clamp indicies
  remove(index) {
    if (this._outOfBounds(index)) {
      return undefined;
    }
    if (index === 0) {
      return this.popHead();
    }
    if (index === this.size - 1) {
      return this.popTail();
    }
    let predecessor = this._find(index - 1);
    let nodeToRemove = predecessor.next;
    predecessor.next = nodeToRemove.next;
    --this.size;
    return nodeToRemove.value;
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

  // make the LinkedList class iterable
  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}


module.exports = LinkedList;


// TESTING
// let list = LinkedList.fromArray([0, 1, 2, 3, 4]);
let list = new LinkedList([0, 1, 2, 3, 4]);
console.log(...list);
console.log('size:', list.size);
console.log("\ninsert 'a' at index 2...");
list.insert('a', 2);
console.log(...list);
console.log('size:', list.size);

console.log('\nget -1:', list.get(-1));
console.log('get 0:', list.get(0));
console.log('get 2:', list.get(2));
console.log('get 5:', list.get(5));
console.log('get 6:', list.get(6));

console.log('\nremove index 4...:');
list.remove(4);
console.log(...list);
console.log('size:', list.size);

console.log('\npopping from tail...');
while (list.size > 0) {
  console.log(list.popTail());
}
console.log(list.popTail());
console.log(...list);
console.log('size:', list.size);
