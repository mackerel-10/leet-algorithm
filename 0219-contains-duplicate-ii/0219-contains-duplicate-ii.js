/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let hashTable = {};
  let j;

  for (let i = 0; i < nums.length; i++) {
    j = hashTable[nums[i]];
    // console.log (j);
    if (j >= 0 && Math.abs(i - j) <= k) {
      return true;
    }
    hashTable[nums[i]] = i;
  }
  return false;
};