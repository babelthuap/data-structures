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

  describe('push', () => {
    it('should add an element and maintain the heap structure', () => {
      let heap = new Heap();
      heap.push(3);
      heap.push(2);
      heap.push(1);
      expect(heap._data).to.eql([1, 3, 2]);
    });
  });

  describe('heapify', () => {
    it('should turn an array into a heap', () => {
      let heap = Heap.heapify([3, 7, 0, 0, 6, 5, 1]);
      expect(heap._data).to.eql([0, 0, 1, 7, 6, 5, 3]);
    });
  });

  describe('pop', () => {
    it('should pull out the min from the heap', () => {
      let heap = Heap.heapify([3, 7, 0, 0, 6, 5, 1]);
      expect(heap.pop()).to.equal(0);
      expect(heap.pop()).to.equal(0);
      expect(heap.pop()).to.equal(1);
      expect(heap.pop()).to.equal(3);
      expect(heap.pop()).to.equal(5);
      expect(heap.pop()).to.equal(6);
      expect(heap.pop()).to.equal(7);
      expect(heap.pop()).to.be(undefined);
    });
  });

  describe('heapSort', () => {
    it('should sort an array', () => {
      let arr = Heap.heapSort([2, 7, 4, 27, -3, -100, 2, 2, 5, 7, 8, 7, 1]);
      expect(arr).to.eql([-100, -3, 1, 2, 2, 2, 4, 5, 7, 7, 7, 8, 27]);
    });
  });

});
