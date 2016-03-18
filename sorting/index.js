'use strict';

const bubblesort    = require('./bubblesort')
    , insertionsort = require('./insertionsort')
    , mergesort     = require('./mergesort')
    , quicksort     = require('./quicksort');

module.exports = {
  bubblesort: bubblesort,
  insertionsort: insertionsort,
  mergesort: mergesort,
  quicksort: quicksort,
};
