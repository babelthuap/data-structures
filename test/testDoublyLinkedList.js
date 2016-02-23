'use strict';

const expect = require('expect.js');

const DoublyLinkedList = require('../doublyLinkedList');

describe('DoublyLinkedList', () => {
  
  describe('constructor', () => {
    it('should create an empty list when passed no arguments or an empty array', () => {
      let list = new DoublyLinkedList();
      expect(list.head).to.be(null);
      expect(list.tail).to.be(null);
      expect(list.size).to.equal(0);
      list = new DoublyLinkedList([]); // empty array
      expect(list.head).to.be(null);
      expect(list.tail).to.be(null);
      expect(list.size).to.equal(0);
    });
    it('should create a list when passed a nonempty array', () => {
      let list = new DoublyLinkedList([1]);
      expect(list.head.value).to.equal(1);
      expect(list.head.previous).to.be(null);
      expect(list.head.next).to.be(null);
      expect(list.tail.value).to.equal(1);
      expect(list.tail.previous).to.be(null);
      expect(list.tail.next).to.be(null);
      expect(list.size).to.equal(1);
      list = new DoublyLinkedList(['z', 42]);
      // correct head
      expect(list.head.value).to.equal('z');
      expect(list.head.next).to.be.ok();
      expect(list.head.previous).to.be(null);
      expect(list.head.next.value).to.equal(42);
      expect(list.head.next.next).to.be(null);
      // correct tail
      expect(list.tail.value).to.equal(42);
      expect(list.tail.previous).to.be.ok();
      expect(list.tail.next).to.be(null);
      expect(list.tail.previous.value).to.equal('z');
      expect(list.tail.previous.previous).to.be(null);
      // correct size
      expect(list.size).to.equal(2);
    });
  });

});
