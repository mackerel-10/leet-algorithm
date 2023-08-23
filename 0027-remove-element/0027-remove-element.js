/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  const newNums = nums.filter((number) => number !== val);
  const k = newNums.length;
  nums.splice(0, k, ...newNums)
  // newNums.forEach((num, index) => nums[index] = num);
  
  return k;
};