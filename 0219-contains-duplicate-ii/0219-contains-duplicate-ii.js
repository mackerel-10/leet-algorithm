/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let hashTable = {};
  let j;

  const hi = new Map();
  for (let i = 0; i < nums.length; i++) {
    
    if (hi.has(nums[i]) && i - hi.get(nums[i])<= k) {
      return true;
    }
    hi.set(nums[i],i)
 // console.log(hi.set(nums[i],i));
  }  
  return false;
};