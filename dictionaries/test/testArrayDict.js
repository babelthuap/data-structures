'use strict';

const expect = require('expect.js');

const ArrayDict = require('../../dictionaries').ArrayDict;

describe('ArrayDict', () => {

  describe('constructor', () => {
    it('should create an empty arrayDict', () => {
      let arrayDict = new ArrayDict();
      expect(arrayDict.keys()).to.eql([]);
    });
  });

  describe('get and set', () => {
    it('get and set key/value pairs', () => {
      let arrayDict = new ArrayDict();
      expect(arrayDict.set('a', 1)).to.equal(1);
      expect(arrayDict.set('b', 2)).to.equal(2);
      expect(arrayDict.set('c', 3)).to.equal(3);
      expect(arrayDict.get('a')).to.equal(1);
      expect(arrayDict.get('b')).to.equal(2);
      expect(arrayDict.get('c')).to.equal(3);
      expect(arrayDict.keys()).to.eql(['a', 'b', 'c']);
      expect(arrayDict.delete('b')).to.equal(true);
      expect(arrayDict.get('b')).to.be(undefined);
      expect(arrayDict.keys()).to.eql(['a', 'c']);
    });
  });

});
