'use strict';

function merge(A, B, compare) {
  let merged = [];
  let indexA = 0;
  let indexB = 0;
  while (indexA < A.length || indexB < B.length) {
    if (compare(A[indexA], B[indexB]) <= 0 || indexB === B.length) {
      merged.push(A[indexA]);
      indexA++;
    } else {
      merged.push(B[indexB]);
      indexB++;
    }
  }
  return merged;
}

function mergesort(arr, compare) {
  if (arr.length <= 1) {
    return arr;
  }

  if (!compare) {
    compare = (a, b) => a - b;
  }

  let midpoint = Math.floor(arr.length / 2);
  let left = mergesort(arr.slice(0, midpoint), compare);
  let right = mergesort(arr.slice(midpoint), compare);

  return merge(left, right, compare);
}

module.exports = mergesort;
