/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let i = 0;
  let j = s.length - 1;
  let a, b;

  while (i < s.length && j >= 0) {
    a = s[i].toLowerCase();
    b = s[j].toLowerCase();

    // console.log(a, b);
    if (!(a >= 'a' && a <= 'z') && !(a >= '0' && a <= '9')) {
      i++;
      continue;
    }
    if (!(b >= 'a' && b <= 'z') && !(b >= '0' && b <= '9')) {
      j--;
      continue;
    }

    if (a === b) {
        i++;
        j--;
    } else {
      return false;
    }
  }
  return true;
};