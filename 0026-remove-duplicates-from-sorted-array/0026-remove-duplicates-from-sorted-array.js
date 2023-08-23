/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const setNums = [...new Set(nums)];
  const k = setNums.length;
  nums.splice(0, 0, ...setNums);

  return k;
};