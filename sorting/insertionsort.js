'use strict';

function insertionsort(arr, compare) {
  if (!compare) {
    compare = (a, b) => a - b;
  }

  for (let i = 1; i < arr.length; i++) {
    // find the index of the min of arr.slice(i - 1)
    let min = i;
    for (let k = i - 1; k < arr.length; k++) {
      if (compare(arr[k], arr[min]) < 0) {
        min = k;
      }
    }
    // swap the found min into position i-1
    let temp = arr[i - 1];
    arr[i - 1] = arr[min];
    arr[min] = temp;
  }

  return arr;
}

module.exports = insertionsort;
