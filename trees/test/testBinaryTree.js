'use strict';

const expect = require('expect.js');

const BinaryTree = require('../binaryTree');

describe('BinaryTree', () => {

  describe('constructor', () => {
    it('should create a new tree', () => {
      let tree = new BinaryTree(42);
      expect(tree.parent()).to.be(null);
      expect(tree.isLeftChild()).to.be(false);
      expect(tree.isRightChild()).to.be(false);
      expect(tree.value()).to.be(42);
      expect(tree.left()).to.be(null);
      expect(tree.right()).to.be(null);
    });
  });

  describe('parent() and setParent()', () => {
    let tree = new BinaryTree(0);
    let leftChild = new BinaryTree('L');
    let rightChild = new BinaryTree('R');
    leftChild.setParent(tree, 'left');
    rightChild.setParent(tree, 'right');
    it('should set parent', () => {
      expect(leftChild.isLeftChild()).to.be(true);
      expect(rightChild.isRightChild()).to.be(true);
      expect(leftChild.parent()).to.be(tree);
      expect(rightChild.parent()).to.be(tree);
    });
    it("should update parent's children", () => {
      expect(tree.left()).to.be(leftChild);
      expect(tree.right()).to.be(rightChild);
    });
  });

  describe('setLeft() and setRight()', () => {
    let tree = new BinaryTree(0);
    let childA = new BinaryTree('A');
    let childB = new BinaryTree('B');
    let childC = new BinaryTree('B');
    it('should set the left child', () => {
      tree.setLeft(childA);
      expect(tree.left()).to.be(childA);
      expect(childA.parent()).to.be(tree);
    });
    it('should set the right child', () => {
      tree.setRight(childB);
      expect(tree.right()).to.be(childB);
      expect(childB.parent()).to.be(tree);
    });
    it('should overwrite a child', () => {
      tree.setLeft(childC);
      expect(tree.left()).to.be(childC);
      expect(childA.parent()).to.be(null);
      expect(childC.parent()).to.be(tree);
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
    it('should return false for an empty tree', () => {
      let tree = new BinaryTree();
      expect(tree.includes(0)).to.be(false);
      expect(tree.includes(1)).to.be(false);
    });
  });

});
