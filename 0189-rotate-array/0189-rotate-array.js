/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  if (k > nums.length) {
    k %= nums.length;
  }

  const temp = nums.splice(-k, k);

  nums.splice(0, 0, ...temp)
  console.log(nums);  
};