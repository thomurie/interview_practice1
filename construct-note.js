// TIME COMPLEXITY = O(M+N)
function constructNote(msg, ltrs) {
  // O(1)
  if (!ltrs || ltrs.length < msg.length) return false;
  if (!msg) return true;

  ltrsObj = {};

  // string iteration = O(n)
  for (let i = 0; i < ltrs.length; i++) {
    // obj look up / assignment  = O(1)
    if (!ltrsObj[ltrs[i]]) {
      ltrsObj[ltrs[i]] = 1;
    } else {
      ltrsObj[ltrs[i]] = ltrsObj[ltrs[i]] + 1;
    }
  }

  // string iteration = O(n)
  for (let m = 0; m < msg.length; m++) {
    const element = msg[m];
    // obj look up / assignment  = O(1)
    if (!ltrsObj[element] || ltrsObj[element] === 0) return false;
    if (ltrsObj[element]) {
      ltrsObj[ltrs[m]] = ltrsObj[ltrs[m]] - 1;
    }
  }

  return true;
}

module.exports = constructNote;
