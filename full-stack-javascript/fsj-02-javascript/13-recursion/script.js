// Iterative Fibonacci function
function iterativeFibs(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      arr.push(0);
    } else if (i === 1) {
      arr.push(1);
    } else {
      let sum = arr[i - 2] + arr[i - 1];
      arr.push(sum);
    }
  }

  return arr;
}

console.log("\n -- ITERATIVE FIBONACCI -- \n");
console.log(`Fibonacci, input 1: ${iterativeFibs(1)}`);
console.log(`Fibonacci, input 2: ${iterativeFibs(2)}`);
console.log(`Fibonacci, input 8: ${iterativeFibs(8)}`);

// Recursive Fibonacci function
function recursiveFibs(n) {
  if (n < 2) {
    return [0];
  }

  if (n < 3) {
    return [0, 1];
  }

  let arr = recursiveFibs(n - 1);
  arr.push(arr[n - 2] + arr[n - 3]);
  return arr;
}

console.log("\n -- RECURSIVE FIBONACCI -- \n");
console.log(`Fibonacci, input 1: ${recursiveFibs(1)}`);
console.log(`Fibonacci, input 2: ${recursiveFibs(2)}`);
console.log(`Fibonacci, input 8: ${recursiveFibs(8)}`);

// Recursive merge sort function
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

// Helper
function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

console.log("\n -- MERGE SORT -- \n");
console.log(
  `Sorted array input of [3, 2, 1, 13, 8, 5, 0, 1]:\n ${mergeSort([3, 2, 1, 13, 8, 5, 0, 1])}`,
);
console.log(
  `Sorted array input of [105, 79, 100, 110]:\n ${mergeSort([105, 79, 100, 110])}`,
);
