'use strict';

const quicksort  = require('./quicksort')
    , mergesort  = require('./mergesort')
    , bubblesort = require('./bubblesort');

module.exports = {
  quicksort: quicksort,
  mergesort: mergesort,
  bubblesort: bubblesort,
};
