'use strict';

const bubblesort    = require('./bubblesort')
    , selectionsort = require('./selectionsort')
    , mergesort     = require('./mergesort')
    , quicksort     = require('./quicksort');

module.exports = {
  bubblesort: bubblesort,
  selectionsort: selectionsort,
  mergesort: mergesort,
  quicksort: quicksort,
};
