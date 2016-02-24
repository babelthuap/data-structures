'use strict';

const expect = require('expect.js');

const Queue = require('../queue');

describe('Queue', () => {

  describe('constructor', () => {
    it('should create an empty queue', () => {
      let queue = new Queue();
      expect(queue.size()).to.equal(0);
    });
  });

});
