const { whitesmoke } = require("color-name");

// TIME COMPLEXTIY O(n)
function separatePositive(arr) {
  let a, b;

  // O(n)
  if (arr.every((n) => n > 0)) return arr;
  if (arr.every((n) => n < 0)) return arr;

  // O(n)
  for (b = 0; b < arr.length; b++) {
    a = arr.length - 1;
    //   retrieval / reassignment O(1)
    if (arr[b] < 0) {
      while (a > b && arr[a] < 0) {
        a = a - 1;
      }
      temp = arr[b];
      arr[b] = arr[a];
      arr[a] = temp;
    }
  }

  return arr;
}
module.exports = separatePositive;
