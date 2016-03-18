'use strict';

const expect = require('expect.js');

const ListDict = require('../../dictionaries').ListDict;

describe('ListDict', () => {

  describe('constructor', () => {
    it('should create an empty listDict', () => {
      let listDict = new ListDict();
      expect(listDict.keys()).to.eql([]);
    });
  });

  describe('get and set', () => {
    it('get and set key/value pairs', () => {
      let listDict = new ListDict();
      expect(listDict.set('a', 1)).to.equal(1);
      expect(listDict.set('b', 2)).to.equal(2);
      expect(listDict.set('c', 3)).to.equal(3);
      expect(listDict.get('a')).to.equal(1);
      expect(listDict.get('b')).to.equal(2);
      expect(listDict.get('c')).to.equal(3);
      expect(listDict.keys()).to.eql(['c', 'b', 'a']);
      expect(listDict.delete('b')).to.equal(true);
      expect(listDict.get('b')).to.be(undefined);
      expect(listDict.keys()).to.eql(['c', 'a']);
      expect(listDict.delete('a')).to.equal(true);
      expect(listDict.get('a')).to.be(undefined);
      expect(listDict.keys()).to.eql(['c']);
    });
  });

});
