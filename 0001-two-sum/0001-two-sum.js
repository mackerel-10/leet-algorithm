/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // each input would have exactly one solution
  // may not use the same element twice
  let hashTable = {};
  let hash;

  for (let i = 0; i < nums.length; i++) {
    hash = target - nums[i];
    // console.log(hashTable[nums[i]]);
    if (hashTable[nums[i]] >= 0) {
      return[hashTable[nums[i]], i];
    } else {
      hashTable[hash] = i;
    }
  }
};