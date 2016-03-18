'use strict';

const LinkedList = require('../lists').LinkedList;

class ListDict {
  constructor() {
    this._dict = new LinkedList();
  }

  _findNode(key) {
    let finger = this._dict.head;
    while (finger) {
      if (finger.value.key === key) {
        return finger;
      }
      finger = finger.next;
    }
    return undefined;
  }

  get(key) {
    let found = this._findNode(key);
    return found && found.value.value;
  }

  set(key, value) {
    let found = this._findNode(key);
    if (found) {
      found.value.value = value;
    } else {
      this._dict.pushHead({
        key: key,
        value: value,
      });
    }
    return value;
  }

  delete(key) {
    let predecessor = null;
    let finger = this._dict.head;
    while (finger) {
      if (finger.value.key === key) {
        // delete node
        if (predecessor) {
          predecessor.next = finger.next;
        } else {
          this._dict.popHead();
        }
        return true;
      }
      predecessor = finger;
      finger = finger.next;
    }
    return false;
  }

  keys() {
    return this._dict.toArray().map(pair => pair.key);
  }
}

module.exports = ListDict;
