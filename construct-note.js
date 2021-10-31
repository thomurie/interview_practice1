// add whatever parameters you deem necessary
function constructNote(msg, ltrs) {
  // O(1)
  if (!ltrs || ltrs.length < msg.length) return false;
  if (!msg) return true;
  msgArr = msg.split("");
  ltrsArr = ltrs.split("");

  // O(m+n)
  for (let l = 0; l < ltrsArr.length; l++) {
    let check = msgArr.indexOf(ltrsArr[l]);
    if (check !== -1) {
      contains.push(ltrsArr[l]);
      msgArr.splice(check, 1);
    }
  }

  // O(1)
  return contains.length === msg.length;
}

// O(m+n) example:

// for(int i = 0, i < m, i++)
//     //code
// for(int j = 0, j < n, j++)
//     //code
