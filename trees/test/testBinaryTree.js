'use strict';

const expect = require('expect.js');

const BinaryTree = require('../binaryTree');

describe('BinaryTree', () => {

  describe('constructor', () => {
    it('should create an empty tree', () => {
      let tree = new BinaryTree(42);
      expect(tree.parent()).to.be(null);
      expect(tree.isLeftChild()).to.be(false);
      expect(tree.value()).to.be(42);
      expect(tree.left().isEmpty).to.be(true);
      expect(tree.right().isEmpty).to.be(true);
    });
  });


});
