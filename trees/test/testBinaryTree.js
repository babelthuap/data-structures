'use strict';

const expect = require('expect.js');

const BinaryTree = require('../binaryTree');

describe('BinaryTree', () => {

  describe('constructor', () => {
    it('should create an empty tree', () => {
      let tree = new BinaryTree(42);
      expect(tree.parent()).to.be(null);
      expect(tree.isLeftChild()).to.be(false);
      expect(tree.isRightChild()).to.be(false);
      expect(tree.value()).to.be(42);
      expect(tree.left()).to.be(null);
      expect(tree.right()).to.be(null);
    });
  });

  describe('includes', () => {
    it('should test for the presence of a value in the tree', () => {
      let leftChild = new BinaryTree(2);
      let rightChild = new BinaryTree(3);
      let tree = new BinaryTree(1, leftChild, rightChild);
      expect(tree.includes(0)).to.be(false);
      expect(tree.includes(1)).to.be(true);
      expect(tree.includes(2)).to.be(true);
      expect(tree.includes(3)).to.be(true);
      expect(tree.includes(4)).to.be(false);
    });
  });

});
