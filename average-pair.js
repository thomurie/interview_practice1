// TIME COMPLEXITY O(n)
function averagePair(arr, sum) {
  if (arr.length === 0 || !sum) return false;
  let a = sum * 2;

  const arrObj = {};
  for (let i = 0; i < arr.length; i++) {
    // obj look up / assignment  = O(1)
    if (!arrObj[arr[i]]) {
      arrObj[arr[i]] = 1;
    } else {
      arrObj[arr[i]] = arrObj[arr[i]] + 1;
    }
  }

  // string iteration = O(n)
  for (let m = 0; m < arr.length; m++) {
    // obj look up / assignment  = O(1)
    if (arrObj[a - arr[m]]) return true;
  }
  return false;
}

module.exports = averagePair;
