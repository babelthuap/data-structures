'use strict';

const expect = require('expect.js');

const LinkedList = require('../linkedList');

describe('LinkedList', () => {

  describe('constructor', () => {
    it('should create an empty list when passed no arguments or an empty array', () => {
      let list = new LinkedList();
      expect(list.head).to.be(null);
      expect(list.size).to.equal(0);
      list = new LinkedList([]); // empty array
      expect(list.head).to.be(null);
      expect(list.size).to.equal(0);
    });
    it('should create a list when passed a nonempty array', () => {
      let list = new LinkedList([1]);
      expect(list.head.value).to.equal(1);
      expect(list.head.next).to.be(null);
      expect(list.size).to.equal(1);
      list = new LinkedList(['z', 42]);
      expect(list.head.value).to.equal('z');
      expect(list.head.next).to.be.ok();
      expect(list.head.next.value).to.equal(42);
      expect(list.head.next.next).to.be(null);
      expect(list.size).to.equal(2);
    });
  });

  describe('toArray', () => {
    it('should return the correct array representation of the linked list', () => {
      let arr = [23, 'hello', 'world', {a: 1}, 42, 'caboose'];
      let list = new LinkedList(arr);
      expect(list.toArray()).to.eql(arr);
    });
  });

  describe('_outOfBounds', () => {
    it('should return true iff the index passed is out of bounds', () => {
      let list = new LinkedList([0, 1, 2, 3]);
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
    let list = new LinkedList(['a', 'b', 'c']);
    it('should return the node at the specified index', () => {
      expect(list._find(0)).to.equal(list.head);
      expect(list._find(1).value).to.equal('b');
    });
    it('should return undefined for an out-of-bounds index', () => {
      expect(list._find(3)).to.be(undefined);
    });
  });

  describe('get', () => {
    let list = new LinkedList(['a', 'b', 'c']);
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
      let list = new LinkedList(['a', 'b', 'c']);
      list.set('changed', 2);
      expect(list.get(2)).to.equal('changed');
      expect(list.toArray()[2]).to.equal('changed');
      list.set('changed again', 2);
      expect(list.get(2)).to.equal('changed again');
      expect(list.toArray()[2]).to.equal('changed again');
    });
  });

});
