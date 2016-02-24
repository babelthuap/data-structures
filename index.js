'use strict';

const linearStructures = require('./linear-structures')
    , lists            = require('./lists');

module.exports = {
  Queue: linearStructures.Queue,
  Stack: linearStructures.Stack,
  DoublyLinkedList: lists.DoublyLinkedList,
  LinkedList: lists.LinkedList,
};
