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
    if (j !== undefined && i - j <= k) {
      return true;
    }
    hashTable[nums[i]] = i;
  }
  return false;
};