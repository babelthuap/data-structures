'use strict';

const expect = require('expect.js');

const DoublyLinkedList = require('../lists/DoublyLinkedList');

describe('DoublyLinkedList', () => {

  describe('constructor', () => {
    it('should create an empty list when passed no arguments or an empty array', () => {
      let list = new DoublyLinkedList();
      expect(list.head).to.be(null);
      expect(list.tail).to.be(null);
      expect(list.length).to.equal(0);
      list = new DoublyLinkedList([]); // empty array
      expect(list.head).to.be(null);
      expect(list.tail).to.be(null);
      expect(list.length).to.equal(0);
    });
    it('should create a list when passed a nonempty array', () => {
      let list = new DoublyLinkedList([1]);
      expect(list.head.value).to.equal(1);
      expect(list.head.previous).to.be(null);
      expect(list.head.next).to.be(null);
      expect(list.tail.value).to.equal(1);
      expect(list.tail.previous).to.be(null);
      expect(list.tail.next).to.be(null);
      expect(list.length).to.equal(1);
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
      // correct length
      expect(list.length).to.equal(2);
    });
  });

  describe('equals', () => {
    it('should return true iff two lists are strictly equal', () => {
      let list0 = new DoublyLinkedList([0, 1, 2, 3]);
      let list1 = new DoublyLinkedList([0, 1, 2, 3]);
      let list2 = new DoublyLinkedList([0, 1, 2]);
      let list3 = new DoublyLinkedList([0, 1, 2, 3, 4]);
      let list4 = new DoublyLinkedList([0, 1, 7, 7]);
      expect(list0.equals(list1)).to.be(true);
      expect(list0.equals(list2)).to.be(false);
      expect(list0.equals(list3)).to.be(false);
      expect(list0.equals(list4)).to.be(false);
    });
  });

  describe('toArray', () => {
    it('should return the correct array representation of the list - OTHER TESTS RELY ON THIS METHOD', () => {
      let arr = [23, 'hello', 'world', {a: 1}, 42, 'caboose'];
      let list = new DoublyLinkedList(arr);
      expect(list.toArray()).to.eql(arr);
    });
  });

  describe('_outOfBounds', () => {
    it('should return true iff the index passed is out of bounds', () => {
      let list = new DoublyLinkedList([0, 1, 2, 3]);
      expect(list._outOfBounds()).to.be(true);
      expect(list._outOfBounds(-10)).to.be(true);
      expect(list._outOfBounds(-1)).to.be(true);
      expect(list._outOfBounds(0)).to.be(false);
      expect(list._outOfBounds(1)).to.be(false);
      expect(list._outOfBounds(2)).to.be(false);
      expect(list._outOfBounds(3)).to.be(false);
      expect(list._outOfBounds(4)).to.be(true);
      expect(list._outOfBounds(10)).to.be(true);
    });
  });

  describe('_find', () => {
    let list = new DoublyLinkedList(['a', 'b', 'c']);
    it('should return the node at the specified index', () => {
      expect(list._find(0)).to.equal(list.head);
      expect(list._find(1).value).to.equal('b');
    });
    it('should return undefined for an out-of-bounds index', () => {
      expect(list._find(3)).to.be(undefined);
    });
  });

  describe('get', () => {
    let list = new DoublyLinkedList(['a', 'b', 'c']);
    it('should return the value of the node at the specified index', () => {
      expect(list.get(0)).to.equal('a');
      expect(list.get(1)).to.equal('b');
      expect(list.get(2)).to.equal('c');
    });
    it('should return undefined for an out-of-bounds index', () => {
      expect(list.get(3)).to.be(undefined);
    });
  });

  describe('set', () => {
    it('should set the value of the node at the specified index', () => {
      let list = new DoublyLinkedList(['a', 'b', 'c']);
      list.set('changed', 2);
      expect(list.get(2)).to.equal('changed');
      expect(list.toArray()[2]).to.equal('changed');
      list.set('changed again', 2);
      expect(list.get(2)).to.equal('changed again');
      expect(list.toArray()[2]).to.equal('changed again');
    });
  });

  describe('includes', () => {
    it('should return false if the list is empty', () => {
      let list = new DoublyLinkedList();
      expect(list.includes('anything')).to.be(false);
    });
    it('should return true iff the list has a node with the specified value', () => {
      let list = new DoublyLinkedList(['a', 'b', 'c', 'd', 'e']);
      expect(list.includes('b')).to.be(true);
      expect(list.includes('e')).to.be(true);
      expect(list.includes(null)).to.be(false);
      expect(list.includes('rando')).to.be(false);
    });
  });

  describe('clear', () => {
    it('should reset the list to be empty', () => {
      let list = new DoublyLinkedList(['a', 'b', 'c']);
      expect(list.head).to.be.ok();
      expect(list.tail).to.be.ok();
      expect(list.length).to.equal(3);
      list.clear();
      expect(list.head).to.be(null);
      expect(list.tail).to.be(null);
      expect(list.length).to.equal(0);
    });
  });

  describe('pushHead', () => {
    it('should push a value onto the head of the list', () => {
      let list = new DoublyLinkedList();
      list.pushHead('head 1');
      expect(list.toArray()).to.eql(['head 1']);
      list.pushHead('head 2');
      expect(list.toArray()).to.eql(['head 2', 'head 1']);
    });
  });

  describe('popHead', () => {
    it('should remove the head and return its value', () => {
      let list = new DoublyLinkedList(['a', 'b', 'c']);
      expect(list.popHead()).to.equal('a');
      expect(list.toArray()).to.eql(['b', 'c']);
      expect(list.popHead()).to.equal('b');
      expect(list.toArray()).to.eql(['c']);
    });
  });

  describe('pushTail', () => {
    it('should push a value onto the tail of the list', () => {
      let list = new DoublyLinkedList();
      list.pushTail('tail 1');
      expect(list.toArray()).to.eql(['tail 1']);
      list.pushTail('tail 2');
      expect(list.toArray()).to.eql(['tail 1', 'tail 2']);
    });
  });

  describe('popTail', () => {
    it('should remove the tail and return its value', () => {
      let list = new DoublyLinkedList(['a', 'b', 'c']);
      expect(list.popTail()).to.equal('c');
      expect(list.toArray()).to.eql(['a', 'b']);
      expect(list.popTail()).to.equal('b');
      expect(list.toArray()).to.eql(['a']);
    });
  });

  describe('insert', () => {
    it('should insert a value so that it becomes the node at the specified index', () => {
      let list = new DoublyLinkedList();
      list.insert('head', 0);
      list.insert('tail', list.length);
      list.insert('middleA', 1);
      list.insert('middleB', 1);
      expect(list.toArray()).to.eql(['head', 'middleB', 'middleA', 'tail']);
    });
  });

  describe('remove', () => {
    it('should remove a value at the specified index', () => {
      let list = new DoublyLinkedList([0, 1, 2, 3, 4]);
      list.remove(10);
      expect(list.toArray()).to.eql([0, 1, 2, 3, 4]);
      list.remove(0);
      expect(list.toArray()).to.eql([1, 2, 3, 4]);
      list.remove(2);
      expect(list.toArray()).to.eql([1, 2, 4]);
    });
  });

  describe('slice', () => {
    let arr = [0, 1, 2, 3, 4];
    let list = new DoublyLinkedList(arr);
    it('should work when given 0 or 1 arguments', () => {
      expect(list.slice().toArray()).to.eql(arr.slice());
      expect(list.slice(2).toArray()).to.eql(arr.slice(2));
    });
    it('should work the same as Array.prototype.slice', () => {
      for (let start = -6; start <= 5; ++start) {
        for (let end = -5; end <= 6; ++end) {
          expect(list.slice(start, end).toArray()).to.eql(arr.slice(start, end));
        }
      }
    });
  });

  describe('sort', () => {
    it('should sort strings', () => {
      let list = new DoublyLinkedList(['hello', 'my', 'gifted', 'azure', 'pudding', '!']);
      list.sort();
      expect(list.toArray()).to.eql(["!", "azure", "gifted", "hello", "my", "pudding"]);
    });
    it('should sort numbers', () => {
      let list = new DoublyLinkedList([42, -23, 0, 1, 7, 102, 1, 9, -5]);
      list.sort();
      expect(list.toArray()).to.eql([-23, -5, 0, 1, 1, 7, 9, 42, 102]);
    });
    it('should sort objects given a comparator function', () => {
      let list = new DoublyLinkedList([{n: 0}, {n: -10}, {n: 102}, {n: 20}, {n: 2}]);
      list.sort((a, b) => a.n > b.n);
      expect(list.toArray()).to.eql([{n: -10}, {n: 0}, {n: 2}, {n: 20}, {n: 102}]);
    });
  });

  describe('reverse', () => {
    it('should do nothing to an empty list', () => {
      let list = new DoublyLinkedList();
      list.reverse();
      expect(list.head).to.be(null);
      expect(list.tail).to.be(null);
      expect(list.length).to.equal(0);
    });
    it('should reverse a list with a nonzero, even number of elements', () => {
      let list = new DoublyLinkedList([0, 1, 2, 3]);
      list.reverse();
      expect(list.toArray()).to.eql([3, 2, 1, 0]);
    });
    it('should reverse a list with an odd number of elements', () => {
      let list = new DoublyLinkedList([1]); // case n = 1
      list.reverse();
      expect(list.toArray()).to.eql([1]);
      list = new DoublyLinkedList([0, 1, 2, 3, 4]); // case n > 1
      list.reverse();
      expect(list.toArray()).to.eql([4, 3, 2, 1, 0]);
    });
  });

  describe('fromArray', () => {
    it('should create a list from an array', () => {
      let list = DoublyLinkedList.fromArray([0, 1, 2, 3, 4]);
      expect(list.toArray()).to.eql([0, 1, 2, 3, 4]);
    });
    it('should return undefined when not given an array', () => {
      expect(DoublyLinkedList.fromArray('not an array')).to.be(undefined);
    });
  });

});
