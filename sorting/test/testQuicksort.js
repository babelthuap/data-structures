'use strict';

const expect = require('expect.js');

const quicksort = require('../quicksort');

describe('quicksort', () => {

  describe('on integer arrays', () => {
    it('should sort', () => {
      expect(quicksort([1, 2, 3])).to.eql([1, 2, 3]);
      expect(quicksort([1, 3, 2])).to.eql([1, 2, 3]);
      expect(quicksort([2, 1, 3])).to.eql([1, 2, 3]);
      expect(quicksort([2, 3, 1])).to.eql([1, 2, 3]);
      expect(quicksort([3, 1, 2])).to.eql([1, 2, 3]);
      expect(quicksort([3, 2, 1])).to.eql([1, 2, 3]);
      let arr = [59, 23, 30, 34, 19, -2, 30, 1, -12, 42];
      expect(quicksort(arr)).to.eql([-12, -2, 1, 19, 23, 30, 30, 34, 42, 59]);
    });
    it('should reverse sort', () => {
      expect(quicksort([1, 2, 3], (a, b) => b - a)).to.eql([3, 2, 1]);
      expect(quicksort([1, 3, 2], (a, b) => b - a)).to.eql([3, 2, 1]);
      expect(quicksort([2, 1, 3], (a, b) => b - a)).to.eql([3, 2, 1]);
      expect(quicksort([2, 3, 1], (a, b) => b - a)).to.eql([3, 2, 1]);
      expect(quicksort([3, 1, 2], (a, b) => b - a)).to.eql([3, 2, 1]);
      expect(quicksort([3, 2, 1], (a, b) => b - a)).to.eql([3, 2, 1]);
      let arr = [59, 23, 30, 34, 19, -2, 30, 1, -12, 42];
      expect(quicksort(arr, (a, b) => b - a)).to.eql([59, 42, 34, 30, 30, 23, 19, 1, -2, -12]);
    });
  });

});
