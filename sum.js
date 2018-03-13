function myTwoSum(arr, value) {
  const indices = [];

  for (let i = 0; i < arr.length; i + 1) {
    for (let j = i + 1; j < arr.length; j + 1) {
      if (arr[i] + arr[j] === value) {
        indices.push([arr[i], arr[j]]);
      } else {
        return;
      }
    }
  }
}

module.exports = myTwoSum;
