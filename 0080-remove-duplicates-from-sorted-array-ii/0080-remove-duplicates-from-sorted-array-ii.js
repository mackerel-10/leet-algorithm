/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0;
  let count = 1;
  for (let j = 1; j < nums.length; j++) {
    if (count < 2 && nums[i] === nums[j]) {
      nums[++i] = nums[j];
      count++;
    } else if (nums[i] !== nums[j]) {
      nums[++i] = nums[j];
      count = 1;
    }
  }
  
  console.log(nums);
  return i + 1;
};