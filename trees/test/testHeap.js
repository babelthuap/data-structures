'use strict';

const expect = require('expect.js');

const Heap = require('../heap');

describe('Heap', () => {

  describe('constructor', () => {
    it('should create an empty heap', () => {
      let heap = new Heap();
      expect(heap.size()).to.equal(0);
    });
  });

});
