// TIME COMPLEXITY(O(N))
function twoArrayObject(a, b) {
  const combinedObj = {};

  for (let i = 0; i < a.length; i++) {
    let c = b[i] ? b[i] : null;
    combinedObj[a[i]] = c;
  }
  return combinedObj;
}

module.exports = twoArrayObject;
