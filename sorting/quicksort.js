'use strict';

function quicksort(arr, compare) {
  if (arr.length <= 1) {
    return arr;
  }

  if (!compare) {
    compare = (a, b) => a - b;
  }

  let pivot = arr[ Math.floor(Math.random() * arr.length) ];
  let left = [];
  let middle = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    let comparison = compare(arr[i], pivot);
    if (comparison < 0) {
      left.push(arr[i]);
    } else if (comparison === 0) {
      middle.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quicksort(left, compare).concat(middle).concat( quicksort(right, compare) );
}

module.exports = quicksort;
