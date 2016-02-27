'use strict';

const linear = require('./linear')
    , lists  = require('./lists');

module.exports = {
  Queue: linear.Queue,
  Stack: linear.Stack,
  DoublyLinkedList: lists.DoublyLinkedList,
  LinkedList: lists.LinkedList,
};
