// TIME COMPLEXITY O(N)
function countPairs(arr, sum) {
  // O(N)
  const arrSet = new Set(arr);
  let results = 0;
  // O(N)
  for (let v = 0; v < arr.length; v++) {
    const element = arr[v];
    // O(1)
    arrSet.delete(element);
    const value = sum - element;
    // O(1)
    if (arrSet.has(value)) {
      results++;
      // O(1)
      arrSet.delete(value);
    }
  }
  return results;
}

module.exports = countPairs;
