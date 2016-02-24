'use strict';

const expect = require('expect.js');

const Stack = require('../stack');

describe('Stack', () => {

  describe('constructor', () => {
    it('should create an empty stack', () => {
      let stack = new Stack();
      expect(stack.size()).to.equal(0);
    });
  });

});
