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
  console.log(numbers.length);

  while (i < numbers.length - 1) {
    if ((numbers[i] === numbers[j] && numbers[i] + numbers[j] < target)
      || j === numbers.length) {
      i++;
      j = i + 1;
      continue;
    }
    
    if (numbers[i] + numbers[j] === target) {
      return [i + 1, j + 1];
    } else {
      j++;
    }
  }
};