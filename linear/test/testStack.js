'use strict';

const expect = require('expect.js');

const Stack = require('../stack');

describe('Stack', () => {

  describe('constructor', () => {
    it('should create an empty stack', () => {
      let stack = new Stack();
      expect(stack.size()).to.equal(0);
      expect(stack.pop()).to.be(undefined);
    });
  });

  describe('clear', () => {
    it('should empty the stack', () => {
      let stack = new Stack();
      stack.push(1);
      stack.clear();
      expect(stack.size()).to.equal(0);
      expect(stack.pop()).to.be(undefined);
    });
  });

  describe('push & pop', () => {
    let stack = new Stack();
    it('should push new elements onto the stack', () => {
      stack.push('a');
      expect(stack.size()).to.equal(1);
      stack.push('b');
      expect(stack.size()).to.equal(2);
    });
    it('should retrieve those elements by popping', () => {
      expect(stack.pop()).to.equal('b');
      expect(stack.size()).to.equal(1);
      expect(stack.pop()).to.equal('a');
      expect(stack.size()).to.equal(0);
      expect(stack.pop()).to.be(undefined);
      expect(stack.size()).to.equal(0);
    });
  });

  describe('peek', () => {
    it('should return the top value without removing it', () => {
      let stack = new Stack();
      stack.push('a');
      stack.push('b');
      expect(stack.peek()).to.equal('b');
      expect(stack.size()).to.equal(2);
    });
  });

  describe('reverse', () => {
    it('should reverse the stack', () => {
      let stack = new Stack();
      stack.push('a');
      stack.push('b');
      stack.push('c');
      stack.reverse();
      expect(stack.size()).to.equal(3);
      expect(stack.pop()).to.equal('a');
      expect(stack.pop()).to.equal('b');
      expect(stack.pop()).to.equal('c');
    });
  });

});
