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

