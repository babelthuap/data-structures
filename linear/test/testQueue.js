'use strict';

const expect = require('expect.js');

const Queue = require('../queue');

describe('Queue', () => {

  describe('constructor', () => {
    it('should create an empty queue', () => {
      let queue = new Queue();
      expect(queue.size()).to.equal(0);
      expect(queue.pop()).to.be(undefined);
    });
  });

  describe('clear', () => {
    it('should empty the queue', () => {
      let queue = new Queue();
      queue.push(1);
      queue.clear();
      expect(queue.size()).to.equal(0);
      expect(queue.pop()).to.be(undefined);
    });
  });

  describe('push & pop', () => {
    let queue = new Queue();
    it('should push new elements onto the queue', () => {
      queue.push('a');
      expect(queue.size()).to.equal(1);
      queue.push('b');
      expect(queue.size()).to.equal(2);
    });
    it('should retrieve those elements by popping', () => {
      expect(queue.pop()).to.equal('a');
      expect(queue.size()).to.equal(1);
      expect(queue.pop()).to.equal('b');
      expect(queue.size()).to.equal(0);
      expect(queue.pop()).to.be(undefined);
      expect(queue.size()).to.equal(0);
    });
  });

  describe('peek', () => {
    it('should return the next-up value without removing it', () => {
      let queue = new Queue();
      queue.push('a');
      queue.push('b');
      expect(queue.peek()).to.equal('a');
      expect(queue.size()).to.equal(2);
    });
  });

  describe('reverse', () => {
    it('should reverse the queue', () => {
      let queue = new Queue();
      queue.push('a');
      queue.push('b');
      queue.push('c');
      queue.reverse();
      expect(queue.size()).to.equal(3);
      expect(queue.pop()).to.equal('c');
      expect(queue.pop()).to.equal('b');
      expect(queue.pop()).to.equal('a');
    });
  });

});
