/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  // alreday sorted in non-decreasing order
  // 1 <= index1 < index2 < numbers.length
  // return indices of the two numbers
  let i = 0, j = 1;

  /* if (numbers.length === 0) {
    return;
  } */

  while (i < numbers.length - 1) {
    if (j === numbers.length) {
      i++;
      j = i + 1;
      continue;
    }

    if (numbers[i] + numbers[j] !== target) {
      if (numbers[i] === numbers[i + 1]) {
        i++;
      } else {
        j++;
      }
    } else {
      return [i + 1, j + 1];
    }
  }
};