// TIME COMPLEXITY = O(N+M)
function sameFrequency(num1, num2) {
  // O(n)
  num1Str = num1.toString();
  // O(m)
  num2Str = num2.toString();
  num1Obj = {};
  num2Obj = {};

  if (num1Str.length !== num2Str.length) return false;

  // O(n)
  for (let n = 0; n < num1Str.length; n++) {
    const element = num1Str[n];
    // assignment / retrieval = O(1);
    if (!num1Obj[element]) {
      num1Obj[element] = 1;
    } else {
      num1Obj[element] = num1Obj[element] + 1;
    }
  }

  // O(m)
  for (let m = 0; m < num2Str.length; m++) {
    const element = num2Str[m];
    if (!num1Obj[element]) return false;
    // assignment / retrieval = O(1);
    if (!num2Obj[element]) {
      num2Obj[element] = 1;
    } else {
      num2Obj[element] = num2Obj[element] + 1;
    }
  }

  // O(n)
  for (let n = 0; n < num1Str.length; n++) {
    const element = num1Str[n];
    if (num1Obj[element] !== num2Obj[element]) return false;
  }
  return true;
}

module.exports = sameFrequency;
