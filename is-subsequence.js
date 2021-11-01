// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  // str1 has to be in str2
  const str1Obj = {};
  const str2Obj = {};
  const str1Arr = [];
  const str2Arr = [];

  // O(N)
  for (let s = 0; s < str1.length; s++) {
    const element = str1[s];
    str1Arr.push(element);
    if (!str1Obj[element]) {
      str1Obj[element] = 1;
    } else {
      str1Obj[element] = str1Obj[element] + 1;
    }
  }

  // O(M)
  for (let ss = 0; ss < str2.length; ss++) {
    const element = str2[ss];
    if (str1Obj[element]) {
      if (!str2Obj[element]) {
        str2Arr.push(element);
        str2Obj[element] = 1;
      } else {
        if (str1Obj[element] > str2Obj[element]) {
          str2Arr.push(element);
          str2Obj[element] = str2Obj[element] + 1;
        }
      }
    }
  }

  // O(N)
  for (let v = 0; v < str1Arr.length; v++) {
    if (str1Arr[v] !== str2Arr[v]) return false;
  }
  return true;
}

module.exports = isSubsequence;
