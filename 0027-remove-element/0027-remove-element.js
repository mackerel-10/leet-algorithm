/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  const newNums = nums.filter((number) => number !== val);
  const k = newNums.length;
  newNums.forEach((num, index) => nums[index] = num);
  
  return k;
};