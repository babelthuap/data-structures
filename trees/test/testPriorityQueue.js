'use strict';

const expect = require('expect.js');

const PriorityQueue = require('../priorityQueue');

describe('PriorityQueue', () => {

  describe('constructor', () => {
    it('should create an empty priority queue', () => {
      let priorityQueue = new PriorityQueue();
      expect(priorityQueue.size()).to.equal(0);
    });
  });

  describe('push and pop', () => {
    it('should act like a priority queue', () => {
      let priorityQueue = new PriorityQueue();
      priorityQueue.push('the', 9);
      priorityQueue.push('or', 3);
      priorityQueue.push('not', 4);
      priorityQueue.push('question', 10);
      priorityQueue.push('be', 6);
      priorityQueue.push('to', 5);
      priorityQueue.push('is', 8);
      priorityQueue.push('To', 1);
      priorityQueue.push('that', 7);
      priorityQueue.push('be', 2);
      expect(priorityQueue.pop()).to.equal('To');
      expect(priorityQueue.pop()).to.equal('be');
      expect(priorityQueue.pop()).to.equal('or');
      expect(priorityQueue.pop()).to.equal('not');
      expect(priorityQueue.pop()).to.equal('to');
      expect(priorityQueue.pop()).to.equal('be');
      expect(priorityQueue.pop()).to.equal('that');
      expect(priorityQueue.pop()).to.equal('is');
      expect(priorityQueue.pop()).to.equal('the');
      expect(priorityQueue.pop()).to.equal('question');
    });
  });

});
