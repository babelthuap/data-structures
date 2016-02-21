'use strict';

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }

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

  print(index) {
    if (!index) {
      index = 0;
    }
    console.log(`${index}: ${this.value}`);
    if (this.next) {
      this.next.print(index + 1);
    }
  }

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
