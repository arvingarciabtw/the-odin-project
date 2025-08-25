function analyzeArray(arr) {
  if (arr.length === 0) {
    return "EMPTY";
  }

  let average = 0;
  let min = arr[0];
  let max = arr[0];

  const sum = arr.reduce((sum, curr) => sum + curr);
  average = sum / arr.length;

  function getMinimum(arr) {
    arr.forEach((item) => {
      if (item < min) {
        min = item;
      }
    });
    return min;
  }

  function getMaximum(arr) {
    arr.forEach((item) => {
      if (item > max) {
        max = item;
      }
    });
    return max;
  }

  const obj = {
    average: average,
    min: getMinimum(arr),
    max: getMaximum(arr),
    length: arr.length,
  };

  return obj;
}

export default analyzeArray;
