'use strict';

class Node {
  // the last node in a linked list has a 'null' successor
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }

  // create a linked list from an array
  static fromArray(arr) {
    if (arr.length === 0) {
      return null;
    }
    let head = new Node(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      let ithNode = new Node(arr[i]);
      current.next = ithNode;
      current = ithNode;
    }
    return head;
  }

  // generate a representation of the linked list on stdout
  print(index) {
    if (!index) {
      index = 0;
    }
    console.log(`${index}: ${this.value}`);
    if (this.next) {
      this.next.print(index + 1);
    }
  }

  // make my Node class iterable
  *[Symbol.iterator]() {
    let current = this;
    yield this.value;
    while (current.next) {
      yield current.next.value;
      current = current.next;
    }
  }
}


// TESTING
let list = Node.fromArray(['a', 'b', 'c']);
console.log(list);
list.print();
console.log(...list);
